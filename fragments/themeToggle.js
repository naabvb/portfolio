import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function themeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py="1em" px="2em" position="absolute" right="0">
      <IconButton
        size="lg"
        variant="ghost"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Box>
  );
}

export default themeToggle;
