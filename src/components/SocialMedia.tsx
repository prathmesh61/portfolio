import React from "react";
import { social } from "../../utils";
import Link from "next/link";

type Props = {};

const SocialMedia = (props: Props) => {
  return (
    <section className="xl:fixed static top-[50%] left-0">
      <div className="flex xl:flex-col items-center justify-center bg-[#740FF5] p-4 xl:h-fit xl:w-fit gap-4 w-full h-full ">
        {social.map((item) => (
          <Link href={item.link} target="_blank">
            <item.icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
