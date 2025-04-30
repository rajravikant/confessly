"use client";
import React, { useState } from "react";
import { Mood, moods } from "@/lib/data";
import { cn } from "@/lib/utils";
import MoodChips from "./Chip";
import { AnimatePresence, motion } from "motion/react";
import { FaPlus } from "react-icons/fa6";

interface SelectionWheelProps {
  onSelectMood: (mood: string) => void;
}

const SelectionWheel = ({ onSelectMood }: SelectionWheelProps) => {
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [sMood, setSelectedMood] = useState<Mood | null>(null);

  const handleMoodChange = (mood: Mood) => {
    setSelectedMood(mood);
    onSelectMood(mood.border);
    setIsWheelOpen(false);
  };

  return (
    <div className="relative transition w-full flex items-center flex-col lg:flex-row ">
      <div>
        {!sMood ? (
          <button
            onClick={() => {
              setIsWheelOpen(!isWheelOpen);
              setSelectedMood(moods[0]);
            }}
          >
            <div
              className={cn(
                "rounded-full inline-flex items-center cursor-pointer px-4 py-1.5 text-xs border text-center ",
                "border-white/25 bg-white/5 text-white/60"
              )}
            >
              <span className="block mr-2">
                <FaPlus className="text-white/60" size={12} />
              </span>
              Select Mood
            </div>
          </button>
        ) : (
          <div
            onClick={() => setIsWheelOpen(!isWheelOpen)}
            className={cn(
              "rounded-full cursor-pointer px-4 py-1.5 text-xs font-semibold border text-center "
            )}
            style={{
              borderColor: sMood?.darkColor,
              backgroundColor: sMood?.darkColor,
              color: sMood?.color,
            }}
          >
            {sMood?.value}
          </div>
        )}
      </div>

      {sMood && (
        <motion.div
          className="w-full flex items-center justify-between lg:ms-6 mt-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isWheelOpen ? 1 : 0,
            scale: isWheelOpen ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isWheelOpen && (
              <motion.div
                className="mood-selection flex flex-wrap gap-2 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {moods
                  .filter((mood) => mood.value !== sMood.value)
                  .map((mood, index) => (
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default SelectionWheel;
