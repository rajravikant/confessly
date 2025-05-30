import Image from 'next/image'
import React from 'react'
import podiumFirst from "@/assets/images/podium-first.png"
import podiumSecond from "@/assets/images/podium-second.png"
import podiumThird from "@/assets/images/podium-third.png"
import placeholder from "@/assets/images/user.png"

interface ToppersProps {
    users: Array<{
        avatar_url: string | null;
        confession_count: number | null;
        id: string;
        username: string | null;
    }>;
}

const Toppers: React.FC<ToppersProps> = ({ users }) => {
  return (
    <div className='flex flex-wrap w-full justify-center'>
        <div className='flex flex-col items-center translate-y-[10%]'>
            <div className='py-8 relative flex items-center justify-center'>
                <Image src={placeholder} alt="User Placeholder" className='object-cover relative size-28' />
                <h3 className='absolute -bottom-2 text-primary-foreground text-center'>{users[2]?.username ?? 'User 3'}</h3>
            </div>
            <div className='relative h-[526px] w-[388px] lg:scale-90 scale-80'>
                <Image src={podiumSecond} alt="First Place" className='object-contain h-full' />
                <div className='absolute top-0 left-0 h-full w-full flex items-start justify-center'>
                    <div className="flex flex-col gap-6 mt-[35%]">
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>200k +</h1>
                    <p className='text-lg font-light text-white'>upvotes</p>
                    </div>
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>60</h1>
                    <p className='text-lg font-light text-white'>days streak</p>
                    </div>
                    </div>
                    

                    <div>

                    </div>
                </div>
                    
            </div>
        </div>

        <div className='flex flex-col items-center '>
            <div className='py-8 relative flex items-center justify-center '>
                <Image src={placeholder} alt="User Placeholder" className='object-cover relative size-28' />
                <h3 className='absolute -bottom-2 text-primary-foreground text-center'>{users[0]?.username ?? 'User 1'}</h3>
            </div>
            <div className='relative h-[526px] w-[388px] lg:scale-90 scale-80 '>
                <Image src={podiumFirst} alt="First Place" className='object-contain h-full' />
           

                
                <div className='absolute top-0 left-0 h-full w-full flex items-start justify-center'>
                    <div className="flex flex-col gap-6 mt-[35%]">
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>200k +</h1>
                    <p className='text-lg font-light text-white'>upvotes</p>
                    </div>
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>60</h1>
                    <p className='text-lg font-light text-white'>days streak</p>
                    </div>
                    </div>
                    

                    <div>

                    </div>
                </div>
                    
            </div>
        </div>
        <div className='flex flex-col items-center translate-y-[10%] '>
            <div className='py-8 relative flex items-center justify-center '>
                <Image src={placeholder} alt="User Placeholder" className='object-cover relative size-28' />
                <h3 className='absolute -bottom-2 text-primary-foreground text-center'>{users[1]?.username ?? 'User 2'}</h3>
            </div>
            <div className='relative h-[526px] w-[388px] lg:scale-90 scale-80'>
                <Image src={podiumThird} alt="First Place" className='object-contain h-full' />
                <div className='absolute top-0 left-0 h-full w-full flex items-start justify-center'>
                    <div className="flex flex-col gap-6 mt-[35%]">
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>200k +</h1>
                    <p className='text-lg font-light text-white'>upvotes</p>
                    </div>
                    <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white'>60</h1>
                    <p className='text-lg font-light text-white'>days streak</p>
                    </div>
                    </div>
                    

                    <div>

                    </div>
                </div>
                    
            </div>
        </div>
            
    </div>
  )
}

export default Toppers