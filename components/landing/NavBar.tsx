import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Logo from "../ui/Logo";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-12 bg-transparent text-white absolute top-0 left-0 right-0 z-10">
      <Logo />

      <Link href={"/confessions"}>
        <Button variant="primary" size="medium" className="bg-gray-700/80">
          <span className="text-sm">Confess</span>
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
