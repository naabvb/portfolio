import { Box, Stack, Text } from "@chakra-ui/react";

function occupation() {
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
          <Box as="span">💼</Box>{" "}
          <Box as="span">Application specialist at Samlink Oy Ab</Box>
        </Text>
        <Text
          color="#8f9098"
          fontSize={{ base: "md", md: "lg", lg: "2xl", "2xl": "2xl" }}
        >
          <Box as="span">🎓</Box>{" "}
          <Box as="span">M.Sc. in Mathematical Information Technology</Box>
        </Text>
        <Text
          color="#8f9098"
          fontSize={{ base: "md", md: "lg", lg: "2xl", "2xl": "2xl" }}
        >
          <Box mx="4.5px" as="span">
            📍
          </Box>{" "}
          <Box as="span">Jyväskylä, Finland</Box>
        </Text>
      </Stack>
    </Box>
  );
}

export default occupation;
