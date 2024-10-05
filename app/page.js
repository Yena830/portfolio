import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171516]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 pt-6 pb-4">
        <HeroSection />
        <div className="py-10"></div>
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
