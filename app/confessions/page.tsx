import dynamic from "next/dynamic";
import React from "react";
const ConfessionOfTheDay = dynamic(() => import("./(components)/home/COTD"));
const ScreenWrapper = dynamic(
  () => import("./(components)/shared/ScreenWrapper")
);
const CTA = dynamic(() => import("./(components)/shared/CTA"));
const ConfessContainer = dynamic(
  () => import("./(components)/home/ConfessContainer")
);

const Page = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <ScreenWrapper>
        <ConfessionOfTheDay />
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
          <h1 className="text-2xl font-bold text-white">Confessions</h1>
          <p className="text-gray-300">
            Share your confessions anonymously and connect with others.
          </p>
        </div>
        <ConfessContainer />
        <CTA />
      </ScreenWrapper>
    </div>
  );
};

export default Page;
