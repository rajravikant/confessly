"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Confessions } from "./Confessions";
import { getConfessions } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "@/lib/useDebounce";
import {Button} from "@/components/ui/Button";
const Spinner = dynamic(() => import("../shared/Spinner"))
const SearchInput =  dynamic(() => import("../shared/SearchInput"))
const ConfessionSkeleton = dynamic(()=> import("./ConfessionSkeleton"))

const ConfessContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mood, setMood] = useState<string | null>(null);
  const debouncedQuery = useDebounce(searchTerm, 1000);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["confessions", debouncedQuery, mood],
    queryFn: ({pageParam}) => getConfessions(debouncedQuery, mood, pageParam), 
    initialPageParam: 1,
    getNextPageParam : (lastPage) => lastPage.nextCursor
    
  });

  const confessions = data?.pages.flatMap((page) => page.confessions);

  

  const handleMoodChange = (mood: string | undefined) => {
    setMood(mood || null);
  };

  return (
    <div>
      <div className="lg:pt-20 pt-10 w-full">
        {/* <SearchBar onSearch={handleSearch} /> */}
        <SearchInput
          onChange={(val) => setSearchTerm(val)}
          onMoodChange={handleMoodChange}
        />
      </div>
      <div className="confessions-container lg:py-10 py-16 min-h-[50vh]">
        {isLoading && <ConfessionSkeleton />}
        {isError && (
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
            <h1 className="text-2xl font-bold text-red-500">Error</h1>
            <p className="text-gray-300">{error.message}</p>
          </div>
        )}
        {!isLoading && !isError && confessions && confessions.length > 0 && (
          <Confessions confessions={confessions} />
        )}
        {!isLoading && !isError && confessions && confessions.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
            <h1 className="text-2xl font-bold text-white">
              No Confessions Found
            </h1>
            <p className="text-gray-300">
              Share your confessions anonymously and connect with others.
            </p>
          </div>
        )}

        <div className="flex justify-center my-4">
          {hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-4 py-2"
            >
              {isFetchingNextPage ? (<span className="flex items-center gap-2">
               <Spinner/>Loading...
               
              </span>) : `Load More Confessions (${data?.pages.length})`}
            </Button>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default ConfessContainer;


