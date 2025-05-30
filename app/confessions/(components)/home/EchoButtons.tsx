"use client";

import React from "react";
import { ArrowBigUp } from "lucide-react";

interface EchoButtonsProps {
    onEcho : () => void;
    echoes : number;
    isEchoed : boolean;
  
}

const EchoButtons: React.FC<EchoButtonsProps> = ({
   echoes,
    isEchoed,
    onEcho,
}) => {
    
    return (
        <div className="border border-[#CAECF1]/10 rounded-full py-1 px-3 ">
            <button
                onClick={onEcho}
                className={"flex items-center justify-center rounded-full shadow-md "}
            >
                <ArrowBigUp className={`hover:scale-110 transition-all duration-200 ease-in-out ${isEchoed ? 'text-purple-500' : 'text-gray-200/50'}`} />
                <span className="text-xs block text-gray-300">{echoes}</span>
            </button> 
        </div>
    );
};

export default EchoButtons;