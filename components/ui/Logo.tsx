import Link from 'next/link'
import React from 'react'

const Logo = () => (
    <Link href={"/"}>
        <div className="text-xl">Confess<span className='text-accent font-bold'>ly</span></div>
    </Link>
)
  
export default Logo