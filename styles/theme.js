import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "white")(props),
      bg: mode("gray.100", "black")(props),
    },
    "span, h2, h1, p, img": {
      _selection: {
        color: mode("white", "black")(props),
        bg: mode("black", "white")(props),
      },
    },
  }),
};

const fontSizes = {
  "10xl": "10rem",
  "11xl": "11rem",
  "12xl": "12rem",
};

const breakpoints = createBreakpoints({
  sm: "420px",
  md: "768px",
  lg: "1082px",
  xl: "1200px",
  "2xl": "1800px",
});

const theme = extendTheme({
  config,
  styles,
  fontSizes,
  breakpoints,
});

export default theme;
