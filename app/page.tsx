import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Stats from "./components/Stats";
import Experience from "./components/Experience";
import FloatingTech from "./components/FloatingTech";
import LoadingScreen from "./components/LoadingScreen";

import TempScroll from "./components/effects/TempScroll";
import ParticlesBackground from "./components/effects/ParticlesBackground";
import MouseSpotlight from "./components/effects/MouseSpotlight";
import GSAPProvider from "./components/effects/GSAPProvider";

export default function Home() {
  return (
    <TempScroll>
      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <LoadingScreen />
        <div className="aurora-bg" />
        <ParticlesBackground />
        <MouseSpotlight />
        <GSAPProvider />
        <FloatingTech />

        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#0e7490_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed_0%,transparent_35%)]" />
        <div className="fixed inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </TempScroll>
  );
}