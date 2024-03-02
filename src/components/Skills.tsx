import React from "react";
import { skillList } from "../../utils";
import Skill from "./common/Skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-[1440px] h-full m-auto p-4 flex flex-col justify-center items-center gap-10 mt-60 xl:mt-32"
    >
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
            {skillList.map((list) =>
              list.frontend.map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="font-bold text-2xl text-center bg-left p-3">
            Back-End
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillList.map((list) =>
              list.backend.map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="font-bold text-2xl text-center bg-left p-3">
            Testing
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillList.map((list) =>
              list.testing.map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
