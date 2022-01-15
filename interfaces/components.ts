import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Headers, Occupation, Social, SocialItem } from "./basicInfo";
import { Modal, Project, RepositoryLink } from "./projects";
import { ChakraTransition } from "./transitions";

export interface HeadersPayload {
  headers: Headers;
}

export interface HeaderImagePayload {
  image: string;
}

export interface OccupationPayload {
  occupation: Occupation;
}

export interface SocialPayload {
  social: Social;
}

export interface SocialButtonPayload {
  transition: ChakraTransition;
  icon: ReactJSXElement;
  socialItem: SocialItem;
}

export interface CardPayload {
  project: Project;
}

export interface Disclousure {
  isOpen: boolean;
  onClose: () => void;
}

export interface ReadMoreModalPayload {
  modal: Modal;
  disclosure: Disclousure;
}

export interface RepositoryLinkPayload extends RepositoryLink {}
