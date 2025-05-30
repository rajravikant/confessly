import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer({className}:{className?:string}) {
  return (
    <footer className={cn("bg-background text-gray-400 p-16",className ? className : null)}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left side */}
        <div className="space-y-6 mb-8 md:mb-0">
          <h1 className="text-white text-2xl font-semibold">Confessly</h1>
          <div className="flex space-x-4 text-xl">
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Middle Links */}
        <div className="flex space-x-16">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Quick Links</h3>
            <ul className="space-y-2">
         
              {navLinks.map((link) => (
                <li key={link.name} >
                  <Link key={link.name} href={link.href} className="hover:text-white cursor-pointer text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 border border-gray-500/50 px-2 py-1 rounded-full">
          <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>All systems normal</span>
        </div>

        <div className="text-center">&copy; {new Date().getFullYear()} Confessly, India.</div>

      
      </div>
    </footer>
  );
}


const navLinks = [
  { name: "Confessions", href: "/confessions" },
  { name: "Leaderboard", href: "/confessions/leaderboard" },
  { name: "Profile", href: "/confessions/profile"  },
  { name: "Share", href: "/confessions/share" },
];