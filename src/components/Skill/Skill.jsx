import { sound } from "../../utils/audio";
import { Terminal, Code2, Server, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import "./Skill.css";

function Skill() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend & Creative UI",
      icon: <Code2 size={22} className="text-cyan" />,
      description: "Interactive browser engines, canvas mechanics, and responsive 4K interfaces.",
      skills: [
        { name: "React 19", highlight: "Component Architecture & Hooks" },
        { name: "JavaScript (ES2024)", highlight: "Asynchronous Pipelines & DOM" },
        { name: "HTML5 Canvas 2D", highlight: "Stealth Cones, Particle Engines" },
        { name: "WebGL & Audio API", highlight: "Visual Shaders & Real-time Synth" },
        { name: "CSS3 & Glassmorphism", highlight: "Grid, Flexbox, Keyframes" },
        { name: "Responsive 4K Design", highlight: "Fluid Clamps & High-DPI Scaling" }
      ]
    },
    {
      id: "backend",
      title: "Backend & AI Architecture",
      icon: <Server size={22} className="text-violet" />,
      description: "Voice streaming protocols, LLM orchestration, and telemetry prototyping.",
      skills: [
        { name: "Node.js (Zero-Dep)", highlight: "Native Fetch, Buffers & Endpoints" },
        { name: "Google Gemini API", highlight: "Multi-modal Reasoning & Prompts" },
        { name: "Sarvam AI Voice", highlight: "Indian Language TTS/STT Models" },
        { name: "Python", highlight: "Telemetry & Defense Automation" },
        { name: "RESTful Architecture", highlight: "Stateless Micro-Services" }
      ]
    },
    {
      id: "tooling",
      title: "Tooling & Cloud Deployment",
      icon: <Wrench size={22} className="text-gold" />,
      description: "Modern build tooling, version control, and production hosting pipelines.",
      skills: [
        { name: "Git & GitHub", highlight: "Branching, PRs & Collaboration" },
        { name: "Vite", highlight: "Sub-second HMR & Production Builds" },
        { name: "Netlify & Vercel", highlight: "Edge Functions & CI/CD Deploys" },
        { name: "Figma", highlight: "UI Wireframing & Asset Prep" },
        { name: "VS Code & Terminals", highlight: "Automated Scripts & Debugging" }
      ]
    },
    {
      id: "strengths",
      title: "Hackathon & Core Strengths",
      icon: <Sparkles size={22} className="text-magenta" />,
      description: "Proven execution in rapid prototyping and competitive technical demos.",
      skills: [
        { name: "Game Prototyping", highlight: "Stealth, Collision & Controls" },
        { name: "Hackathon Sprints", highlight: "1st Place Jarvis, 3rd RESPAWN" },
        { name: "Technical Pitching", highlight: "Live Demos & Stage Q&A" },
        { name: "Collaborative Agile", highlight: "Cross-Functional Team Delivery" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Terminal size={16} />
          <span>TECHNICAL ARSENAL & PROFICIENCIES</span>
        </div>

        <h2 className="section-title">Developer Skill Matrix</h2>
        <p className="section-subtitle">
          Practical, proven capabilities applied in real games, hackathon victories, and production applications. 
          Categorized by architectural tier.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="skill-category-card"
            onMouseEnter={() => sound.hover()}
          >
            <div className="cat-header">
              <div className="cat-icon-wrap">{cat.icon}</div>
              <div>
                <h3 className="cat-title">{cat.title}</h3>
                <p className="cat-desc">{cat.description}</p>
              </div>
            </div>

            <div className="cat-skills-list">
              {cat.skills.map((s, idx) => (
                <div key={idx} className="skill-pill-item">
                  <div className="pill-dot"></div>
                  <div className="pill-text-wrap">
                    <span className="pill-name">{s.name}</span>
                    <span className="pill-detail">{s.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
