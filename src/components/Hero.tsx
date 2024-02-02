"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "@/../public/asset/Coding-bro.png";

const Hero = () => {
  return (
    <div className="relative lg:h-screen h-full max-w-[1340px] m-auto flex flex-wrap justify-between items-center gap-10">
      <div className="flex items-start flex-col gap-y-4 max-w-[600px]">
        <h1 className=" lg:text-5xl text-4xl text-white">
          Hello,
          <br /> <b>my name's Prathmesh.</b>
        </h1>
        <p className="lg:text-xl text-base text-white">
          Experienced in building{" "}
          <b className="border-b-2 border-purple-400">full stack</b> web
          applications,Website UI's and Web Designes
        </p>
      </div>
      <Image alt="heroImg" src={heroImg} width={700} height={300} />

      <div className="react absolute lg:flex items-center top-[20%] hidden w-[80px] h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      </div>
      <div className="nodejs absolute top-[20%] right-[10%] w-[80px] h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </div>

      <div className="typescript nodejs absolute bottom-[25%] left-[20%] w-[80px] h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </div>
    </div>
  );
};

export default Hero;
