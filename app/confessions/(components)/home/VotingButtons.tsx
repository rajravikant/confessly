"use client";

import React from "react";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";
// import {motion} from "motion/react";

interface VotingButtonsProps {
    onUpvote: () => void;
    onDownvote: () => void;
    upvotes: number;
    downvotes: number;
    isUpvoted?: boolean | null; // Optional prop, can be undefined or null
    isDownvoted?: boolean | null; 
}

const VotingButtons: React.FC<VotingButtonsProps> = ({
    onUpvote,
    onDownvote,
    upvotes,
    downvotes,
    isUpvoted,
    isDownvoted, 
}) => {
    
    return (
        <div className="flex items-center gap-2 border border-[#CAECF1]/10 rounded-full py-1 px-2 ">
            <button
                onClick={onUpvote}
                className={"flex items-center justify-center rounded-full shadow-md  hover:scale-110 transition-all duration-200 ease-in-out"}
            >
                <ArrowBigUp className={isUpvoted ? 'text-purple-500' : 'text-gray-200/50'} />
            </button>
            {/* <span className="text-sm block text-gray-300">{upvotes}</span> */}
            <button
               
                onClick={onDownvote}
                className={"flex items-center justify-center rounded-full shadow-md  hover:scale-110 transition-all duration-200 ease-in-out"}   
            >
                <ArrowBigDown className={isDownvoted ? 'text-purple-500' : 'text-gray-200/50'} />
            </button>
            {/* <span className="text-sm block text-gray-300">{downvotes}</span> */}
        </div>
    );
};

export default VotingButtons;