import React from "react";
import serviceImg from "@/../public/asset/codeBoy.png";
import Image from "next/image";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="h-screen w-full  flex flex-wrap justify-between items-center py-2 px-8">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-6xl bg-[#D7B7FD] p-2 text-center">
          <b>Services </b>I Offer
        </h2>
        <Image alt="serviceImg" src={serviceImg} width={600} height={200} />
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Service;
