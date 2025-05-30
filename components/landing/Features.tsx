import React from 'react'
import feature1 from "@/assets/images/feature1.png"
import Image from 'next/image'
const Features = () => {
  return (
    <div className="space-y-12 w-full p-16">
            <div className="lg:max-w-2/5 mx-auto space-y-8">
          <h3 className="lg:text-4xl text-3xl text-center text-white lg:max-w-2/3 mx-auto">No sign-ups, no names, no pressure
          </h3>
          <p className="lg:text-lg text-center text-muted-foreground ">your safe zone to spill the tea, vent your feels, or share those late-night thoughts—without anyone knowing it’s you.</p>

            </div>

            <div className="grid lg:grid-cols-3 place-items-center gap-6">
                {features.map(({id,title,image,description})=>{
                    return(
                        <div key={id} className='flex items-center justify-center flex-col '>
                            <Image src={image} alt="image"  className='hue-rotate-90 saturate-150'/>
                            <div className='text-center  max-w-1/2 pt-6 space-y-3'>
                            <h3 className='text-white text-lg'>{title}</h3>
                            <p className='text-muted-foreground text-sm'>{description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>
  )
}

export default Features;




const features = [
    {
        id : 1,
        title : "Post Anonymously",
        description : "Share your confessions, moods, and secrets without revealing your identity",
        image : feature1
    },
    {
        id : 2,
        title : "React and connect",
        description : "React to posts with emojis or supportive vibes without needing to comment",
        image : feature1
    },
    {
        id : 3,
        title : "Daily Highlights",
        description : "Check out the top confessions of the day and get inspired",
        image : feature1
    },
]