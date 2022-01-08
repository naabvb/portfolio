import {
  Box,
  Image,
  useColorModeValue,
  Badge,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import ReadMoreModal from "../components/readMoreModal";
import { transitions } from "../styles/transitions";

function card({ project }) {
  const disclosure = useDisclosure();
  return (
    <Box
      _hover={transitions.card.hover}
      transition={transitions.card.transition}
      className="superCard"
      mx="auto"
      rounded="lg"
      onClick={() => disclosure.onOpen()}
      shadow="lg"
      bg={useColorModeValue("white", "#090909")}
      width={{ lg: "33%" }}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={{ base: 40, md: 52, xl: 56 }}
        fit="cover"
        src={`/images/${project.card.image}`}
        alt="Image showing the project"
      />

      <Box p={6}>
        <Box
          as="span"
          fontSize="xs"
          textTransform="uppercase"
          color={useColorModeValue("brand.600", "brand.400")}
        >
          <Stack direction="row" spacing="1">
            {project.card.badges.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </Stack>
        </Box>
        <ReadMoreModal
          card={project.card}
          disclosure={disclosure}
          modal={project.modal}
          externalLink={project.externalLink}
        />
        <Box
          mt={2}
          as="span"
          fontSize="sm"
          color={useColorModeValue("gray.600", "#8f9098")}
        >
          {project.card.body}
        </Box>
      </Box>
    </Box>
  );
}

export default card;
