import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/400.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
