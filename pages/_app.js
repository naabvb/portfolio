import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../styles/theme";

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
