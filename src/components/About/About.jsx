import { useState } from "react";
import { sound } from "../../utils/audio";
import { User, MapPin, GraduationCap, Code, Rocket, Sparkles, Compass, Layers } from "lucide-react";
import "./About.css";

const DNA_TRAITS = [
  { label: "Bangalore, IN", color: "#00d4ff", angle: 0 },
  { label: "Game Prototyper", color: "#ff007f", angle: 60 },
  { label: "1st Place Jarvis", color: "#ffb800", angle: 120 },
  { label: "React & Node.js", color: "#a855f7", angle: 180 },
  { label: "3rd Place Respawn", color: "#00d4ff", angle: 240 },
  { label: "Stage Pitcher", color: "#ff3366", angle: 300 },
];

const TIMELINE = [
  {
    date: "25 SEP 2026",
    title: "Whimsymaxxing — RUAS Literary Club",
    badge: "Participation",
    desc: "Participated in the creative literary event at Ramaiah University of Applied Sciences, sharpening narrative & creative thinking.",
    color: "#a855f7",
  },
  {
    date: "14–16 OCT 2026",
    title: "3rd Place Winner — RESPAWN at PRAVRUTTI 2.0",
    badge: "3rd Place • Team Respawn Rebels",
    desc: "Built a candidate game prototype for Neon Shadow, co-presented in the final round, supported live Q&A, and set up the playable demo at MSRUAS.",
    color: "#00d4ff",
  },
  {
    date: "07 NOV 2026",
    title: "1st Place Winner — Jarvis 1.0 (24-Hour Hackathon)",
    badge: "1st Place Champion",
    desc: "Secured 1st Place in a high-intensity 24-hour hackathon sprint, turning rapid prototypes into a working real-world solution.",
    color: "#ffb800",
  },
  {
    date: "07 NOV 2026",
    title: "FOLIOFORGE 2026 — ComputeX MSRUAS",
    badge: "Official Entry",
    desc: "Engineered this 4K Ultra-HD multi-orbital portfolio showcasing interactive game canvases, Web Audio synthesis, and verified work.",
    color: "#ff007f",
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("story"); // story | timeline | philosophy

  return (
    <section id="about" className="about-section reveal-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <User size={16} />
          <span>MEET AMIT DHARAIYA • IDENTITY & BUILDER DNA</span>
        </div>

        <h2 className="section-title">
          Meet <span className="gradient-text">The Builder</span> Behind The Screen
        </h2>
        <p className="section-subtitle">
          A passionate web developer from Bangalore who learns by prototyping real products, competing in hackathons, and making interfaces feel unforgettable.
        </p>
      </div>

      <div className="about-orbital-layout">
        {/* Left Column: 3D Orbital DNA Core around Meet */}
        <div className="about-dna-card holo-card">
          <div className="dna-orbit-system">
            <div className="dna-ring ring-outer" aria-hidden="true"></div>
            <div className="dna-ring ring-mid" aria-hidden="true"></div>
            <div className="dna-ring ring-inner" aria-hidden="true"></div>

            <div className="dna-photo-core">
              <img src="/img.jpeg" alt="Meet Amit Dharaiya" className="dna-photo" />
            </div>

            {DNA_TRAITS.map((t) => {
              const rad = (t.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * 42;
              const y = 50 + Math.sin(rad) * 42;
              return (
                <div
                  key={t.label}
                  className="dna-orbit-pill"
                  style={{ left: `${x}%`, top: `${y}%`, "--trait-color": t.color }}
                  onMouseEnter={() => sound.hover()}
                >
                  <span className="trait-dot"></span>
                  <span>{t.label}</span>
                </div>
              );
            })}
          </div>

          <div className="dna-footer-caption">
            <h3 className="dna-name">Meet Amit Dharaiya</h3>
            <p className="dna-role">Full-Stack Web Developer & Game Prototyper • Bangalore</p>
          </div>
        </div>

        {/* Right Column: Interactive Identity Dossier & Timeline */}
        <div className="about-dossier-card holo-card">
          <div className="dossier-tabs" role="tablist">
            <button
              type="button"
              className={`dossier-tab ${activeTab === "story" ? "active" : ""}`}
              onClick={() => {
                sound.click();
                setActiveTab("story");
              }}
            >
              <Sparkles size={15} />
              <span>01 // Meet's Story</span>
            </button>
            <button
              type="button"
              className={`dossier-tab ${activeTab === "timeline" ? "active" : ""}`}
              onClick={() => {
                sound.click();
                setActiveTab("timeline");
              }}
            >
              <Compass size={15} />
              <span>02 // Hackathon Timeline</span>
            </button>
            <button
              type="button"
              className={`dossier-tab ${activeTab === "philosophy" ? "active" : ""}`}
              onClick={() => {
                sound.click();
                setActiveTab("philosophy");
              }}
            >
              <Layers size={15} />
              <span>03 // Builder Workflow</span>
            </button>
          </div>

          {activeTab === "story" && (
            <div className="dossier-pane">
              <h3 className="about-heading">
                From Web Fundamentals in Bangalore to Winning Hackathon Stages
              </h3>

              <p className="about-text">
                I’m <strong>Meet Amit Dharaiya</strong>, a web developer from <strong>Bangalore</strong> who loves creating responsive, modern, and interactive applications using <strong>HTML, CSS, JavaScript, React, and Node.js</strong>.
              </p>

              <p className="about-text">
                Instead of stopping at static templates, I push myself through competitive hackathons — where ideas have to become working prototypes in hours. Whether I’m building a candidate game prototype and setting up the final-round demo for <strong>Neon Shadow</strong> with Team Respawn Rebels, or competing in a 24-hour sprint at <strong>Jarvis 1.0</strong> (1st Place), I bring energy, hands-on prototyping, and clear stage communication to every project.
              </p>

              <div className="about-highlights-grid">
                <div className="about-highlight-card">
                  <MapPin size={18} className="text-cyan" />
                  <div>
                    <span className="highlight-label">Location</span>
                    <p className="highlight-value">Bangalore, Karnataka, India</p>
                  </div>
                </div>

                <div className="about-highlight-card">
                  <GraduationCap size={18} className="text-magenta" />
                  <div>
                    <span className="highlight-label">Campus Community</span>
                    <p className="highlight-value">MS Ramaiah University of Applied Sciences</p>
                  </div>
                </div>

                <div className="about-highlight-card">
                  <Code size={18} className="text-violet" />
                  <div>
                    <span className="highlight-label">Core Stack</span>
                    <p className="highlight-value">HTML, CSS, JS, React, Node.js, Git & GitHub</p>
                  </div>
                </div>

                <div className="about-highlight-card">
                  <Rocket size={18} className="text-gold" />
                  <div>
                    <span className="highlight-label">Verified Honors</span>
                    <p className="highlight-value">1st Place Jarvis 1.0 • 3rd Place RESPAWN</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div className="dossier-pane">
              <div className="orbital-timeline">
                {TIMELINE.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item"
                    style={{ "--tl-color": item.color }}
                    onMouseEnter={() => sound.hover()}
                  >
                    <div className="tl-orb-node"></div>
                    <div className="tl-content">
                      <div className="tl-meta">
                        <span className="tl-date">{item.date}</span>
                        <span className="tl-badge">{item.badge}</span>
                      </div>
                      <h4 className="tl-title">{item.title}</h4>
                      <p className="tl-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="dossier-pane">
              <div className="philosophy-grid">
                <div className="phil-card">
                  <span className="phil-num">01</span>
                  <h4>Prototype Fast, Test Live</h4>
                  <p>
                    Build playable, clickable prototypes early so teammates and users can test real interactions instead of guessing from slides.
                  </p>
                </div>
                <div className="phil-card">
                  <span className="phil-num">02</span>
                  <h4>Every Pixel & Transition Counts</h4>
                  <p>
                    From 4K desktop monitors to mobile screens, motion should feel smooth, purposeful, and responsive to user input.
                  </p>
                </div>
                <div className="phil-card">
                  <span className="phil-num">03</span>
                  <h4>Pitch & Demo With Confidence</h4>
                  <p>
                    Great code deserves a great live demo. Setting up reliable demos and handling live Q&A under pressure is my favorite part of hackathons.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
