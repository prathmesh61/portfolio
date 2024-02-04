import React from "react";
import { projects } from "../../utils";
import Project from "./common/Project";

const Projects = () => {
  return (
    <section className="max-w-[1340px] h-full m-auto p-4 flex flex-col justify-center items-center gap-10 mt-60 xl:mt-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-extrabold text-6xl">Projects</h1>
        <p className="font-light text-xl">
          I will let the work I've done speak for me - "Corrine Brown"
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
