import { sound } from "../../utils/audio";
import { Mail, ArrowUp, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin } from "../common/Icons";
import "./Footer.css";

function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Tier */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" onClick={() => sound.hover()}>
              <span className="logo-glitch">MAD</span>
              <span className="logo-tag">DEV.2189</span>
            </a>
            <p className="footer-pitch">
              Crafting immersive games, cyber-noir interfaces, and zero-dependency web applications.
            </p>
            <div className="event-badge">
              <Sparkles size={14} className="text-cyan" />
              <span>FOLIOFORGE 2026 ENTRY • COMPUTE-X MSRUAS</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="col-title">NAVIGATION</span>
            <ul className="footer-links">
              <li><a href="#hero" onClick={() => sound.hover()}>Home</a></li>
              <li><a href="#neon-shadow" onClick={() => sound.hover()}>Neon Shadow (Flagship)</a></li>
              <li><a href="#projects" onClick={() => sound.hover()}>Projects Repertoire</a></li>
              <li><a href="#achievements" onClick={() => sound.hover()}>Achievements</a></li>
              <li><a href="#skills" onClick={() => sound.hover()}>Skills Matrix</a></li>
              <li><a href="#about" onClick={() => sound.hover()}>About Meet</a></li>
              <li><a href="#contact" onClick={() => sound.hover()}>Initiate Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="col-title">TACTICAL FEEDS</span>
            <ul className="footer-links">
              <li>
                <a href="https://respawn-rebels26.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Play Neon Shadow ↗
                </a>
              </li>
              <li>
                <a href="https://christina-murex.vercel.app" target="_blank" rel="noopener noreferrer">
                  Project Christina AI ↗
                </a>
              </li>
              <li>
                <button 
                  className="footer-term-link"
                  onClick={() => {
                    sound.click();
                    onOpenTerminal();
                  }}
                >
                  <Terminal size={14} />
                  <span>Launch Cyber Terminal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} <strong>Meet Amit Dharaiya</strong>. All rights reserved. Built with React & Vite for 4K Ultra-HD.
          </p>

          <div className="footer-actions">
            <div className="footer-socials">
              <a 
                href="https://github.com/meet-Codee" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onClick={() => sound.hover()}
              >
                <Github size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/in/meetAD-8618093307/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onClick={() => sound.hover()}
              >
                <Linkedin size={18} />
              </a>

              <a 
                href="mailto:meetadharaiya@gmail.com"
                aria-label="Send Email"
                onClick={() => sound.hover()}
              >
                <Mail size={18} />
              </a>
            </div>

            <button 
              className="back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
