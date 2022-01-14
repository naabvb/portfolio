import { Flex, Stack, Heading, SlideFade, ScaleFade } from "@chakra-ui/react";
import { projects } from "../data/projects";
import Card from "../components/card";
import { margins } from "../styles/theme";
import { transitions } from "../styles/transitions";

function Showcase() {
  return (
    <Flex alignItems="flex-start" mx="10vw" my={{ base: "2vh", "2xl": "5vh" }}>
      <Stack ml={margins.centeringMargin} direction="column">
        <SlideFade in={true} transition={transitions.showcase.header}>
          <Heading
            className="showcaseHeader"
            fontWeight="500"
            my="2vh"
            pb="4px"
            fontSize={{ base: "4xl", "2xl": "5xl" }}
          >
            Projects
          </Heading>
        </SlideFade>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justify="space-evenly"
          spacing="10"
        >
          {projects.map((project, index) => (
            <ScaleFade
              key={index}
              in={true}
              initialScale={0.9}
              transition={transitions.showcase[`card${index}`]}
            >
              <Card project={project} key={project.modal.header} />
            </ScaleFade>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Showcase;
