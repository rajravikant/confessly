import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";


const ShareNavbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-32 px-8 py-6 bg-transparent text-white ">
            
            <Logo/>

            <div className="lg:flex hidden gap-4">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className={cn("text-white hover:text-gray-300")}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex gap-2">
                <Button variant='text' >
                    <span className="text-sm">Login</span>
                </Button>
                <Link href={"/confessions/share"} >
                <Button variant='primary' size='medium' className='bg-gray-700/50'>
                    <span className="text-sm">Confess</span>
                </Button>
                </Link>

                <button className='lg:hidden'>
                    <CiMenuFries size={20} className="text-white" />
                </button>
                
            </div>
        </nav>

  )
}

export default ShareNavbar;

const navLinks = [ 
    { name: 'Confessions', href: '/confessions' },
    { name: 'Leaderboard', href: '/confessions/leaderboard' },
    { name: 'Profile', href: '/confessions/profile' },
    { name: 'Report', href: '/confessions/report' },
    ]