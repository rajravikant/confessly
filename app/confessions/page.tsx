import React, { Suspense } from "react";
import ConfessionOfTheDay from "./(components)/home/COTD";
import ScreenWrapper from "./(components)/shared/ScreenWrapper";
import SearchBar from "./(components)/shared/SearchBar";
import { Confessions } from "./(components)/home/Confessions";
import ConfessionSkeleton from "./(components)/home/ConfessionSkeleton";
import CTA from "./(components)/shared/CTA";
import Footer from "@/components/landing/Footer";

const Page = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <ScreenWrapper>
        <ConfessionOfTheDay/>
        <div className='flex flex-col items-center justify-center gap-4 p-4 text-center'>
        <h1 className='text-2xl font-bold text-white'>Confessions</h1>
        <p className='text-gray-300'>Share your confessions anonymously and connect with others.</p>
      </div>
        <SearchBar />

        <div className="confessions-container py-16">
          <Suspense fallback={<ConfessionSkeleton />}>
            <Confessions />
          </Suspense>
        </div>

        <CTA />
      </ScreenWrapper>
    </div>
  );
};

export default Page;
