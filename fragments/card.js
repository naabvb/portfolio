import {
  Box,
  Image,
  Badge,
  Stack,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
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
              <Badge px={1} py={0.4} key={index}>
                {item}
              </Badge>
            ))}
          </Stack>
        </Box>
        <Box pt="4px" pb="2.5px" noOfLines={1}>
          <Heading className="cardHeader" fontWeight="700" fontSize="xl">
            {project.card.header}
          </Heading>
        </Box>
        <Box noOfLines={2} as="span" fontSize="sm" className="cardBodyText">
          {project.card.body}
        </Box>
      </Box>
      <ReadMoreModal
        card={project.card}
        disclosure={disclosure}
        modal={project.modal}
        externalLink={project.externalLink}
      />
    </Box>
  );
}

export default card;
