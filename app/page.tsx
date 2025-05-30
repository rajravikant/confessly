import React from "react";
import dynamic from "next/dynamic";
import ScreenWrapper from "./confessions/(components)/shared/ScreenWrapper";

const About = dynamic(() => import("@/components/landing/About"));
const Features = dynamic(() => import("@/components/landing/Features"));
const Footer = dynamic(() => import("@/components/landing/Footer"));
const Hero = dynamic(() => import("@/components/landing/Hero"));
const NavBar = dynamic(() => import("@/components/landing/NavBar"));
const Testomonial = dynamic(() => import("@/components/landing/Testomonial"));

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <NavBar />
      <Hero />
      <ScreenWrapper>

        <div className="lg:pt-16 pt-0 space-y-16">
          <About />
          <Features />
          <Testomonial/>
        </div>
      </ScreenWrapper>
      <Footer/>
    </div>
  );
}
