"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NavLinks = () => {
    const router = useRouter()
  return (
    <div className="flex gap-4">
    {navLinks.map((link) => (
        <Link key={link.name} href={link.href} className={cn("text-white hover:text-gray-300",router.pathname === link.href ? "text-accent font-bold" : "")}>
            {link.name}
        </Link>
    ))}
</div>
  )
}

export default NavLinks;


const navLinks = [ 
    { name: 'Confessions', href: '/confessions' },
    { name: 'Leaderboard', href: '/confessions/leaderboard' },
    { name: 'Profile', href: '/confessions/profile' },
    { name: 'Report', href: '/confessions/report' },
    ]