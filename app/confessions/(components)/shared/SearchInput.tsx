"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import MoodChips from "./Chip";
import { motion, AnimatePresence } from "motion/react";
import { CircleX } from "lucide-react";
import { Mood } from "@/types";
import { moods } from "@/lib/data";

interface SearchInputProps {
  onMoodChange: (mood?: string) => void;
  onChange: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onMoodChange,
  onChange,

}) => {
  const [sMood, setSelectedMood] = useState<Mood | null>(moods[0]);
  const [isWheelOpen, setIsWheelOpen] = useState(false);


  const handleMoodChange = (mood: Mood) => {
    setSelectedMood(mood);
    setIsWheelOpen(false);
    onMoodChange(mood.value === "all" ? undefined : mood.value);
  };


  

  return (
    <div className="relative border border-border  rounded-full lg:w-1/2 flex items-center pr-1.5">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value.trim())}
        className="w-full bg-transparent text-white text-sm placeholder-gray-300 px-8 py-2.5 focus:outline-none border-none "
      />

      <div className="relative">
        <div
          onClick={() => setIsWheelOpen(!isWheelOpen)}
          className={cn(
            "rounded-full cursor-pointer px-4 py-1.5 text-xs font-semibold border text-center "
          )}
          style={{
            borderColor: sMood?.border,
            backgroundColor: sMood?.darkColor,
            color: sMood?.color,
          }}
        >
          {sMood?.value}
        </div>

        
      </div>

      <motion.div
        className="absolute lg:bottom-0 lg:top-20 top-12 left-0 w-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isWheelOpen ? 1 : 0, scale: isWheelOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {isWheelOpen && (
            <motion.div
              className="mood-selection flex flex-wrap gap-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {moods.filter(mood => mood.value !== sMood?.value).map((mood, index) => (
                <motion.div
                  key={mood.value}
                  onClick={() => handleMoodChange(mood)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <MoodChips mood={mood.value} />
                </motion.div>
              ))}
              <div onClick={()=> setIsWheelOpen(false)} >
              <span className="hover:text-accent block"><CircleX /></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
     
    </div>
  );
};

export default SearchInput;
