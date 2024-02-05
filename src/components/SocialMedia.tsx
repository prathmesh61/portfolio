import React from "react";
import { social } from "../../utils";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <section className="2xl:fixed static top-[50%] left-0">
      <div className="flex 2xl:flex-col items-center justify-center bg-[#740FF5] p-4 2xl:h-fit 2xl:w-fit gap-4 w-full h-full ">
        {social.map((item) => (
          <Link href={item.link} target="_blank" key={item.link}>
            <item.icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
