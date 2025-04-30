"use client";
import { useState } from "react";
import MoodChips from "../shared/Chip";
import VotingButtons from "./VotingButtons";
import ReactionButton from "./ReactionButton";

interface ConfessionCardProps {
    id: string;
    created_at: string;
    user_id: string;
    content: string;
    mood: string;
    upvotes: number;
    downvotes: number;
}



const ConfessionCard = ({content, mood, upvotes, downvotes }: ConfessionCardProps) => {
    const [isUpvoted, setIsUpvoted] = useState<boolean | null >(null);
    const [isDownvoted, setIsDownvoted] = useState<boolean | null >(null);

    const toggleUpVote = () => {
        setIsUpvoted((prev) => !prev);
        setIsDownvoted(false);
    }
    const toggleDownVote = () => {
        setIsDownvoted((prev) => !prev);
        setIsUpvoted(false);
    }

    const handleReaction = () => {
        console.log("Reacted to confession!");
    }

    return (
        <div className="confession-card relative bg-black/15 border border-[#CAECF1]/10 p-4 rounded-xl shadow-md">
            <MoodChips mood={mood} className="" />
            <h3 className="text-sm font-semibold text-white py-5">{content}</h3>
            <div className="flex items-center justify-end gap-2">
                <ReactionButton onReact={handleReaction} />
               <VotingButtons 
                   onUpvote={toggleUpVote} 
                   onDownvote={toggleDownVote} 
                   upvotes={upvotes} 
                   downvotes={downvotes} 
                   isUpvoted={isUpvoted} 
                    isDownvoted={isDownvoted}
               />
            </div>

           
        </div>
    )
}

export default ConfessionCard;