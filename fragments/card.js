import {
  Box,
  Image,
  Heading,
  useColorModeValue,
  Badge,
  Stack,
} from "@chakra-ui/react";

function card({ badges, header, body, image }) {
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={`/images/${image}`}
        alt="Image showing the project"
      />

      <Box p={6}>
        <Box>
          <Box
            as="span"
            fontSize="xs"
            textTransform="uppercase"
            color={useColorModeValue("brand.600", "brand.400")}
          >
            <Stack direction="row" spacing="1">
              {badges.map((item) => (
                <Badge>{item}</Badge>
              ))}
            </Stack>
          </Box>
          <Heading
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
          >
            {header}
          </Heading>
          <Box
            mt={2}
            as="span"
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {body}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default card;
