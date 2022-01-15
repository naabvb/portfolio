import { Box, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SocialPayload } from "../interfaces/components";
import { margins } from "../styles/theme";
import { transitions } from "../styles/transitions";
import SocialButton from "./socialButton";

const Social = ({ social }: SocialPayload) => {
  return (
    <Box>
      <Stack mt="2vh" ml={margins.centeringMargin} spacing={5} direction="row">
        <SocialButton
          transition={transitions.social.github}
          icon={<FaGithub className="repositoryLinkIcon" />}
          socialItem={social.github}
        />
        <SocialButton
          transition={transitions.social.linkedin}
          icon={<FaLinkedin color="#0077b5" />}
          socialItem={social.linkedin}
        />
      </Stack>
    </Box>
  );
};

export default Social;
