import React from "react";

const HeroLayer = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 h-screen w-full bg-red-300 ">
      <div className="flex items-start flex-col gap-10 mt-36 p-4">
        <h1 className="text-7xl font-bold font-mono">Full Stack Developer</h1>
        <h1 className="text-7xl font-bold font-mono">Frontend Developer</h1>
        <h1 className="text-7xl font-bold font-mono">Backend Developer</h1>
      </div>
    </div>
  );
};

export default HeroLayer;
