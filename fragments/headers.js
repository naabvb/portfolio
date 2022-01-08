import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import { margins } from "../styles/theme";

function headers({ headers }) {
  return (
    <Stack
      spacing={{ base: "3", md: "5", lg: "7" }}
      justify="center"
      alignItems="flex-start"
      direction="column"
    >
      <Heading
        whiteSpace="nowrap"
        fontWeight="bold"
        className="primaryHeader"
        as="h1"
        fontSize={{ base: "5xl", md: "7xl", lg: "9xl", "2xl": "11xl" }}
      >
        {headers.name}
      </Heading>
      <Box>
        <Text
          whiteSpace="nowrap"
          ml={margins.centeringMargin}
          fontWeight="semibold"
          fontSize={{ base: "1xl", md: "3xl", lg: "5xl", "2xl": "7xl" }}
          as="h2"
        >
          <Box className="secondaryHeader" as="span">
            {headers.title}
          </Box>
        </Text>
      </Box>
    </Stack>
  );
}

export default headers;
