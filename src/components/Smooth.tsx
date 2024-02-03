"use client";
import React from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
};

const Smooth = ({ children }: Props) => {
  gsap.registerPlugin(ScrollSmoother);
  ScrollSmoother.create({
    content: ".scroll-smooth",
    smooth: 1,
  });
  return <div className="scroll-smooth">{children}</div>;
};

export default Smooth;
