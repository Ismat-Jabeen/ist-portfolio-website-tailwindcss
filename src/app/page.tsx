import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import MenuOverlay from "@/components/MenuOverlay";
import Footer from "@/components/Footer";
import EmailSection from "@/components/EmailSection";
import ProjectsSection from "@/components/ProjectsSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
       < Navbar /> 
       <div className="container mt-24 mx-auto px-12 py-4"> 
      < HeroSection />
      <AboutSection />
      {/* <MenuOverlay /> */}
      
      < ProjectsSection />
      <EmailSection />
      </div > 
      < Footer />
       
    </main>
    
  );         
}
