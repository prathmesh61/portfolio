"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "@/../public/asset/Coding-bro.png";

const Hero = () => {
  return (
    <div className="relative h-full max-w-[1440px] m-auto flex flex-wrap justify-between items-center gap-10 mt-10 lg:mt-0">
      <div className="flex items-start flex-col gap-y-4 max-w-[600px]">
        <h1 className=" lg:text-5xl text-4xl text-white">
          Hello,
          <br /> <b>my name's Prathmesh.</b>
        </h1>
        <p className="lg:text-xl text-base text-white">
          Experienced in building
          <b className="border-b-2 border-purple-400"> full stack</b> web
          applications,Website UI's and Web Designes
        </p>
      </div>
      <Image
        alt="heroImg"
        src={heroImg}
        width={700}
        height={300}
        blurDataURL="Hero Image"
      />

      <div className="react absolute xl:block top-[40%]  xl:top-[20%] w-[60px] h-[30px]  xl:w-[80px] xl:h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      </div>
      <div className="redux absolute xl:block top-[40%] left-[65%] xl:top-[30%] xl:left-[36%] w-[60px] h-[30px]  xl:w-[80px] xl:h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
      </div>
      <div className="nodejs absolute xl:block top-[95%] right-[10%] xl:top-[20%] xl:right-[10%] w-[60px] h-[30px]  xl:w-[80px] xl:h-[40px]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png" />
      </div>

      <div className="typescript absolute 2xl:block  bottom-[0%] left-[5%] 2xl:bottom-[25%] 2xl:left-[20%] w-[60px] h-[30px]  xl:w-[80px] xl:h-[40px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </div>
    </div>
  );
};

export default Hero;
