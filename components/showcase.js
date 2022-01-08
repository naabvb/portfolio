import { Flex, Stack, Heading } from "@chakra-ui/react";
import { projects } from "../data/projects";
import Card from "../fragments/card";
import { margins } from "../styles/theme";

function showcase() {
  return (
    <Flex alignItems="flex-start" mx="10vw" my={{ base: "2vh", "2xl": "5vh" }}>
      <Stack ml={margins.centeringMargin} direction="column">
        <Heading
          className="showcaseHeader"
          my="2vh"
          fontSize={{ base: "4xl", "2xl": "5xl" }}
        >
          Projects
        </Heading>
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
