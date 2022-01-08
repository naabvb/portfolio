import { Box, Stack, Button, useBreakpointValue, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function socialButtons({ social }) {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Box>
      <Stack
        mt="2vh"
        ml={{ base: "2px", md: "5px", lg: "10px" }}
        spacing={5}
        direction="row"
      >
        <Link isExternal href={social.githubLink}>
          <Button size={buttonSize} leftIcon={<FaGithub color="#ffffff" />}>
            Github
          </Button>
        </Link>
        <Link isExternal href={social.linkedinLink}>
          <Button size={buttonSize} leftIcon={<FaLinkedin color="#0077b5" />}>
            LinkedIn
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default socialButtons;
