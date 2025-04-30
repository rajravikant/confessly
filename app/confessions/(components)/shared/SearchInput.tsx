"use client";
import React, { useEffect, useState } from "react";
import SelectionWheel from "./SelectionWheel";
import { Mood } from "@/lib/data";
import { cn } from "@/lib/utils";
import MoodChips, { getColor } from "./Chip";
import { motion, AnimatePresence } from "motion/react";
import useDebounce from "@/lib/useDebounce";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string, selectedMood: string) => void;
  moods: Mood[];
  selectedMood?: Mood;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
  moods,
  selectedMood,
}) => {
  const [query, setQuery] = useState("");
  const [sMood, setSelectedMood] = useState(selectedMood || moods[2]);
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 1000);


  useEffect(() => {
    handleSearch();
  }, [debouncedQuery,sMood]);

  const handleSearch = () => {
    if (debouncedQuery && debouncedQuery.length > 0) {
      onSearch(debouncedQuery, sMood.value);
    }
  };

  
  

  const handleMoodChange = (mood: Mood) => {
    setSelectedMood(mood);
    setIsWheelOpen(false);
  };


  

  return (
    <div className="relative border border-gray-600 rounded-full lg:w-1/2 flex items-center pr-1.5">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
        className="absolute lg:-bottom-[3rem] -bottom-[4rem] left-0 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isWheelOpen ? 1 : 0, scale: isWheelOpen ? 1 : 0.8 }}
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
              {moods.filter(mood => mood.value !== sMood.value).map((mood, index) => (
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
    </div>
  );
};

export default SearchInput;
