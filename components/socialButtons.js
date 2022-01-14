import {
  Box,
  Stack,
  Button,
  useBreakpointValue,
  Link,
  useColorModeValue,
  ScaleFade,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { margins } from "../styles/theme";
import { transitions } from "../styles/transitions";

function SocialButtons({ social }) {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Box>
      <Stack mt="2vh" ml={margins.centeringMargin} spacing={5} direction="row">
        <ScaleFade
          in={true}
          initialScale={0.9}
          transition={transitions.social.github}
        >
          <Link isExternal href={social.githubLink}>
            <Button
              bg={useColorModeValue("white", "#111111")}
              shadow="md"
              fontWeight="500"
              size={buttonSize}
              leftIcon={<FaGithub className="repositoryLinkIcon" />}
            >
              Github
            </Button>
          </Link>
        </ScaleFade>
        <ScaleFade
          in={true}
          initialScale={0.9}
          transition={transitions.social.linkedin}
        >
          <Link isExternal href={social.linkedinLink}>
            <Button
              bg={useColorModeValue("white", "#111111")}
              shadow="md"
              fontWeight="500"
              size={buttonSize}
              leftIcon={<FaLinkedin color="#0077b5" />}
            >
              LinkedIn
            </Button>
          </Link>
        </ScaleFade>
      </Stack>
    </Box>
  );
}

export default SocialButtons;
