import { Box, IconButton, useColorMode, ScaleFade } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { transitions } from "../styles/transitions";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py="1em" px="2em" position="absolute" right="0">
      <ScaleFade
        in={true}
        initialScale={0.9}
        transition={transitions.themeToggle}
      >
        <IconButton
          aria-label="Button to change between light and dark themes"
          size="lg"
          variant="ghost"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </ScaleFade>
    </Box>
  );
};

export default ThemeToggle;
