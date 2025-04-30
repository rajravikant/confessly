import Button from "@/components/ui/Button";
import React from "react";
import ScreenWrapper from "../(components)/shared/ScreenWrapper";
import PostingSection from "../(components)/posting/PostingSection";

const Page = () => {
  return (
    <div className="w-full">
      <ScreenWrapper>
        <header>
          <div className="w-full flex justify-between items-end border-b border-white/25 py-2">
            <h2 className="text-white">Share your confession</h2>
            <Button size="small" variant="secondary">
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
