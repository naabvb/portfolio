import { Box, Stack, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { transitions } from "../styles/transitions";

function repositoryLink({ header, body, link }) {
  return (
    <Link _hover={{ textDecoration: "none" }} isExternal href={link}>
      <Box
        rounded="lg"
        p="2"
        bg="#222222"
        my="3"
        _hover={transitions.card.hover}
        transition={transitions.card.transition}
      >
        <Stack
          alignItems="center"
          mx="1"
          direction="row"
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Heading color="white" size="sm">
              {header}
            </Heading>
            <Text fontSize="sm">{body}</Text>
          </Stack>
          <Icon boxSize="1.5em" color="white" as={FaGithub} />
        </Stack>
      </Box>
    </Link>
  );
}

export default repositoryLink;
