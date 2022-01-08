import { Box, Stack, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function repositoryLink({ header, body, link }) {
  return (
    <Link _hover={{ textDecoration: "none" }} isExternal href={link}>
      <Box
        rounded="lg"
        p="2"
        bg="#222222"
        my="3"
        _hover={{
          transform: "translate3D(0,1px,0) scale(1.03)",
          transition: "all .4s ease",
          cursor: "pointer",
        }}
        transition="all .5s ease"
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
