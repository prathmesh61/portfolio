import {
  Building,
  Clapperboard,
  FilePlus,
  ShieldEllipsis,
  Linkedin,
  Github,
  GitCommitHorizontal,
  Twitter,
} from "lucide-react";
import { TNavitem, TProject, TService, TSkill, TWork } from "../types/type";

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
      "I  re-designed multiple landing pages and design whole startup landing page",
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

export const projects: TProject[] = [
  {
    name: "Booking website",
    image:
      "https://res.cloudinary.com/dpvjdarqx/image/upload/v1709202942/ew3ad2mflcy6ryddzv7o.png",
    description:
      "Airbnb Next.js 13 Full Stack clone! using the latest technologies,such as Zod for schema validation, React-Hook-Form for form management, and Next.js for server-side rendering, our backend relies on MongoDB, while NextAuth handles authentication.custom hooks enhances code reusability and maintainability, ",
    links: [
      {
        name: "Demo",
        link: "https://fullstack-airbnb-three.vercel.app/",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/fullstack-airbnb",
      },
    ],
    languages: [
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
  {
    name: "Coursify",
    image:
      "https://res.cloudinary.com/dpvjdarqx/image/upload/v1709379357/nanfrfmm37wlnioeerbq.png",
    description:
      "Course Selling Website Like Udemy Full Stack With Payment Gateway,state & user management using redux",
    links: [
      {
        name: "Demo",
        link: "https://coursify-tau.vercel.app/",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/coursify",
      },
    ],
    languages: [
      "Nextjs",
      "TypeScript",
      "mongodb",
      "axios",
      "react-chartjs-2",
      "tailwindcss",
      "razorpay-payment",
      "Redux-toolkit",
      "Playwright-test",
    ],
  },
  {
    name: "Issue Tracker",
    image:
      "https://res.cloudinary.com/dpvjdarqx/image/upload/v1709202940/mlxr9hvbjbviqz1tcj69.png",
    description:
      "advanced issue tracker to streamline bug management effortlessly!",
    links: [
      {
        name: "Demo",
        link: "https://issue-tracker-sand-rho.vercel.app/",
      },
      {
        name: "GitHub",
        link: "https://github.com/prathmesh61/issue-tracker",
      },
    ],
    languages: [
      "nextjs",
      "TypeScript",
      "React-Hook-Form",
      "PostgreSQL",
      "Prisma",
      "Node-cach",
      "tailwindcss",
      "Playwright-test",
      "Zod",
      "react-chartjs-2",
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
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
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
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
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

export const works: TWork[] = [
  {
    name: "Tax Consulant website",
    image:
      "https://res.cloudinary.com/dpvjdarqx/image/upload/v1709202941/oi1yqxpbedlfmt7sqpgd.png",
    description:
      "website frontend build using Next.js and styled using Tailwind CSS & form handle by hooks for sending email we use Email.js service.",

    languages: [
      "nextjs",
      "react",
      "typescript",
      "emailJS",
      "hooks",
      "react-hot-toast",
      "tailwindcss",
    ],
  },
  {
    name: "React Admin Dashboard",
    image:
      "https://res.cloudinary.com/dpvjdarqx/image/upload/v1709202948/gkwvmhcemi3q3man74gd.png",
    description: "Responsive React Admin Panel UI Design",

    languages: [
      "nextjs",
      "react",
      "typescript",
      "emailJS",
      "hooks",
      "react-hot-toast",
      "tailwindcss",
    ],
  },
];

export const social = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/prathmesh-pol/",
  },
  {
    icon: Github,
    link: "https://github.com/prathmesh61",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/PrathmeshPol14",
  },
];
