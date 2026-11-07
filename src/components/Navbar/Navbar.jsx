import { useState, useEffect } from "react";
import { sound } from "../../utils/audio";
import { Volume2, VolumeX, Terminal, Menu, X, ShieldAlert, Sparkles } from "lucide-react";
import "./Navbar.css";

function Navbar({ onOpenTerminal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(sound.isEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
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
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="logo" 
          onClick={handleNavClick}
          onMouseEnter={() => sound.hover()}
        >
          <span className="logo-glitch" data-text="MAD">MAD</span>
          <span className="logo-tag">DEV.2189</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
            <a 
              href="#projects" 
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#achievements" 
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
            >
              Arsenal
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              onMouseEnter={() => sound.hover()}
              className="nav-contact-pill"
            >
              Initiate Contact
            </a>
          </li>
        </ul>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Cyber Sound FX Toggle */}
          <button
            className={`action-btn sound-toggle ${audioEnabled ? "active" : ""}`}
            onClick={toggleAudio}
            onMouseEnter={() => sound.hover()}
            aria-label={audioEnabled ? "Disable Sound FX" : "Enable Sound FX"}
            title={audioEnabled ? "Sound FX: ON (Click to mute)" : "Sound FX: OFF (Click to unmute)"}
          >
            {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Terminal Launcher */}
          <button
            className="action-btn terminal-btn"
            onClick={() => {
              sound.click();
              onOpenTerminal();
            }}
            onMouseEnter={() => sound.hover()}
            aria-label="Open Cyber Terminal"
            title="Open Interactive Cyber Terminal"
          >
            <Terminal size={18} />
            <span className="terminal-shortcut">CLI</span>
          </button>

          {/* Mobile Menu Toggle */}
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
