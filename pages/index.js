import { useMediaQuery } from "@chakra-ui/react";
import Intro from "../components/intro";

export default function Home() {
  const [isMd] = useMediaQuery("(min-width: 48em)");
  const [isSm] = useMediaQuery("(min-width: 30em");
  return <Intro />;
}
