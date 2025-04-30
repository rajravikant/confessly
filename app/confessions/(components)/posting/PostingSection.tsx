"use client"
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import Button from '@/components/ui/Button';
import SelectionWheel from '../shared/SelectionWheel';

const PostingSection = () => {
  const [borderColor,setBorderColor] = useState("rgba(255, 255, 255,0.25)")
  return (
    <div className='py-5 w-full'>
      <div className='w-full relative'>
        <textarea
        className={cn("relative border-2  bg-transparent text-white/80 placeholder:text-white/50 rounded-lg p-4 w-full h-56", "focus:outline-none ")}
        style={{
          borderColor: borderColor,
        }}
        placeholder='Write your confession here...' />
        <div className='absolute bottom-4 right-2'>
          <Button size='medium' style={{
            backgroundColor : borderColor,
          }}>
            confess
            </Button>
        </div>
      </div>

      <div className='lg:w-1/2 relative mt-5'>
      <SelectionWheel onSelectMood={(color) => setBorderColor(color)}/>
        
      </div>
    </div>
  )
}

export default PostingSection;