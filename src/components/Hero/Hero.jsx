import { useState, useEffect } from "react";
import { sound } from "../../utils/audio";
import { Trophy, Gamepad2, ArrowRight, Terminal, Award, Sparkles, Zap, Code2, MapPin } from "lucide-react";
import "./Hero.css";

const ROLES = [
  "Full-Stack Web Developer",
  "Sci-Fi Game Prototyper",
  "1st Place Hackathon Winner",
  "Interactive UI Architect",
];

const ORBIT_NODES = [
  {
    id: "jarvis",
    label: "1st Place • Jarvis 1.0",
    sub: "24-Hour Hackathon Champion (07 Nov 2026)",
    color: "#ffb800",
    angle: 25,
    href: "#achievements",
  },
  {
    id: "respawn",
    label: "3rd Place • RESPAWN",
    sub: "PRAVRUTTI 2.0 • Team Respawn Rebels",
    color: "#00d4ff",
    angle: 115,
    href: "#neon-shadow",
  },
  {
    id: "neon",
    label: "Flagship • Neon Shadow",
    sub: "Candidate Prototype, Final Pitch & Demo Setup",
    color: "#ff007f",
    angle: 205,
    href: "#neon-shadow",
  },
  {
    id: "stack",
    label: "React • Node • Canvas",
    sub: "Bangalore Web Developer • MSRUAS",
    color: "#a855f7",
    angle: 295,
    href: "#skills",
  },
];

