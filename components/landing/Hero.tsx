import React from "react";
import { Marquee3D } from "@/components/landing/HeroArt";
import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const Hero = () => {
  return (
    <div className="h-full w-full relative">
     
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-80%  z-0 pointer-events-none" />
      <div className="h-full relative z-10 w-full p-12 flex items-center justify-between">
        <div className="space-y-6 lg:max-w-2/5">
          <h1 className="text-white font-bold lg:text-7xl text-4xl ">Confess,Connect</h1>
          <h1 className="font-bold lg:text-7xl text-4xl bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Heal
          </h1>
          <p className="text-white font-light text-lg ">
            Transform your inner thoughts into shared experiences, find peace
            through anonymous expression.
          </p>

          <Link href={"/confessions"}>
          {/* <Button variant="primary">Start Confession</Button> */}
          <InteractiveHoverButton className=" text-white  to-accent  border-0 font-bold text-lg ">
            Start Confession
          </InteractiveHoverButton>
          </Link>
        </div>

        <div className="h-full lg:w-1/2 absolute top-0 right-0 lg:flex hidden items-center justify-center">
          <Marquee3D />
        </div>
      </div>
    </div>
  );
};

export default Hero;
