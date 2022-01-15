import {
  Button,
  useBreakpointValue,
  Link,
  useColorModeValue,
  ScaleFade,
} from "@chakra-ui/react";
import { SocialButtonPayload } from "../interfaces/components";

const SocialButton = ({
  transition,
  icon,
  socialItem,
}: SocialButtonPayload) => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <ScaleFade in={true} initialScale={0.9} transition={transition}>
      <Link isExternal href={socialItem.link}>
        <Button
          bg={useColorModeValue("white", "#111111")}
          shadow="md"
          fontWeight="500"
          size={buttonSize}
          leftIcon={icon}
        >
          {socialItem.name}
        </Button>
      </Link>
    </ScaleFade>
  );
};

export default SocialButton;
