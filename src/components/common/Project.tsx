import React from "react";
import { TProject, TWork } from "../../../types/type";
import Link from "next/link";

type Props = {
  project: TProject | TWork;
};

const Project = ({ project }: Props) => {
  return (
    <article className="flex justify-between items-start flex-wrap gap-4">
      <div className="flex flex-col gap-2 ">
        <h2 className="font-extrabold text-xl">{project.name}</h2>
        <div className="flex gap-2">
          {project.links &&
            project.links.map((link) => (
              <Link
                href={link.link}
                className="bg-[#740FF5] px-1"
                key={link.name}
                target="_blank"
              >
                {link.name}
              </Link>
            ))}
        </div>
        <p className="text-sm font-light max-w-[400px]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 max-w-[400px]">
          {project.languages.map((lang) => (
            <span className="bg-[#740FF5] px-1 text-sm" key={lang}>
              {lang}
            </span>
          ))}
        </div>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-[640px] h-[290px] object-cover"
      />
    </article>
  );
};

export default Project;
