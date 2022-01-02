import { Flex, Stack, Heading } from "@chakra-ui/react";
import Card from "../fragments/card";

function cards() {
  return (
    <Flex alignItems="flex-start" ml="11vw" mt="2vh" mr="10vw">
      <Stack ml={{ base: "2px", md: "5px", lg: "10px" }} direction="column">
        <Heading my="2vh">Projects</Heading>
        <Stack direction={{ base: "column", lg: "row" }} spacing="10">
          <Card
            badges={["NodeJs", "React", "Python"]}
            image="trailcams.png"
            header="Trailcams PWA"
            body="A true fullstack application that consists of NodeJS backend, React frontend and multiple Python microservices,"
          />
          <Card
            badges={["Javascript", "P5.JS"]}
            image="fractal.png"
            header="Fractal Experiments"
            body="Canvas app made with P5.JS that procedually generates landscape and perlin noise skybox with clouds."
          />
          <Card
            badges={["Flutter", "React Native", "Kotlin", "Swift"]}
            image="gradu.jpg"
            header="Cross-platform benchmark apps (Master's thesis)"
            body="Four benchmark apps for comparing different cross-platform tehnicques. Apps were developed with Flutter, React Native, Kotlin and Swift."
          />
        </Stack>
      </Stack>
    </Flex>
  );
}

export default cards;
