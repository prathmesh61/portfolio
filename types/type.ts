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
