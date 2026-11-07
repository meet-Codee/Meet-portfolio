import { sound } from "../../utils/audio";
import { Sparkles, Trophy, Gamepad2, ArrowRight, Terminal, Award } from "lucide-react";
import "./Hero.css";

function Hero({ onOpenTerminal }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge" onMouseEnter={() => sound.hover()}>
            <span className="live-dot"></span>
            <span className="badge-text">FOLIOFORGE 2026 • COMPUTE-X MSRUAS</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="neon-name">Meet Amit Dharaiya</span>.
            <br />
            <span className="hero-subhead">
              I build immersive games, cyber web experiences & AI tools.
            </span>
          </h1>

          <p className="hero-bio">
            Web developer and game prototyping enthusiast based in Bangalore. 
            Creator and team member behind <strong className="text-cyan">Neon Shadow</strong> (3rd Place at RESPAWN) and 
            hackathon winner at <strong className="text-gold">Jarvis 1.0</strong> (1st Place). 
            Focused on fluid user interfaces, real-time mechanics, and responsive 4K experiences.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#neon-shadow"
              className="cyber-btn cyber-btn-primary"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <Gamepad2 size={18} />
              <span>Explore Flagship</span>
            </a>

            <a
              href="#projects"
              className="cyber-btn cyber-btn-secondary"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <button
              className="cyber-btn cyber-btn-secondary hero-term-btn"
              onClick={() => {
                sound.click();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.hover()}
            >
              <Terminal size={16} />
              <span>CLI Terminal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Holographic HUD Card with Verified Accolades */}
        <div className="hero-hud">
          <div className="hud-card" onMouseEnter={() => sound.hover()}>
            <div className="hud-header">
              <span className="hud-title">SYSTEM_STATUS: ACTIVE</span>
              <span className="hud-ping">24ms • 60 FPS</span>
            </div>

            {/* Profile Avatar / Emblem */}
            <div className="hud-avatar-wrap">
              <div className="hud-avatar-glow"></div>
              <img
                src="/img.jpeg"
                alt="Meet Amit Dharaiya"
                className="hud-avatar-img"
              />
              <div className="hud-avatar-border"></div>
            </div>

            <div className="hud-body">
              <h3 className="hud-name">MEET AMIT DHARAIYA</h3>
              <p className="hud-role">Full-Stack Web & Game Prototyper</p>
              <p className="hud-loc">📍 Bangalore, Karnataka • RUAS</p>

              {/* Accolades Pills */}
              <div className="hud-accolades">
                <a 
                  href="#achievements" 
                  className="hud-pill pill-gold"
                  onClick={() => sound.click()}
                >
                  <Trophy size={14} />
                  <span>1st Place • Jarvis 1.0 Hackathon</span>
                </a>

                <a 
                  href="#neon-shadow" 
                  className="hud-pill pill-cyan"
                  onClick={() => sound.click()}
                >
                  <Award size={14} />
                  <span>3rd Place • RESPAWN Pravrutti 2.0</span>
                </a>

                <div className="hud-pill pill-violet">
                  <Gamepad2 size={14} />
                  <span>Flagship: Neon Shadow (8 Chapters)</span>
                </div>
              </div>
            </div>

            <div className="hud-footer">
              <span className="hud-code-tag">&lt;DEVELOPER_PROFILE /&gt;</span>
              <span className="hud-avail">READY FOR PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
