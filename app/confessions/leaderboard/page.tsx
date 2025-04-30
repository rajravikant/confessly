import React from 'react'
import ScreenWrapper from '../(components)/shared/ScreenWrapper';
import ToggleButtons from '../(components)/leaderboard/ToggleButtons';
import Toppers from '../(components)/leaderboard/Toppers';
import LeaderBoardTable from '../(components)/leaderboard/LeaderBoardTable';
import CTA from '../(components)/shared/CTA';
import Footer from '@/components/landing/Footer';

const Page = () => {
  return (
    <div className='container mx-auto min-h-screen'>
      <ScreenWrapper>
        <div className="flex w-full items-center justify-center py-5">
          <ToggleButtons/>
        </div>

        <div>
          <Toppers/>
        </div>

        <div className='flex flex-col items-center justify-center py-5'>
          <h1 className='text-4xl font-semibold text-white'>Leaderboard</h1>
          <p className='text-sm mt-2 font-light text-white'>Top 10 users of the week</p>
          <div className='overflow-x-auto w-full py-10'>
            <LeaderBoardTable/>
          </div>
        </div>

        <CTA/>
    </ScreenWrapper>
    </div>
  )
}

export default Page;