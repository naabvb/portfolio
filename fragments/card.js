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
      _hover={{
        transform: "translate3D(0,1px,0) scale(1.03)",
        transition: "all .4s ease",
      }}
      transition="all .5s ease"
      className="superCard"
      mx="auto"
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue("white", "#090909")}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={{ base: 40, md: 52, xl: 56 }}
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
              {badges.map((item, index) => (
                <Badge key={index}>{item}</Badge>
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
            color={useColorModeValue("gray.600", "#8f9098")}
          >
            {body}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default card;
