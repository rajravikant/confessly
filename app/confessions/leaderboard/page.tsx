"use client";
import React from 'react'
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboardUsers } from '@/lib/api';


const ScreenWrapper = dynamic(() => import('../(components)/shared/ScreenWrapper'));
const ToggleButtons = dynamic(() => import('../(components)/leaderboard/ToggleButtons'));
const Toppers = dynamic(() => import('../(components)/leaderboard/Toppers'));
const LeaderBoardTable = dynamic(() => import('../(components)/leaderboard/LeaderBoardTable'));
const CTA = dynamic(() => import('../(components)/shared/CTA'));

const Page = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["leaderboardUsers"],
    queryFn: fetchLeaderboardUsers,
  });

  if (!isLoading && users?.length === 0) {
    return (
      <ScreenWrapper>
        <div className='flex flex-col items-center justify-center h-[81vh] '>
          <h1 className='text-4xl font-semibold text-white'>No Users Found</h1>
          <p className='text-sm mt-2 font-light text-white'>There are currently no users in the leaderboard.</p>
        </div>
      </ScreenWrapper>
      
    );
  }

  return (
    <div className='container mx-auto min-h-screen'>
      <ScreenWrapper>
        <div className="flex w-full items-center justify-center py-5">
          <ToggleButtons/>
        </div>

        <div>
          <Toppers users={users?.slice(0,3) ?? []} />
        </div>

        <div className='flex flex-col items-center justify-center py-5'>
          <h1 className='text-4xl font-semibold text-white'>Leaderboard</h1>
          <p className='text-sm mt-2 font-light text-white'>Top 10 users of the week</p>
          <div className='overflow-x-auto w-full py-10'>
            <LeaderBoardTable error={error} users={users?? []} isLoading={isLoading} />
          </div>
        </div>

        <CTA/>
    </ScreenWrapper>
    </div>
  )
}

export default Page;