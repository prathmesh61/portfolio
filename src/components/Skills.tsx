import React from "react";
import { skillList } from "../../utils";
import Skill from "./common/Skill";

const Skills = () => {
  return (
    <section className="max-w-[1340px] h-full m-auto p-4 flex flex-col justify-center items-center gap-10 mt-60 xl:mt-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-extrabold text-6xl">Skills</h1>
        <p className="font-light text-xl">
          Languages,Technologies and tools that I have learned and applied to my
          projects
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-10">
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="font-bold text-2xl text-center bg-left p-3">
            Front-End
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillList.map((list) => (
              <Skill list={list.frontend} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="font-bold text-2xl text-center bg-left p-3">
            Backend-End
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillList.map((list) => (
              <Skill list={list.backend} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="font-bold text-2xl text-center bg-left p-3">
            Testing
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillList.map((list) => (
              <Skill list={list.testing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;