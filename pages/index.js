import { Flex } from "@chakra-ui/react";
import Intro from "../components/intro";
import Cards from "../components/cards";

export default function Home() {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Intro />
      <Cards />
    </Flex>
  );
}
