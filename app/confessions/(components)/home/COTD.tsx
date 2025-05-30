import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";

const ConfessionOfTheDay = () => {
  return (
    <div className=" my-10 ">
      <div className="bg-primary/10 overflow-hidden border border-border rounded-3xl relative flex flex-col items-center justify-center gap-4 p-4 text-center">
      <BorderBeam
             size={200}
             duration={8}
             className="from-transparent via-primary to-transparent"

            
            />
        <h1 className="text-2xl font-bold text-white">Confession of the Day</h1>
        <TextCOTD text=" I took the larger piece of cake when I knew my sister was hungry and there were only two pieces left. Once I watched a movie that was causing me to have lustful thoughts, and did nothing to stop it. I missed Mass last week " />
        <p className="text-sm text-gray-300">- Anonymous</p>
      </div>
    </div>
  );
};

export default ConfessionOfTheDay;

const TextCOTD = ({ text }: { text: string }) => {
  return <p className="text-gray-200">“ {text} ”</p>;
};
