import React from "react";

const ConfessionSkeleton: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 py-16">
      {Array.from({ length: 6 }).map((_, index) => (
        <ConfessionCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ConfessionSkeleton;

const ConfessionCardSkeleton: React.FC = () => {
  return (
    <div className="relative animate-pulse bg-black/15 border border-[#CAECF1]/10 p-4 rounded-xl shadow-md">
      <span
        className={
          "rounded-full cursor-pointer px-10 py-1 text-xs font-semibold bg-gray-200/20 "
        }
      />
      <div className="text-sm font-semibold py-5" />
      <div className="flex items-center justify-end gap-2">
        <span className="h-6 px-10 bg-gray-200/20 animate-pulse rounded-full" />
      </div>
    </div>
  );
};
