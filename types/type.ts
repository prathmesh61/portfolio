import { LucideIcon } from "lucide-react";

export type TService = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export type TNavitem = {
  name: string;
  link: string;
};
export type TSkill = {
  frontend: {
    name: string;
    src: string;
  }[];
  backend: {
    name: string;
    src: string;
  }[];
  testing: {
    name: string;
    src: string;
  }[];
};
export type TProject = {
  name: string;
  image: string;
  description: string;
  links: {
    name: string;
    link: string;
  }[];
  languages: string[];
};
export type TWork = {
  name: string;
  image: string;
  description: string;
  links?: {
    name: string;
    link: string;
  }[];
  languages: string[];
};

export type TSocial = {
  icon: LucideIcon;
  link: string;
}[];
