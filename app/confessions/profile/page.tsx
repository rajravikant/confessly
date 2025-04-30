import React from 'react'
import ScreenWrapper from '../(components)/shared/ScreenWrapper';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { confessionData } from '@/lib/data';
import ConfessionCard from '../(components)/home/ConfessionCard';

const Profile = () => {
  return (
    <div className="w-full">
    <ScreenWrapper>
      <header>
        <div className="w-full flex justify-between items-end border-b border-white/25 py-2">
          <h2 className="text-white">Your annonomous profile</h2>
          <Button size="small" variant="secondary">
            Remove account
          </Button>
        </div>
      </header>

      <div className='flex flex-wrap justify-center lg:gap-20 items-center w-full py-5'>
        <div className='size-56 rounded-full border border-white/25 overflow-hidden p-2'>
       <img src="https://api.dicebear.com/9.x/identicon/svg?seed=" alt='profile-avatar' className='
       size-1/2 object-cover mx-auto translate-y-1/2'></img>
        </div>

        <form className='flex flex-col gap-4 w-full lg:w-auto '>
          <div className='flex flex-col gap-2'>
            <label htmlFor="username" className='text-white/50'>Name</label>
            <input type="text" id='username' placeholder='username' className='text-white text-sm bg-white/5 border border-white/25 focus:outline-none focus:border-white/50 py-1.5 px-3 rounded-md '/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-white/50'>Password</label>
            <input type="password" id='password' placeholder='*******' className='text-white  bg-white/5 border border-white/25 focus:outline-none focus:border-white/50 py-1.5 px-3 rounded-md '/>
          </div>

          <Button size="small" variant="primary" className='self-start'>Save changes</Button>
        </form>

      </div>


      <div className='grid lg:grid-cols-3 gap-3 my-5'>
        {stats.map((stat) => (
          <div key={stat.name} className='flex flex-col gap-2 bg-white/5 p-4 rounded-md'>
            <h3 className='text-white/50 text-sm'>{stat.name}</h3>
            <p className='text-white text-lg font-semibold'>{stat.value}</p>
          </div>
        ))}
      </div>


      <div className='my-10'>
        <h3 className='text-white text-xl'>Your recent confessions</h3>
          
          <div className="grid lg:grid-cols-3 gap-5 py-3">
          {confessionData.slice(0, 3).map((confession) => (
            <ConfessionCard key={confession.id} {...confession} />
          ))}
          </div>

          <div className='flex w-full justify-end'>
            <Button size="small" variant="text">View all confessions</Button>
          </div>
    
            
      </div>
    </ScreenWrapper>
  </div>
  )
}

export default Profile;



const stats = [
  { name: 'total confessions', value: '24' },
  { name: 'highest streak', value: '7' },
  { name: 'top mood', value: 'happy' },
]


