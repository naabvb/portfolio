import { Flex, Stack, Heading } from "@chakra-ui/react";
import { projects } from "../data/projects";
import Card from "../fragments/card";

function showcase() {
  return (
    <Flex alignItems="flex-start" mx="10vw" mt="5vh">
      <Stack ml={{ base: "2px", md: "5px", lg: "10px" }} direction="column">
        <Heading my="2vh">Projects</Heading>
        <Stack direction={{ base: "column", lg: "row" }} spacing="10">
          {projects.map((project) => (
            <Card project={project} key={project.modal.header} />
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default showcase;
