import { Box, Stack, Text } from "@chakra-ui/react";

function occupation({ occupation }) {
  return (
    <Box>
      <Stack
        spacing="1"
        ml={{ base: "2px", md: "5px", lg: "10px" }}
        direction="column"
      >
        <Text
          color="#8f9098"
          fontSize={{ base: "md", md: "lg", lg: "2xl", "2xl": "2xl" }}
        >
          <Box as="span">💼</Box> <Box as="span">{occupation.work}</Box>
        </Text>
        <Text
          color="#8f9098"
          fontSize={{ base: "md", md: "lg", lg: "2xl", "2xl": "2xl" }}
        >
          <Box as="span">🎓</Box> <Box as="span">{occupation.education}</Box>
        </Text>
        <Text
          color="#8f9098"
          fontSize={{ base: "md", md: "lg", lg: "2xl", "2xl": "2xl" }}
        >
          <Box mx="4.5px" as="span">
            📍
          </Box>{" "}
          <Box as="span">{occupation.location}</Box>
        </Text>
      </Stack>
    </Box>
  );
}

export default occupation;
