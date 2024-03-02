import React from "react";
import redesignOne from "../../public/asset/redesign-1.png";
import redesignTwo from "../../public/asset/redesign-2.png";
import fullWebsite from "../../public/asset/fullWebsite.png";
import Image from "next/image";
import Link from "next/link";

const Design = () => {
  return (
    <div className="max-w-[1440px] h-full m-auto p-4 flex flex-col justify-center items-center gap-10 mt-60 xl:mt-32">
      <div className="flex flex-col gap-y-2">
        <h3 className="font-extrabold text-center text-5xl">
          UI Design And Redesigns✨
        </h3>
        <p className="font-mono text-lg text-center">
          Click on image & see in <b>figma</b>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center xl:gap-5 gap-10 mt-5">
        <Link
          href={
            "https://www.figma.com/file/vZ6T5A7lkQcw5kOvdIJEys/Twittie?type=design&node-id=2%3A28&mode=design&t=dz8tkANUX5OyFgZV-1"
          }
          target="_blank"
        >
          <Image
            src={fullWebsite}
            alt="fullWebsite"
            className="object-contain object-center rounded-lg overflow-hidden"
            width={600}
            height={100}
          />
        </Link>

        <div className="flex flex-col justify-evenly gap-8">
          <Link
            href={
              "https://www.figma.com/file/8dwrMOSw5UUGH1HI17CzXu/WPbakery-Recreate-HeroSection?type=design&mode=dev&t=fjY0MsThusWcpZ7p-1"
            }
            target="_blank"
          >
            <Image
              src={redesignOne}
              alt="fullWebsite"
              className="object-contain object-center rounded-lg  overflow-hidden"
              width={600}
              height={100}
            />
          </Link>
          <Link
            href={
              "https://www.figma.com/file/Xbfyw7h6JhZTduoJfS6gHy/Non-Profit-Accounting-Software-Zoho?type=design&mode=design&t=fjY0MsThusWcpZ7p-1"
            }
          >
            <Image
              src={redesignTwo}
              alt="fullWebsite"
              className="object-contain object-center rounded-lg  overflow-hidden"
              width={600}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Design;
