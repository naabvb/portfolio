import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Intro from "../components/intro";
import Showcase from "../components/showcase";
import ThemeToggle from "../fragments/themeToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lauri Pimiä</title>
        <meta name="title" content="Lauri Pimiä" />
      </Head>
      <ThemeToggle />
      <Flex justifyContent="center" flexDirection="column">
        <Intro />
        <Showcase />
      </Flex>
    </>
  );
}
