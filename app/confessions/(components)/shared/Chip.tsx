import { cn } from '@/lib/utils';
import React from 'react';
import { moods } from '@/lib/data';


interface ChipProps {
    mood: string;
    className?: string;
}


export const getColor = (mood: string) => {
    const foundMood = moods.find((m) => m.value === mood);
    return foundMood ? { backgroundColor: foundMood.darkColor, borderColor: foundMood.border, color: foundMood.color } : { backgroundColor: 'rgba(63, 63, 63, 0.71)', borderColor: '#9CA3AF' , color: '#9CA3AF'};
};

const MoodChips: React.FC<ChipProps> = ({ mood, className }) => {
    
    const chipColor = getColor(mood);

    return (
       <span className={cn("rounded-full cursor-pointer px-4 py-1.5 text-xs font-semibold border", className)} style={chipColor} >
            {mood}
        </span>
    );
};

export default MoodChips;