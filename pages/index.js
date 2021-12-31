import { Heading, Stack, Text, Box, Image } from "@chakra-ui/react";
export default function Home() {
  return (
    <Stack mt="15vh" mx="15vw" alignItems="flex-start" justifyContent="center">
      <Stack
        width="100%"
        spacing="300"
        justifyContent="flex-start"
        direction={{ base: "row", md: "row", lg: "row", xl: "row" }}
      >
        <Stack
          spacing="7"
          justify="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Heading
            fontWeight="bold"
            color="white"
            as="h1"
            fontSize={{ base: "5xl", md: "8xl", lg: "11xl" }}
          >
            Lauri Pimiä
          </Heading>
          <Box>
            <Text
              ml="10px"
              fontWeight="semibold"
              fontSize={{ base: "1xl", md: "4xl", lg: "6xl" }}
              as="h2"
            >
              <Box as="span" color="#8f9098">
                Full-Stack
              </Box>{" "}
              <Box as="span" color="#8f9098">
                software engineer.
              </Box>
            </Text>
          </Box>
        </Stack>
        <Box alignItems="center" display="flex">
          <Image
            borderRadius="full"
            objectFit="cover"
            max-maxWidth="100%"
            height="auto"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Stack>
    </Stack>
  );
}
