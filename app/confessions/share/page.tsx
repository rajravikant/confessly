import React from "react";
import dynamic from "next/dynamic";
const PostingSection  = dynamic(()=>import( "@/app/confessions/(components)/posting/PostingSection"))

const ScreenWrapper = dynamic(()=> import("@/app/confessions/(components)/shared/ScreenWrapper"))

import { Button } from "@/components/ui/Button";



const Page = () => {
  return (
    <div className="w-full">
      <ScreenWrapper>
        <header>
          <div className="w-full flex justify-between items-end border-b border-white/25 py-2">
            <h2 className="text-white">Share your confession</h2>
            <Button size="sm" variant="secondary">
              Save to draft
            </Button>
          </div>
        </header>
        <PostingSection />
      </ScreenWrapper>
    </div>
  );
};

export default Page;
