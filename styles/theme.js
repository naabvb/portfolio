import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "black")(props),
    },
  }),
};

const fontSizes = {
  "10xl": "10rem",
  "11xl": "11rem",
  "12xl": "12rem",
};

const theme = extendTheme({ config, styles, fontSizes });

export default theme;
