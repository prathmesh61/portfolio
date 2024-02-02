import React from "react";
import { navLink } from "../../utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-[#04152d93] backdrop-blur-md h-[50px] px-4 py-2 z-10 ">
      <div className="flex justify-around items-center">
        <div className="hidden lg:flex items-center gap-16">
          {navLink.map((link) => (
            <Link
              href={link.link}
              className="font-light text-md text-white hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
