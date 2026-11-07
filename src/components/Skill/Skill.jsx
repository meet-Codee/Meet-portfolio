import { useState } from "react";
import { sound } from "../../utils/audio";
import { Terminal, Code2, Server, Wrench, Sparkles } from "lucide-react";
import "./Skill.css";

const ORBITAL_SKILLS = [
  {
    id: "react",
    name: "React 19",
    ring: "inner",
    angle: 0,
    color: "#00d4ff",
    whereUsed: "Powers this 4K Orbital Portfolio, interactive state machines, and CRUD task experiments.",
  },
  {
    id: "js",
    name: "JavaScript",
    ring: "inner",
    angle: 90,
    color: "#ffb800",
    whereUsed: "Core language for Neon Shadow candidate prototyping, Christina voice logic, and DOM physics.",
  },
  {
    id: "html",
    name: "HTML5 & Canvas",
    ring: "inner",
    angle: 180,
    color: "#ff007f",
    whereUsed: "Semantic structure, 60fps Neo-Kyoto stealth dojo simulation, and 4K cosmic nebula canvas.",
  },
  {
    id: "css",
    name: "CSS3 & 3D UI",
    ring: "inner",
    angle: 270,
    color: "#a855f7",
    whereUsed: "3D gyroscopic orbits, glassmorphism, responsive fluid clamps, and multi-spectrum themes.",
  },
  {
    id: "node",
    name: "Node.js",
    ring: "outer",
    angle: 30,
    color: "#00d4ff",
    whereUsed: "Zero-dependency backend server and API orchestration in Project Christina.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    ring: "outer",
    angle: 102,
    color: "#ff3366",
    whereUsed: "Version control, team collaboration for Respawn Rebels, and continuous Netlify/Vercel deploys.",
  },
  {
    id: "python",
    name: "Python",
    ring: "outer",
    angle: 174,
    color: "#ffb800",
    whereUsed: "Used in SkyGuard AI & Smart India Hackathon (SIH 2026) defense telemetry prototypes.",
  },
  {
    id: "audio",
    name: "Web Audio API",
    ring: "outer",
    angle: 246,
    color: "#a855f7",
    whereUsed: "Synthesizes zero-asset sci-fi hover, click, and fanfare audio effects in real time.",
  },
  {
    id: "vite",
    name: "Vite & Netlify",
    ring: "outer",
    angle: 318,
    color: "#ff007f",
    whereUsed: "Sub-second production bundling and global Edge CDN deployment for Meet's portfolio.",
  },
];

const CATEGORIES = [
  {
    title: "Frontend & Interactive UI",
    icon: <Code2 size={20} className="text-cyan" />,
    accent: "#00d4ff",
    items: ["HTML5 & Semantic Markup", "CSS3, Grid, Flexbox & 3D Orbits", "JavaScript (ES2024+)", "React 19 & Hooks", "HTML5 Canvas 2D & WebGL"],
  },
  {
    title: "Backend & Systems",
    icon: <Server size={20} className="text-magenta" />,
    accent: "#ff007f",
    items: ["Node.js Runtime", "REST API Integration", "Python Prototyping", "Web Audio API Synthesis"],
  },
  {
    title: "Workflow, Git & Hosting",
    icon: <Wrench size={20} className="text-gold" />,
    accent: "#ffb800",
    items: ["Git & GitHub (@meet-Codee)", "Vite Build System", "Netlify & Vercel Deployment", "Responsive Mobile-to-4K Design"],
  },
  {
    title: "Hackathon & Team Execution",
    icon: <Sparkles size={20} className="text-violet" />,
    accent: "#a855f7",
    items: ["Candidate Game Prototyping", "Live Stage Pitching & Q&A", "Playable Demo Setup", "24-Hour Sprint Execution"],
  },
];

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState(ORBITAL_SKILLS[0]);

  return (
    <section id="skills" className="skills-section reveal-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Terminal size={16} />
          <span>MEET AMIT DHARAIYA • PLANETARY SKILL CONSTELLATION</span>
        </div>

        <h2 className="section-title">
          Interactive <span className="gradient-text">Skill Orbit</span> & Tech Stack
        </h2>
        <p className="section-subtitle">
          Instead of arbitrary percentage bars, explore my real technical stack in orbit. Click any technology planet to inspect where and how I use it in production.
        </p>
      </div>

      <div className="skills-orbital-layout">
        {/* Left: Interactive 3D Planetary Skill System */}
        <div className="planetary-skill-card holo-card">
          <div className="planetary-stage">
            <div className="planet-orbit-ring ring-inner-track" aria-hidden="true"></div>
            <div className="planet-orbit-ring ring-outer-track" aria-hidden="true"></div>

            {/* Central Core */}
            <div className="planet-sun-core">
              <span className="sun-tag">MEET.STACK</span>
              <strong className="sun-active">{selectedSkill.name}</strong>
            </div>

            {/* Orbiting Skill Planets */}
            {ORBITAL_SKILLS.map((sk) => {
              const radius = sk.ring === "inner" ? 26 : 42;
              const rad = (sk.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * radius;
              const y = 50 + Math.sin(rad) * radius;
              return (
                <button
                  key={sk.id}
                  type="button"
                  className={`skill-planet ${selectedSkill.id === sk.id ? "active" : ""}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    "--sk-color": sk.color,
                  }}
                  onClick={() => {
                    sound.click();
                    setSelectedSkill(sk);
                  }}
                  onMouseEnter={() => {
                    sound.hover();
                    setSelectedSkill(sk);
                  }}
                >
                  <span className="planet-dot"></span>
                  <span className="planet-label">{sk.name}</span>
                </button>
              );
            })}
          </div>

          <div className="planet-inspector-box">
            <div className="inspector-top">
              <span className="inspector-tag">REAL-WORLD IMPLEMENTATION</span>
              <span className="inspector-ring-badge" style={{ color: selectedSkill.color }}>
                ● {selectedSkill.name}
              </span>
            </div>
            <p className="inspector-desc">{selectedSkill.whereUsed}</p>
          </div>
        </div>

        {/* Right: 4 Categorized Architectural Cards */}
        <div className="skills-categories-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="skill-category-card holo-card"
              style={{ "--cat-accent": cat.accent }}
              onMouseEnter={() => sound.hover()}
            >
              <div className="cat-header">
                <div className="cat-icon-orb">{cat.icon}</div>
                <h3 className="cat-title">{cat.title}</h3>
              </div>

              <ul className="cat-skills-list">
                {cat.items.map((item) => (
                  <li key={item} className="skill-pill-item">
                    <span className="pill-dot"></span>
                    <span className="pill-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
