import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Intro from "../layouts/intro";
import Showcase from "../layouts/showcase";
import ThemeToggle from "../components/themeToggle";

const Index = () => {
  return (
    <>
      <Head>
        <title>Lauri Pimiä</title>
        <meta name="title" content="Lauri Pimiä" />
        <meta
          name="description"
          content="Full Stack software engineer from Finland."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeToggle />
      <Flex justifyContent="center" flexDirection="column">
        <Intro />
        <Showcase />
      </Flex>
    </>
  );
};

export default Index;
