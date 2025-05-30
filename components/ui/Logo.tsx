import Link from 'next/link'
import React from 'react'

const Logo = () => (
    <Link href={"/"}>
        <div className="text-xl text-white">Confess<span className='text-primary font-bold'>ly</span></div>
    </Link>
)
  
export default Logo