import { useState, useEffect } from "react";
import CyberBackground from "./components/CyberBackground/CyberBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NeonShadow from "./components/NeonShadow/NeonShadow";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill/Skill";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CyberTerminal from "./components/CyberTerminal/CyberTerminal";

function OrbitalDivider() {
  return (
    <div className="orbital-section-divider" aria-hidden="true">
      <div className="divider-line"></div>
      <div className="divider-orb">
        <div className="divider-orb-core"></div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [palette, setPalette] = useState(() => {
    try {
      return localStorage.getItem("meet_4k_palette") || "kyoto";
    } catch {
      return "kyoto";
    }
  });

  useEffect(() => {
    document.body.setAttribute("data-palette", palette);
    try {
      localStorage.setItem("meet_4k_palette", palette);
    } catch {
      /* ignore */
    }
  }, [palette]);

  // Realistic Scroll-Reveal Observer for all sections
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 4K Interactive Cosmic Nebula & Deep-Space Orbital Canvas */}
      <CyberBackground palette={palette} />

      {/* Sticky Header with Live 4K Spectrum Switcher */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        palette={palette}
        onSelectPalette={setPalette}
      />

      {/* Main Content Flow Centered on Meet Amit Dharaiya */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <OrbitalDivider />
        <NeonShadow />
        <OrbitalDivider />
        <About />
        <OrbitalDivider />
        <Projects />
        <OrbitalDivider />
        <Skill />
        <OrbitalDivider />
        <Achievements />
        <OrbitalDivider />
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
