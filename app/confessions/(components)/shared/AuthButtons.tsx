"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/AuthProvider";
import { AuthModal } from "./AuthModal";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { X } from "lucide-react";
import {motion,AnimatePresence} from "motion/react";
import Spinner from "./Spinner";

interface Props {
  navlinks: Array<{
    name: string;
    href: string;
    active?: boolean;
  }>;
}

const AuthButtons = ({ navlinks }: Props) => {
  const { user, signOut, loading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
 
  useEffect(() => {
    if (isModalOpen || isMobileNavOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll"); 
    };
  }, [isModalOpen, isMobileNavOpen]);

  const handleSignup = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const handleLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="flex gap-4 items-center justify-center h-full">
      <AuthModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        isLogin={isLogin}
      />

      <AnimatePresence>
        {isMobileNavOpen && (
          <FullScreenMobileNavigation
            navlinks={navlinks}
            onClose={handleMobileNavClose}
          />
        )}
      </AnimatePresence>

      {user ? (
        <>
          <Button onClick={signOut} variant={"outline"} disabled={loading}>
            {loading ? (
              <span><Spinner/></span>
            ) : "Log Out"}
          </Button>
          <Link href={"/confessions/share"}>
            <Button>Confess</Button>
          </Link>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Button disabled={loading} variant={"outline"} onClick={handleSignup}>
            Sign Up
          </Button>
          <Button disabled={loading} onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}
      <button className="lg:hidden" onClick={toggleMobileNav}>
        <CiMenuFries size={20} className="text-white" />
      </button>
    </div>
  );
};

export default AuthButtons;

const FullScreenMobileNavigation = ({
  navlinks,
  onClose,
}: Props & { onClose: () => void }) => {
 
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-6 bg-white/20 p-1.5 rounded-full text-white"
        
      >
        <X size={24} />
      </button>
      <motion.ul
        className="flex flex-col gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, staggerChildren: 0.1 }}
      >
        {navlinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Link href={link.href} onClick={onClose} className={`text-2xl hover:text-gray-300 ${link.active ? "text-primary" : "text-white "}`}>
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
