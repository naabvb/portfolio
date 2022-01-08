import {
  Box,
  Stack,
  Button,
  useBreakpointValue,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { margins } from "../styles/theme";

function socialButtons({ social }) {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Box>
      <Stack mt="2vh" ml={margins.centeringMargin} spacing={5} direction="row">
        <Link isExternal href={social.githubLink}>
          <Button
            bg={useColorModeValue("white", "#090909")}
            shadow="md"
            size={buttonSize}
            leftIcon={<FaGithub className="repositoryLinkIcon" />}
          >
            Github
          </Button>
        </Link>
        <Link isExternal href={social.linkedinLink}>
          <Button
            bg={useColorModeValue("white", "#090909")}
            shadow="md"
            size={buttonSize}
            leftIcon={<FaLinkedin color="#0077b5" />}
          >
            LinkedIn
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default socialButtons;
