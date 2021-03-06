import { Transitions } from "../interfaces/transitions";

export const transitions: Transitions = {
  card: {
    hover: {
      transform: "translate3D(0,1px,0) scale(1.03)",
      transition: "all .4s ease",
      cursor: "pointer",
    },
    transition: "all .5s ease",
  },
  repositoryLink: {
    hover: {
      transform: "translate3D(0,1px,0) scale(1.01)",
      transition: "all .4s ease",
      cursor: "pointer",
    },
    transition: "all .5s ease",
  },
  header: {
    slideFade: { enter: { duration: 0.3, delay: 0.4 } },
  },
  occupation: {
    slideFade: { enter: { duration: 0.3, delay: 0.6 } },
  },
  social: {
    github: { enter: { duration: 0.4, delay: 0.8 } },
    linkedin: { enter: { duration: 0.4, delay: 1 } },
  },
  showcase: {
    header: { enter: { duration: 0.3, delay: 1.2 } },
    cards: {
      card1: { enter: { duration: 0.4, delay: 1.4 } },
      card2: { enter: { duration: 0.4, delay: 1.6 } },
      card3: { enter: { duration: 0.4, delay: 1.8 } },
    },
  },
  themeToggle: { enter: { duration: 0.4, delay: 2 } },
};
