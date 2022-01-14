import { Box, Stack, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { transitions } from "../styles/transitions";

function repositoryLink({ header, body, link }) {
  return (
    <Link _hover={{ textDecoration: "none" }} isExternal href={link}>
      <Box
        rounded="lg"
        p="2"
        my="3"
        className="repositoryLinkBody"
        shadow="md"
        _hover={transitions.repositoryLink.hover}
        transition={transitions.repositoryLink.transition}
      >
        <Stack
          alignItems="center"
          mx="1"
          direction="row"
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Heading className="repositoryLinkHeader" size="sm">
              {header}
            </Heading>
            <Text fontSize="sm" className="repositoryLinkBodyText">
              {body}
            </Text>
          </Stack>
          <Icon
            boxSize="1.5em"
            color="none"
            className="repositoryLinkIcon"
            as={FaGithub}
          />
        </Stack>
      </Box>
    </Link>
  );
}

export default repositoryLink;
