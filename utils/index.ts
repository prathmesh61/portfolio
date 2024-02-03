import { Building, Clapperboard, FilePlus, ShieldEllipsis } from "lucide-react";
import { TNavitem, TService, TSkill } from "../types/type";

export const services: TService[] = [
  {
    name: "Full Stack Developer",
    description:
      "I have experience developing fast and optimised back-end in node.js and APIs along with frontend",
    Icon: Clapperboard,
  },
  {
    name: "Frontend Development",
    description:
      "I’m a front-end developer with experience in building responsive and optimized sites",
    Icon: Building,
  },
  {
    name: "Web UI/UX Design",
    description:
      "I have re-designed multiple landing pages and design whole startup landing page",
    Icon: FilePlus,
  },
  {
    name: " Testing",
    description: "I have experience in End To End testing websites",
    Icon: ShieldEllipsis,
  },
];

export const navLink: TNavitem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "#service",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const projects = [
  {
    name: "Coursify",
    image: "https://via.placeholder.com/640x360",
    description:
      "Course Selling Website Like Udemy Full Stack With Payment Gateway,state & user management using redux",
    links: [
      {
        name: "Demo",
        link: "https://github.com/prathmesh61/coursify",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/coursify",
      },
    ],
    stack: [
      "Nextjs",
      "TypeScript",
      "mongodb",
      "axios",
      "react-chartjs-2",
      "tailwindcss",
      "razorpay-payment",
      "Redux-toolkit",
    ],
  },
  {
    name: "Issue Tracker",
    image: "https://via.placeholder.com/640x360",
    description:
      "advanced issue tracker to streamline bug management effortlessly!",
    links: [
      {
        name: "Demo",
        link: "https://github.com/prathmesh61/issue-tracker",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/issue-tracker",
      },
    ],
    stack: [
      "nextjs",
      "TypeScript",
      "React-Hook-Form",
      "PostgreSQL",
      "Prisma",
      "Node-cach",
      "tailwindcss",
      "Playwright",
      "Zod",
      "react-chartjs-2",
    ],
  },
  {
    name: "Booking website",
    image: "https://via.placeholder.com/640x360",
    description:
      "Welcome to Next.js 13 Full Stack clone! We've crafted this platform using the latest technologies,such as Zod for schema validation, React Hook Form for streamlined form management, and Next.js for efficient server-side rendering,  our backend relies on MongoDB for secure and scalable data storage, while NextAuth handles authentication with ease. The integration of custom hooks enhances code reusability and maintainability, ",
    links: [
      {
        name: "Demo",
        link: "https://github.com/prathmesh61/fullstack-airbnb",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/fullstack-airbnb",
      },
    ],
    stack: [
      "nextjs",
      "typescript",
      "mongodb",
      "mongoose",
      "axios",
      "next-auth",
      "tailwindcss",
      "shadcn-ui",
    ],
  },
];

export const skillList: TSkill[] = [
  {
    frontend: [
      {
        name: "React Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        name: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "Javascript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Redux",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Figma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Tailwind Css",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
    backend: [
      {
        name: "Node Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
      },
      {
        name: "Express JS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },

      {
        name: "Nest Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      },
      {
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Mongo DB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "GraphQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
    testing: [
      {
        name: "PlayWright",
        src: "https://miro.medium.com/v2/resize:fit:646/1*gMiUPuRGC36nxZHe2zthOg.png",
      },
    ],
  },
];
