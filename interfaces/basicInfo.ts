export interface Headers {
  name: string;
  title: string;
}

export interface OccupationItem {
  emoji: string;
  text: string;
}

export interface Occupation {
  work: OccupationItem;
  education: OccupationItem;
  location: OccupationItem;
}

export interface SocialItem {
  name: string;
  link: string;
}

export interface Social {
  github: SocialItem;
  linkedin: SocialItem;
}

export interface BasicInfo {
  headers: Headers;
  occupation: Occupation;
  social: Social;
  imageName: string;
}
