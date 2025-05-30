"use client";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import AuthButtons from "./AuthButtons";
import { usePathname } from "next/navigation";

const ShareNavbar =  () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Confessions", href: "/confessions" , active : pathname === "/confessions"},
    { name: "Leaderboard", href: "/confessions/leaderboard" , active : pathname === "/confessions/leaderboard"},
    { name: "Profile", href: "/confessions/profile" , active : pathname === "/confessions/profile"},
    { name: "Share", href: "/confessions/share" , active : pathname === "/confessions/share"},
  ];
  


  
  return (
    <nav className="flex justify-between items-center lg:px-32 px-8 py-6 bg-transparent text-white ">
      <Logo />

      <div className="lg:flex hidden gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn("text-white  hover:text-gray-300",
              link.active && "text-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-2">
        <div>
          <AuthButtons navlinks={navLinks} />
        </div>

        {/* <Link href={"/confessions/share"}>
          <Button >
            <span className="text-sm">Confess</span>
          </Button>
        </Link> */}

      
      </div>
    </nav>
  );
};

export default ShareNavbar;



