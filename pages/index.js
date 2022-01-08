import { Flex } from "@chakra-ui/react";
import Intro from "../components/intro";
import Showcase from "../components/showcase";

export default function Home() {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Intro />
      <Showcase />
    </Flex>
  );
}
