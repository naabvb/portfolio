import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
