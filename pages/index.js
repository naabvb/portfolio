import { Flex, Heading, Center, Divider } from "@chakra-ui/react";
import Intro from "../components/intro";
import Cards from "../components/cards";
import Testi from "../components/testi";

export default function Home() {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Intro />
      <Cards />
      <Testi />
    </Flex>
  );
}
