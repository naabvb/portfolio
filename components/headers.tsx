import { Stack, Box, Text, Heading, SlideFade } from "@chakra-ui/react";
import { HeadersPayload } from "../interfaces/components";
import { margins } from "../styles/theme";
import { transitions } from "../styles/transitions";

const Headers = ({ headers }: HeadersPayload) => {
  return (
    <Stack
      spacing={{ base: "3", md: "5", lg: "0" }}
      justify="center"
      alignItems="flex-start"
      direction="column"
    >
      <SlideFade in={true} transition={transitions.header.slideFade}>
        <Heading
          whiteSpace="nowrap"
          fontWeight="700"
          className="primaryHeader"
          as="h1"
          fontSize={{ base: "5xl", md: "7xl", lg: "9xl", "2xl": "11xl" }}
        >
          {headers.name}
        </Heading>
      </SlideFade>
      <SlideFade in={true} transition={transitions.header.slideFade}>
        <Box>
          <Text
            whiteSpace="nowrap"
            ml={margins.centeringMargin}
            fontWeight="600"
            fontSize={{ base: "1xl", md: "3xl", lg: "5xl", "2xl": "7xl" }}
            as="h2"
          >
            <Box className="secondaryHeader" as="span">
              {headers.title}
            </Box>
          </Text>
        </Box>
      </SlideFade>
    </Stack>
  );
};

export default Headers;
