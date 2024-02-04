import React from "react";

type Props = {
  skill: {
    name: string;
    src: string;
  };
};

const Skill = ({ skill }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src={skill.src}
          alt={skill.name}
          className="w-[110px] h-[80px] object-contain"
          style={{
            background:
              skill.name === "Next Js" || skill.name === "Express JS"
                ? "#fff"
                : "",
          }}
        />
        <h4 className="font-medium text-base">{skill.name}</h4>
      </div>
    </>
  );
};

export default Skill;
