import { useState } from "react";
import { sound } from "../../utils/audio";
import { ExternalLink, Cpu, Award, Sparkles, CloudSun, CheckSquare, Plus, Trash2, Check, Radio } from "lucide-react";
import { Github } from "../common/Icons";
import "./Projects.css";

const CITIES_WEATHER = [
  { city: "Bangalore, IN", temp: 26, cond: "Clear Cyber Sky", wind: "14 km/h", humidity: "58%", aqi: "42 Good", color: "#00d4ff" },
  { city: "Neo-Kyoto 2189", temp: 18, cond: "Neon Acid Rain", wind: "29 km/h", humidity: "88%", aqi: "78 Mod", color: "#ff007f" },
  { city: "Mumbai, IN", temp: 31, cond: "Coastal Breeze", wind: "21 km/h", humidity: "74%", aqi: "64 Mod", color: "#ffb800" },
  { city: "Tokyo, JP", temp: 19, cond: "Starlight Mist", wind: "12 km/h", humidity: "61%", aqi: "31 Good", color: "#a855f7" },
];

function Projects() {
  // Interactive Weather Mini-App State
  const [cityIdx, setCityIdx] = useState(0);
  const currentCity = CITIES_WEATHER[cityIdx];

  // Interactive Todo / Orbital Task Manager State (CRUD)
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prototype candidate game for Neon Shadow", done: true },
    { id: 2, text: "Deliver final-round stage pitch at RESPAWN", done: true },
    { id: 3, text: "Win 1st Place at Jarvis 1.0 24h Hackathon", done: true },
    { id: 4, text: "Submit 4K Orbital Portfolio to FOLIOFORGE 2026", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const completedCount = tasks.filter((t) => t.done).length;
  const progressPct = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    sound.click();
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    sound.hover();
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    sound.click();
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const projects = [
    {
      id: "christina",
      title: "Christina — AI Voice Tutor",
      role: "MEET'S ROLE: Full-Stack & Voice Pipeline Builder",
      badge: "Jarvis 1.0 Hackathon • 1st Place",
      accent: "#ffb800",
      orbType: "voice",
      description:
        "A regional-language AI voice tutor for Indian school students (Classes 5–12) that guides learners through a 4-rung Socratic hint ladder using Google Gemini and Sarvam AI, paired with an audio-reactive WebGL orb.",
      tech: ["JavaScript", "Node.js", "Gemini API", "Sarvam AI", "WebGL", "Web Audio"],
      demo: "https://christina-murex.vercel.app",
      github: "https://github.com/meet-Codee/christina",
    },
    {
      id: "skyguard",
      title: "SkyGuard AI — SIH 2026 Prototype",
      role: "MEET'S ROLE: Python Prototyping & Telemetry Logic",
      badge: "Smart India Hackathon 2026",
      accent: "#00d4ff",
      orbType: "radar",
      description:
        "An airspace monitoring and threat-detection prototype engineered for Smart India Hackathon 2026. Simulates radar sweeps, tracks aerial trajectories, and flags unauthorized perimeter intrusions.",
      tech: ["Python", "Telemetry Simulation", "Radar UI", "Git & GitHub"],
      demo: "https://github.com/meet-Codee/SkyGuard_AI-Backup-",
      github: "https://github.com/meet-Codee/SkyGuard_AI-Backup-",
    },
    {
      id: "folioforge",
      title: "Meet's 4K Orbital Portfolio",
      role: "MEET'S ROLE: Creator, Designer & Developer",
      badge: "FOLIOFORGE 2026 Official Entry",
      accent: "#ff007f",
      orbType: "gyro",
      description:
        "Re-engineered from my original React & CSS portfolio into a 4K Ultra-HD multi-orbital experience featuring an interactive Neo-Kyoto stealth canvas, Web Audio synthesizer, and 3D gyroscopic visuals.",
      tech: ["React 19", "Vite", "HTML5 Canvas", "CSS3 3D Orbits", "Web Audio API"],
      demo: "https://meet-portfolioo.netlify.app/",
      github: "https://github.com/meet-Codee/Meet-portfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section reveal-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Cpu size={16} />
          <span>MEET AMIT DHARAIYA • VERIFIED PROJECTS & LIVE INTERACTIVE LABS</span>
        </div>

        <h2 className="section-title">
          Engineered By <span className="gradient-text">Meet</span> — Built To Be Explored
        </h2>
        <p className="section-subtitle">
          Every project below highlights my personal contribution, uses a distinct orbital visual signature, and connects to live verifiable deployments or interactive sandboxes.
        </p>
      </div>

      {/* Main 3D Orbital Project Cards */}
      <div className="projects-grid">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card holo-card"
            style={{ "--proj-accent": p.accent }}
            onMouseMove={handleCardMove}
            onMouseEnter={() => sound.hover()}
          >
            {/* Distinct Orbital Visualizer Header per Project */}
            <div className="project-orbital-banner">
              <div className={`proj-orb-visualizer orb-${p.orbType}`} aria-hidden="true">
                <div className="vis-ring r1"></div>
                <div className="vis-ring r2"></div>
                <div className="vis-ring r3"></div>
                <div className="vis-core"></div>
              </div>

              <div className="proj-banner-meta">
                <span className="project-badge">
                  <Award size={13} />
                  <span>{p.badge}</span>
                </span>
                <span className="project-role-tag">{p.role}</span>
              </div>
            </div>

            <div className="card-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
            </div>

            <div className="card-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-pill">
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
                <span>Live Launch</span>
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn cyber-btn-secondary card-btn"
                onClick={() => sound.click()}
              >
                <Github size={15} />
                <span>GitHub Repo</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Live Web Apps Lab: Weather App + Todo App Upgraded into Live Playable Orbits */}
      <div className="interactive-labs-header">
        <span className="wheel-eyebrow">MEET'S ORIGINAL PORTFOLIO APPS • UPGRADED INTO LIVE INTERACTIVE WIDGETS</span>
        <h3 className="labs-heading">Playable In-Browser Web Experiments (Weather Telemetry & Task Orbit)</h3>
      </div>

      <div className="interactive-labs-grid">
        {/* Live Interactive Weather App Card */}
        <div className="lab-card holo-card" onMouseMove={handleCardMove}>
          <div className="lab-top">
            <div className="lab-title-group">
              <span className="lab-tag">INTERACTIVE WEATHER DASHBOARD</span>
              <h4>Atmospheric Orbital Telemetry</h4>
            </div>
            <CloudSun size={24} style={{ color: currentCity.color }} />
          </div>

          <div className="weather-orbital-display">
            <div
              className="weather-orb-gauge"
              style={{ "--w-color": currentCity.color }}
            >
              <div className="w-orbit-ring"></div>
              <span className="w-temp">{currentCity.temp}°C</span>
              <span className="w-cond">{currentCity.cond}</span>
            </div>

            <div className="weather-details">
              <div className="w-city-name">{currentCity.city}</div>
              <div className="w-stat-row">
                <span>Wind Vector:</span>
                <strong>{currentCity.wind}</strong>
              </div>
              <div className="w-stat-row">
                <span>Humidity:</span>
                <strong>{currentCity.humidity}</strong>
              </div>
              <div className="w-stat-row">
                <span>Air Index:</span>
                <strong>{currentCity.aqi}</strong>
              </div>
            </div>
          </div>

          <div className="weather-city-selector">
            {CITIES_WEATHER.map((c, idx) => (
              <button
                key={c.city}
                type="button"
                className={`city-pill ${cityIdx === idx ? "active" : ""}`}
                onClick={() => {
                  sound.click();
                  setCityIdx(idx);
                }}
              >
                {c.city}
              </button>
            ))}
          </div>
        </div>

        {/* Live Interactive CRUD Todo Orbit Card */}
        <div className="lab-card holo-card" onMouseMove={handleCardMove}>
          <div className="lab-top">
            <div className="lab-title-group">
              <span className="lab-tag">INTERACTIVE CRUD TASK MANAGER</span>
              <h4>Meet's Mission Orbit Todo App</h4>
            </div>

            <div className="todo-orbit-counter" title={`${progressPct}% Completed`}>
              <span className="todo-pct">{progressPct}%</span>
            </div>
          </div>

          <form onSubmit={addTask} className="todo-add-form">
            <input
              type="text"
              placeholder="Add a mission task to test CRUD..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              aria-label="New task description"
            />
            <button type="submit" className="todo-add-btn" aria-label="Add task">
              <Plus size={16} />
              <span>Add</span>
            </button>
          </form>

          <ul className="todo-list">
            {tasks.map((t) => (
              <li key={t.id} className={`todo-item ${t.done ? "done" : ""}`}>
                <button
                  type="button"
                  className="todo-check"
                  onClick={() => toggleTask(t.id)}
                  aria-label={`Mark "${t.text}" as ${t.done ? "incomplete" : "complete"}`}
                >
                  {t.done && <Check size={13} />}
                </button>
                <span className="todo-text" onClick={() => toggleTask(t.id)}>
                  {t.text}
                </span>
                <button
                  type="button"
                  className="todo-del"
                  onClick={() => deleteTask(t.id)}
                  aria-label={`Delete task "${t.text}"`}
                >
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
