import React from 'react'
import ecllipse from "@/assets/images/ellipse.png"
import Image from 'next/image'
import quotes from "@/assets/images/quotes.png"

const Testomonial = () => {
  return (
    <div className='relative '>
        <div className='absolute left-0 top-0'>
            <Image src={ecllipse} alt='logo' className='size-96 opacity-30'/>
        </div>
        <div className='bg-white/10 backdrop:blur-2xl rounded-2xl relative p-10 space-y-6'>

        <span className='block'>
            <Image alt='image' src={quotes} className='hue-rotate-180 saturate-150'  />
        </span>
        <p className='text-white text-lg'>Confessly gave me a place to finally express everything I’ve been holding in. It feels so freeing to share without fear of judgment. The community here is surprisingly supportive and kind. It’s like therapy, but anonymous and real. Highly recommend to anyone who just needs to be heard!</p>

        <div className='font-medium text-white'>-Anonomous guy</div>

        </div>
    </div>
  )
}

export default Testomonial