import React from "react";
import serviceImg from "@/../public/asset/codeBoy.png";
import Image from "next/image";
import {
  Clapperboard,
  Building,
  FilePlus,
  LucideIcon,
  ShieldEllipsis,
} from "lucide-react";

type Service = {
  name: string;
  description: string;
  Icon: LucideIcon;
};
const services: Service[] = [
  {
    name: "Full Stack Developer",
    description:
      "I have experience developing fast and optimised back-end in node.js and APIs along with frontend",
    Icon: Clapperboard,
  },
  {
    name: "Frontend Development",
    description:
      "I’m a front-end developer with experience in building responsive and optimized sites",
    Icon: Building,
  },
  {
    name: "Web UI/UX Design",
    description:
      "I have re-designed multiple landing pages and design whole startup landing page",
    Icon: FilePlus,
  },
  {
    name: " Testing",
    description: "I have experience in End To End testing websites",
    Icon: ShieldEllipsis,
  },
];

const Service = () => {
  return (
    <div className="h-screen w-full  flex flex-wrap justify-around items-center py-2 px-8 ">
      <div className="flex flex-col gap-y-4">
        <h2 className="lg:text-4xl text-2xl bg-[#740FF5] p-2 text-center text-white">
          <b>Services </b>I Offer
        </h2>
        <Image alt="serviceImg" src={serviceImg} width={600} height={200} />
      </div>
      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <div
            className="p-4 flex justify-start items-start gap-4 bg-left rounded-lg"
            key={service.name}
          >
            <service.Icon width={40} height={40} color="white" />
            <div className="flex flex-col items-start gap-y-1 ">
              <h2 className="font-bold text-white text-xl lg:text-2xl">
                {service.name}
              </h2>
              <h2 className="font-medium text-white text-sm lg:text-md max-w-[400px]">
                {service.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
