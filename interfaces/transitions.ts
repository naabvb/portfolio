import { Transition } from "framer-motion";

export interface HoverTransition {
  hover: Record<string, string>;
  transition: string;
}

export interface ChakraTransition {
  enter: Transition;
}

export interface Transitions {
  card: HoverTransition;
  repositoryLink: HoverTransition;
  header: {
    slideFade: ChakraTransition;
  };
  occupation: {
    slideFade: ChakraTransition;
  };
  social: {
    github: ChakraTransition;
    linkedin: ChakraTransition;
  };
  showcase: {
    header: ChakraTransition;
    cards: Record<string, ChakraTransition>;
  };
  themeToggle: ChakraTransition;
}
