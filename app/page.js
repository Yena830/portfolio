import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection.jsx";
import Footer from "./components/Footer.jsx";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171516]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        {/* <div style={{ height: "50vh", width: "100%" }}>
          <Scene />
        </div> */}
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
