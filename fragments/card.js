import { Box, Image, Badge, Stack, useDisclosure } from "@chakra-ui/react";
import ReadMoreModal from "../components/readMoreModal";
import { transitions } from "../styles/transitions";

function card({ project }) {
  const disclosure = useDisclosure();
  return (
    <Box
      _hover={transitions.card.hover}
      transition={transitions.card.transition}
      className="cardBody"
      mx="auto"
      rounded="lg"
      onClick={() => disclosure.onOpen()}
      shadow="lg"
      overflow="hidden"
      maxW="2xl"
      noOfLines={3}
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
        <Box as="span" fontSize="xs" textTransform="uppercase">
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
          noOfLines={2}
          mt={2}
          as="span"
          fontSize="sm"
          className="cardBodyText"
        >
          {project.card.body}
        </Box>
      </Box>
    </Box>
  );
}

export default card;
