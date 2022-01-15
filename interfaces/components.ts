import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Headers, Occupation, Social, SocialItem } from "./data";
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
