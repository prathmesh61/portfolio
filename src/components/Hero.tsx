import React from "react";
import Image from "next/image";
import heroImg from "@/../public/asset/Coding-bro.png";
const Hero = () => {
  return (
    <div className="relative lg:h-screen h-full max-w-[1340px] m-auto flex flex-wrap justify-between items-center gap-10">
      <div className="flex items-start flex-col gap-y-2 max-w-[600px]">
        <h1 className=" lg:text-5xl text-4xl  tracking-wider">
          Hello,
          <br /> <b>my name's Prathmesh.</b>
        </h1>
        <p className="lg:text-xl text-base">
          Experienced in building{" "}
          <b className="border-b-2 border-purple-400">full stack</b> web
          applications,Website UI's and Web Designes
        </p>
      </div>
      <Image alt="heroImg" src={heroImg} width={500} height={300} />
    </div>
  );
};

export default Hero;