function Hero({ onOpenTerminal }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [orbitSpeed, setOrbitSpeed] = useState("normal"); // normal | hyper | pause
  const [activeNode, setActiveNode] = useState(ORBIT_NODES[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: ny * -22, y: nx * 22 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Meet Amit Dharaiya Identity & Narrative */}
        <div className="hero-content">
          <div className="hero-badge" onMouseEnter={() => sound.hover()}>
            <span className="live-dot"></span>
            <span className="badge-text">MEET AMIT DHARAIYA • FOLIOFORGE 2026 OFFICIAL ENTRY</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-greeting">ARCHITECTING DIGITAL WORLDS</span>
            <span className="neon-name">Meet Amit Dharaiya</span>
          </h1>

          <div className="hero-role-rotator" aria-live="polite">
            <span className="role-prefix">&gt;_</span>
            <span key={roleIdx} className="role-dynamic">
              {ROLES[roleIdx]}
            </span>
          </div>

          <p className="hero-bio">
            I’m <strong>Meet Amit Dharaiya</strong>, a web developer from <strong>Bangalore</strong> who loves turning ambitious ideas into high-resolution, interactive web experiences and playable browser games. From building a candidate game prototype and pitching <strong className="text-cyan">Neon Shadow</strong> (<strong>3rd Place</strong> at RESPAWN, PRAVRUTTI 2.0) to winning <strong className="text-gold">1st Place at Jarvis 1.0</strong> (24-Hour Hackathon), I build software that feels alive.
          </p>

          {/* Meet's Quick Proof Bento */}
          <div className="hero-metrics-bar">
            <a href="#achievements" className="metric-chip chip-gold" onClick={() => sound.click()}>
              <Trophy size={16} />
              <div>
                <strong>1st Place Winner</strong>
                <span>Jarvis 1.0 (24h Hackathon)</span>
              </div>
            </a>

            <a href="#neon-shadow" className="metric-chip chip-cyan" onClick={() => sound.click()}>
              <Award size={16} />
              <div>
                <strong>3rd Place Winner</strong>
                <span>RESPAWN • Pravrutti 2.0</span>
              </div>
            </a>

            <a href="#about" className="metric-chip chip-magenta" onClick={() => sound.click()}>
              <MapPin size={16} />
              <div>
                <strong>Bangalore, India</strong>
                <span>MSRUAS • Web & Game Dev</span>
              </div>
            </a>
          </div>

          {/* Primary Actions */}
          <div className="hero-cta-group">
            <a
              href="#neon-shadow"
              className="cyber-btn cyber-btn-primary"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <Gamepad2 size={18} />
              <span>Enter Neon Shadow</span>
            </a>

            <a
              href="#projects"
              className="cyber-btn cyber-btn-secondary"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <span>Explore Meet's Work</span>
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              className="cyber-btn cyber-btn-secondary"
              onClick={() => {
                sound.click();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.hover()}
            >
              <Terminal size={16} />
              <span>Meet's CLI</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Gyroscopic Orbital Core */}
        <div className="hero-orbital-stage">
          <div
            className={`orbital-gyroscope speed-${orbitSpeed}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Ambient 4K Nebula Backlight */}
            <div className="gyro-nebula-glow" aria-hidden="true"></div>

            {/* 3D Tilted Elliptical Orbital Rings */}
            <svg className="gyro-svg-rings" viewBox="0 0 500 500" aria-hidden="true">
              <defs>
                <linearGradient id="gradCyanMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ff007f" />
                </linearGradient>
                <linearGradient id="gradGoldViolet" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffb800" />
                  <stop offset="50%" stopColor="#ff007f" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>

              <g className="svg-orbit-group group-1">
                <ellipse
                  cx="250"
                  cy="250"
                  rx="225"
                  ry="88"
                  fill="none"
                  stroke="url(#gradCyanMagenta)"
                  strokeWidth="1.8"
                  strokeDasharray="12 8"
                />
                <circle cx="475" cy="250" r="6" fill="#00d4ff" />
                <circle cx="25" cy="250" r="5" fill="#ff007f" />
              </g>

              <g className="svg-orbit-group group-2">
                <ellipse
                  cx="250"
                  cy="250"
                  rx="210"
                  ry="95"
                  fill="none"
                  stroke="url(#gradGoldViolet)"
                  strokeWidth="1.6"
                />
                <circle cx="250" cy="155" r="5.5" fill="#ffb800" />
                <circle cx="250" cy="345" r="5.5" fill="#a855f7" />
              </g>

              <g className="svg-orbit-group group-3">
                <circle
                  cx="250"
                  cy="250"
                  r="178"
                  fill="none"
                  stroke="rgba(0, 212, 255, 0.32)"
                  strokeWidth="1.2"
                  strokeDasharray="4 10"
                />
              </g>

              <g className="svg-orbit-group group-4">
                <circle
                  cx="250"
                  cy="250"
                  r="236"
                  fill="none"
                  stroke="rgba(255, 0, 127, 0.25)"
                  strokeWidth="1"
                />
              </g>
            </svg>

            {/* Center Core: Meet Amit Dharaiya Portrait & Halo */}
            <div className="gyro-center-core">
              <div className="core-spinning-halo"></div>
              <div className="core-avatar-frame">
                <img
                  src="/img.jpeg"
                  alt="Meet Amit Dharaiya — Web Developer from Bangalore"
                  className="core-avatar-img"
                />
              </div>
              <div className="core-identity-pill">
                <Sparkles size={12} />
                <span>MEET.CORE // 4K</span>
              </div>
            </div>

            {/* Interactive Orbiting Nodes */}
            <div className="gyro-satellites-ring">
              {ORBIT_NODES.map((node, i) => (
                <a
                  key={node.id}
                  href={node.href}
                  className={`gyro-satellite sat-${i + 1} ${activeNode.id === node.id ? "active" : ""}`}
                  style={{ "--sat-color": node.color }}
                  onMouseEnter={() => {
                    sound.hover();
                    setActiveNode(node);
                  }}
                  onClick={() => sound.click()}
                >
                  <span className="sat-dot"></span>
                  <span className="sat-text">{node.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Orbital Control Deck */}
          <div className="orbital-control-deck">
            <div className="deck-readout">
              <span className="readout-dot" style={{ background: activeNode.color }}></span>
              <div>
                <div className="readout-title">{activeNode.label}</div>
                <div className="readout-sub">{activeNode.sub}</div>
              </div>
            </div>

            <div className="deck-buttons" role="group" aria-label="Orbital Velocity Controls">
              <button
                type="button"
                className={`deck-btn ${orbitSpeed === "normal" ? "active" : ""}`}
                onClick={() => {
                  sound.click();
                  setOrbitSpeed("normal");
                }}
              >
                1x Orbit
              </button>
              <button
                type="button"
                className={`deck-btn ${orbitSpeed === "hyper" ? "active" : ""}`}
                onClick={() => {
                  sound.fanfare();
                  setOrbitSpeed("hyper");
                }}
              >
                <Zap size={12} /> Hyperdrive
              </button>
              <button
                type="button"
                className={`deck-btn ${orbitSpeed === "pause" ? "active" : ""}`}
                onClick={() => {
                  sound.click();
                  setOrbitSpeed("pause");
                }}
              >
                Freeze
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
