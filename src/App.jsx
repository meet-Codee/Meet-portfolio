import { useState } from "react";
import CyberBackground from "./components/CyberBackground/CyberBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NeonShadow from "./components/NeonShadow/NeonShadow";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Skill from "./components/Skill/Skill";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CyberTerminal from "./components/CyberTerminal/CyberTerminal";

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      {/* 4K Interactive Cyber Starfield Background */}
      <CyberBackground />

      {/* Main Header / Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <NeonShadow />
        <Projects />
        <Achievements />
        <Skill />
        <About />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Cyber HUD Terminal Overlay */}
      <CyberTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />
    </>
  );
}

export default App;
