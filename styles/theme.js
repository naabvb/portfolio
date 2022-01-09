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
    "span, h2, h1, p, img, a, .modalHeader": {
      _selection: {
        color: mode("white", "black")(props),
        bg: mode("black", "white")(props),
      },
    },
    ".cardBody, .modalBody": {
      bg: mode("white", "#090909")(props),
    },
    ".cardBodyText, .modalBodyText, .repositoryLinkBodyText": {
      color: mode("gray.700", "#8f9098")(props),
    },
    ".cardHeader, .modalHeader, .showcaseHeader": {
      color: mode("gray.800", "white")(props),
    },
    ".repositoryLinkBody": {
      bg: mode("gray.100", "#222222")(props),
    },
    ".repositoryLinkHeader, .repositoryLinkIcon, .externalLinkButton": {
      color: mode("black", "white")(props),
    },
    ".occupationText": {
      color: mode("gray.900", "#8f9098")(props),
    },
    ".showcaseHeader": {
      bgGradient: mode("linear(to-l, #000046, #0d6983)", "none")(props),
      bgClip: mode("text", "none")(props),
    },
    ".primaryHeader": {
      color: "white",
      bgGradient: mode("linear(to-l, #b92b27, #1565C0)", "none")(props),
      bgClip: mode("text", "")(props),
    },
    ".secondaryHeader": {
      color: "gray.200",
      bgGradient: mode("linear(to-l, #8A2387, #E94057)")(props),
      bgClip: mode("text", "")(props),
    },
  }),
};

export const margins = {
  centeringMargin: { base: "2px", md: "5px", lg: "10px" },
};

export const fonts = {
  occupationFontSize: { base: "md", md: "lg", lg: "2xl", "2xl": "2xl" },
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
  "2xl": "1950px",
});

const theme = extendTheme({
  config,
  styles,
  fontSizes,
  breakpoints,
});

export default theme;
