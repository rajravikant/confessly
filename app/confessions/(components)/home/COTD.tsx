import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import React from "react";

const ConfessionOfTheDay = () => {
  return (
    <NeonGradientCard className="items-center justify-center text-center my-6">
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
            <h1 className="text-2xl font-bold text-white">Confession of the Day</h1>
            <TextCOTD text=" I took the larger piece of cake when I knew my sister was hungry and there were only two pieces left. Once I watched a movie that was causing me to have lustful thoughts, and did nothing to stop it. I missed Mass last week " />
            <p className="text-sm text-gray-300">- Anonymous</p>
        </div>
    </NeonGradientCard>
  );
};

export default ConfessionOfTheDay;

const TextCOTD = ({ text }: { text: string }) => {
  return <p className="text-gray-200">“ {text} ”</p>;
};
