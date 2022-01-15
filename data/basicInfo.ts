import { BasicInfo } from "../interfaces/basicInfo";

export const basicInfo: BasicInfo = {
  headers: {
    name: "Lauri Pimiä",
    title: "Full Stack software engineer.",
  },
  occupation: {
    work: { emoji: "💼", text: "Application specialist at Oy Samlink Ab" },
    education: {
      emoji: "🎓",
      text: "M.Sc. in Mathematical Information Technology",
    },
    location: { emoji: "🌍", text: "Jyväskylä, Finland" },
  },
  social: {
    github: { name: "Github", link: "https://github.com/naabvb" },
    linkedin: {
      name: "LinkedIn",
      link: "https://linkedin.com/in/lauri-pimi%C3%A4-a4413a154",
    },
  },

  imageName: "lauri.png",
};
