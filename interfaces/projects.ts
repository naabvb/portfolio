import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface RepositoryLink {
  header: string;
  body: string;
  link: string;
}

export interface ExternalLink {
  text: string;
  link: string;
}

export interface ProjectItem {
  header: string;
  image: string;
}

export interface Card extends ProjectItem {
  badges: string[];
  body: string;
}

export interface Modal extends ProjectItem {
  body: ReactJSXElement;
  externalLink: ExternalLink;
}

export interface Project {
  card: Card;
  modal: Modal;
}
