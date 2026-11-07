import { useState, useEffect } from "react";
import { sound } from "../../utils/audio";
import { Volume2, VolumeX, Terminal, Menu, X, Sparkles, Palette } from "lucide-react";
import "./Navbar.css";

const PALETTES = [
  { id: "kyoto", label: "Neo-Kyoto", colors: ["#00d4ff", "#ff007f", "#8b5cf6"] },
  { id: "solar", label: "Solar Flare", colors: ["#ff3366", "#ffb800", "#a855f7"] },
  { id: "nova", label: "Ultraviolet", colors: ["#a855f7", "#00d4ff", "#ff007f"] },
  { id: "gold", label: "Champion Gold", colors: ["#ffb800", "#00d4ff", "#ff007f"] },
];

function Navbar({ onOpenTerminal, palette, onSelectPalette }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(sound.isEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const newState = sound.toggle();
    setAudioEnabled(newState);
  };

  const handleNavClick = () => {
    sound.click();
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main Navigation">
        {/* Brand / Orbital Logo */}
        <a
          href="#hero"
          className="logo"
          onClick={handleNavClick}
          onMouseEnter={() => sound.hover()}
        >
          <span className="logo-orbit-emblem" aria-hidden="true">
            <span className="logo-orbit-ring ring-a"></span>
            <span className="logo-orbit-ring ring-b"></span>
            <span className="logo-orbit-core">M</span>
          </span>
          <span className="logo-text-group">
            <span className="logo-glitch">MEET DHARAIYA</span>
            <span className="logo-sub">BANGALORE • FOLIOFORGE '26</span>
          </span>
        </a>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={handleNavClick} onMouseEnter={() => sound.hover()}>
              Meet
            </a>
          </li>
          <li>
            <a
              href="#neon-shadow"
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
              className="nav-flagship-link"
            >
              <Sparkles size={14} className="neon-icon" />
              <span>Neon Shadow</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick} onMouseEnter={() => sound.hover()}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick} onMouseEnter={() => sound.hover()}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick} onMouseEnter={() => sound.hover()}>
              Skill Orbit
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={handleNavClick} onMouseEnter={() => sound.hover()}>
              Awards
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
              className="nav-contact-pill"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Controls: Live Spectrum Switcher + Audio + CLI */}
        <div className="nav-actions">
          <div className="spectrum-switcher" role="group" aria-label="4K Color Spectrum">
            <Palette size={14} className="spectrum-icon" />
            {PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`spectrum-dot ${palette === p.id ? "active" : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})`,
                }}
                onClick={() => {
                  sound.click();
                  onSelectPalette(p.id);
                }}
                onMouseEnter={() => sound.hover()}
                title={`Switch 4K Theme: ${p.label}`}
                aria-label={`Switch theme to ${p.label}`}
              />
            ))}
          </div>

          <button
            className={`action-btn sound-toggle ${audioEnabled ? "active" : ""}`}
            onClick={toggleAudio}
            onMouseEnter={() => sound.hover()}
            aria-label={audioEnabled ? "Disable Sound FX" : "Enable Sound FX"}
            title={audioEnabled ? "Cyber Audio FX: ON" : "Cyber Audio FX: OFF"}
          >
            {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            className="action-btn terminal-btn"
            onClick={() => {
              sound.click();
              onOpenTerminal();
            }}
            onMouseEnter={() => sound.hover()}
            aria-label="Open Cyber Terminal"
            title="Launch Meet's Interactive CLI Terminal"
          >
            <Terminal size={17} />
            <span className="terminal-shortcut">CLI</span>
          </button>

          <button
            className="menu-toggle"
            onClick={() => {
              sound.click();
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
