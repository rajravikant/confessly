import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import NavBar from "@/components/landing/NavBar";
import Testomonial from "@/components/landing/Testomonial";

export default function Home() {
  return (
    <div className="h-screen w-full bg-primary ">
      <NavBar />
      <Hero />
        <div className="lg:pt-16 space-y-16">
          <About />
          <Features />
          <Testomonial/>
        </div>
      <Footer/>
    </div>
  );
}
