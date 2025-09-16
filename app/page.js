import WelcomeSection from "./components/WelcomeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection.jsx";
import Footer from "./components/Footer.jsx";
// import Scene from "./components/Scene";
import SkillsSection from "./components/SkillsSection";
import AchievementsSection from "./components/AchievementsSection";
import SplashCursor from "./components/SplashCursor";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171516]">
      <Navbar />
      <SplashCursor />
      <WelcomeSection />
      <div id="hero" className="container mt-32 mx-auto px-12 py-8">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        {/* <div style={{ height: "50vh", width: "100%" }}>
          <Scene />
        </div> */}
        <SkillsSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
