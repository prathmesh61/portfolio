import React from "react";
import { works } from "../../utils";
import Project from "./common/Project";

type Props = {};

const Work = (props: Props) => {
  return (
    <section
      id="work"
      className="max-w-[1440px] h-full m-auto p-4 flex flex-col justify-center items-center gap-10 mt-60 xl:mt-20"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-extrabold text-6xl">Work</h1>
        <p className="font-light text-xl">
          Experienced in building landing pages, UI components, and APIs.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {works.map((work) => (
          <Project project={work} key={work.name} />
        ))}
      </div>
    </section>
  );
};

export default Work;
