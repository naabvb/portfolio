import { Box, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function socialButtons() {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Box>
      <Stack
        mt="2vh"
        ml={{ base: "2px", md: "5px", lg: "10px" }}
        spacing={5}
        direction="row"
      >
        <Button size={buttonSize} leftIcon={<FaGithub color="#ffffff" />}>
          Github
        </Button>
        <Button size={buttonSize} leftIcon={<FaLinkedin color="#0077b5" />}>
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}

export default socialButtons;
