import React from "react";
import ConfessionCard from "./ConfessionCard";
import { Confession } from "@/types";

interface ConfessionProps {
  confessions: Confession[];
}

export function Confessions({ confessions }: ConfessionProps) {
  return (
    <div className="py-16">
        <div className="confession-wrapper-container grid lg:grid-cols-3 gap-5">
          {confessions.map((confession) => (
            <ConfessionCard key={confession.id} {...confession} />
          ))}
        </div>
       
      </div>
  );
}
