import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" flexDirection="column">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
