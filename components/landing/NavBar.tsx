import React from "react";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-12 bg-transparent text-white absolute top-0 left-0 right-0 z-40">
      <Logo />

      <Link href={"/confessions"}>
        <Button  size="md" >
          <span className="text-sm">Confess</span>
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
