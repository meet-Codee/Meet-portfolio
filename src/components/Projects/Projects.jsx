import { sound } from "../../utils/audio";
import { ExternalLink, Sparkles, Cpu, Shield, Globe, Award } from "lucide-react";
import { Github } from "../common/Icons";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: "christina",
      title: "Christina — AI Multi-Lingual Voice Tutor",
      tagline: "1st Place Winner at Jarvis 1.0 (24h Hackathon)",
      badge: "Jarvis 1.0 Hackathon Winner",
      badgeType: "gold",
      description:
        "An AI-powered voice tutor for Indian school students (Classes 5–12) studying in regional languages. Powered by Google Gemini and Sarvam AI, featuring a zero-dependency real-time voice pipeline, gapless Web Audio timeline, Socratic 4-rung hint ladder, and interactive WebGL liquid orb visuals.",
      image: "/projects/christina-icon.png",
      tech: ["Google Gemini API", "Sarvam AI", "Web Audio API", "WebGL", "Node.js", "Vercel"],
      demo: "https://christina-murex.vercel.app",
      github: "https://github.com/meet-Codee/christina",
      stats: "11 Indian Languages • Socratic Hint Ladder"
    },
    {
      id: "skyguard",
      title: "SkyGuard AI — SIH 2026 Defense Prototype",
      tagline: "National Hackathon Prototype",
      badge: "Smart India Hackathon",
      badgeType: "cyan",
      description:
        "An intelligent airspace surveillance and threat-monitoring prototype developed for the Smart India Hackathon (SIH 2026). Engineered in Python to analyze drone flight trajectories, predict airspace violations, and automate alert dispatch for security perimeters.",
      image: "/portimg.png",
      tech: ["Python", "Computer Vision", "Telemetry Analytics", "Automated Defense"],
      demo: "https://github.com/meet-Codee/SkyGuard_AI-Backup-",
      github: "https://github.com/meet-Codee/SkyGuard_AI-Backup-",
      stats: "Real-Time Tracking • Perimeter Telemetry"
    },
    {
      id: "portfolio",
      title: "FolioForge 2026 — Cyber Portfolio System",
      tagline: "Official ComputeX MSRUAS Submission",
      badge: "FolioForge 2026 Entry",
      badgeType: "magenta",
      description:
        "The very portfolio engine you are exploring right now. Designed from the ground up for 4K Ultra-HD displays with responsive scaling, featuring a zero-asset Web Audio API synthesizer, interactive canvas cyber particle field, and interactive CLI inspector.",
      image: "/portimg.png",
      tech: ["React 19", "Vite", "Web Audio API", "HTML5 Canvas", "CSS Glassmorphism"],
      demo: "https://meet-portfolioo.netlify.app/",
      github: "https://github.com/meet-Codee/Meet-portfolio",
      stats: "4K Ready • Zero-Asset Web Audio Synth"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Cpu size={16} />
          <span>PRODUCTION & HACKATHON REPERTOIRE</span>
        </div>

        <h2 className="section-title">Verified Engineering Projects</h2>
        <p className="section-subtitle">
          Real hackathon builds, production AI voice systems, and defense intelligence prototypes. 
          Every link is live, tested, and verifiable.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div 
            key={p.id} 
            className="project-card"
            onMouseEnter={() => sound.hover()}
          >
            <div className="card-top">
              <span className={`project-badge badge-${p.badgeType}`}>
                <Award size={13} />
                <span>{p.badge}</span>
              </span>
              <span className="project-stats">{p.stats}</span>
            </div>

            <div className="card-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
            </div>

            <div className="card-tech">
              {p.tech.map((t, idx) => (
                <span key={idx} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn cyber-btn-primary card-btn"
                onClick={() => sound.click()}
              >
                <ExternalLink size={15} />
                <span>Live Experience</span>
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn cyber-btn-secondary card-btn"
                onClick={() => sound.click()}
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
