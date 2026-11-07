import { useState } from "react";
import { sound } from "../../utils/audio";
import { 
  Gamepad2, 
  Play, 
  ExternalLink, 
  Trophy, 
  Users, 
  Shield, 
  Zap, 
  Eye, 
  Flame, 
  Crosshair,
  Layers
} from "lucide-react";
import { Github } from "../common/Icons";
import "./NeonShadow.css";

function NeonShadow() {
  const [activeTab, setActiveTab] = useState("overview"); // overview | team | chapters | mechanics
  const [activeScreen, setActiveScreen] = useState(0);

  const screenshots = [
    {
      src: "/projects/neon-shadow-gameplay.png",
      title: "Real-Time Stealth Combat",
      caption: "Infiltration with dynamic guard vision cones, noise detection rings, and stealth takedowns."
    },
    {
      src: "/projects/neon-shadow-menu.png",
      title: "Neo-Kyoto 2189 Terminal Menu",
      caption: "Cyberpunk HUD interface with full audio, rebindable controls, and mission briefing."
    },
    {
      src: "/projects/neon-shadow-characters.png",
      title: "4 Operative Selection",
      caption: "Shadow Ninja, Cyber Ronin, Ghost Infiltrator, and Tech Saboteur with distinct stat profiles."
    },
    {
      src: "/projects/neon-shadow-inventory.png",
      title: "Arsenal & 17 Gadgets",
      caption: "Custom loadouts featuring Blink Teleport (Q), Plasma Hex Shield (Z), Smoke Bombs, and Kunai."
    },
    {
      src: "/projects/neon-shadow-levels.png",
      title: "8-Chapter Story Campaign",
      caption: "Level progression across rooftop spires, neon alleyways, and the Overlord's Citadel."
    }
  ];

  const chapters = [
    { num: "01", name: "Rooftop Infiltration", type: "Stealth Entry", desc: "Scale the cyber-spires of Neo-Kyoto and bypass Cadet patrols." },
    { num: "02", name: "Neon Alleyways", type: "Urban Pursuit", desc: "Navigate laser tripwires and shuriken-wielding Sentries in the dark." },
    { num: "03", name: "Data Vault Breach", type: "Hacking Sprint", desc: "Crack the firewall terminal while holding off reinforcements." },
    { num: "04", name: "Industrial Depths", type: "Close Quarters", desc: "Climb through steam vents and avoid heavy Enforcer squads." },
    { num: "05", name: "The High Spire", type: "Vertical Assault", desc: "Utilize Blink (Q) and wall-climbing to scale corporate towers." },
    { num: "06", name: "Frozen Pursuit", type: "Special Chapter", desc: "The Overlord drops from orbit; first skirmish before he teleports." },
    { num: "07", name: "Shadow Syndicate HQ", type: "Infiltration", desc: "Bypass maximum security lasers and automated defense turrets." },
    { num: "08", name: "Overlord's Citadel", type: "Final Boss Fight", desc: "Three-phase epic battle against the 500 HP cybernetic Overlord." },
  ];

  const team = [
    {
      name: "Meet Amit Dharaiya (Me)",
      role: "Prototyping, Pitch & Demo Setup",
      contribution: "Built one of the candidate games for evaluation, co-presented at the final judging round, handled technical Q&A, and configured live demo infrastructure.",
      isSelf: true
    },
    {
      name: "R Tanushree",
      role: "Team Lead, Game Design & Direction",
      contribution: "Originated the sci-fi ninja concept, specified feature roadmaps for each release (v1 to v3.2), directed AI-assisted mechanics, conducted playtesting, and orchestrated final demo.",
      isSelf: false
    },
    {
      name: "Anjali",
      role: "Play-Testing & Balance Feedback",
      contribution: "Extensively playtested game builds, uncovered collision & detection glitches, and tuned guard difficulty curves and stealth timing.",
      isSelf: false
    },
    {
      name: "Om Rathod",
      role: "Game Documentation",
      contribution: "Penned the comprehensive game submission dossier, lore bible, mechanics breakdown, and hackathon presentation documentation.",
      isSelf: false
    }
  ];

  const handleTabChange = (tab) => {
    sound.click();
    setActiveTab(tab);
  };

  const handleScreenChange = (idx) => {
    sound.hover();
    setActiveScreen(idx);
  };

  return (
    <section id="neon-shadow" className="neon-shadow-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Gamepad2 size={16} />
          <span>FLAGSHIP CASE STUDY • SCI-FI HACKATHON WINNER</span>
        </div>

        <div className="title-row">
          <h2 className="section-title">
            NEON SHADOW <span className="title-glow">2189</span>
          </h2>

          <div className="award-badge-pill" onMouseEnter={() => sound.hover()}>
            <Trophy size={16} className="text-gold" />
            <span>3rd Place Winner • RESPAWN Hackathon (PRAVRUTTI 2.0)</span>
          </div>
        </div>

        <p className="section-subtitle">
          A high-octane 2D stealth-action ninja browser game inspired by <em>Mark of the Ninja</em>. 
          Developed by <strong>Team Respawn Rebels</strong> (four first-time game developers) 
          featuring an 8-chapter story, dynamic AI vision cones, and fluid cyber mechanics.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="neon-stage-card">
        {/* Navigation Tabs */}
        <div className="stage-tabs" role="tablist">
          <button 
            className={`stage-tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => handleTabChange("overview")}
          >
            <Layers size={16} />
            <span>Mission Intel & Screenshots</span>
          </button>

          <button 
            className={`stage-tab ${activeTab === "mechanics" ? "active" : ""}`}
            onClick={() => handleTabChange("mechanics")}
          >
            <Zap size={16} />
            <span>Cyber Mechanics</span>
          </button>

          <button 
            className={`stage-tab ${activeTab === "chapters" ? "active" : ""}`}
            onClick={() => handleTabChange("chapters")}
          >
            <Crosshair size={16} />
            <span>8-Chapter Campaign</span>
          </button>

          <button 
            className={`stage-tab ${activeTab === "team" ? "active" : ""}`}
            onClick={() => handleTabChange("team")}
          >
            <Users size={16} />
            <span>Team Respawn Rebels</span>
          </button>
        </div>

        {/* Tab Content: OVERVIEW / SCREENSHOT GALLERY */}
        {activeTab === "overview" && (
          <div className="tab-pane-overview">
            <div className="gallery-layout">
              {/* Main Showcase Image */}
              <div className="gallery-main">
                <div className="crt-screen">
                  <div className="crt-scanlines"></div>
                  <img 
                    src={screenshots[activeScreen].src} 
                    alt={screenshots[activeScreen].title}
                    className="gallery-img"
                  />
                  <div className="crt-overlay-hud">
                    <span className="crt-rec">● LIVE PREVIEW</span>
                    <span className="crt-cam">CAM_0{activeScreen + 1} // NEO-KYOTO</span>
                  </div>
                </div>

                <div className="screen-caption-bar">
                  <div>
                    <h4 className="screen-caption-title">{screenshots[activeScreen].title}</h4>
                    <p className="screen-caption-text">{screenshots[activeScreen].caption}</p>
                  </div>

                  <a 
                    href="https://respawn-rebels26.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-primary"
                    onClick={() => sound.click()}
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Play Neon Shadow</span>
                  </a>
                </div>
              </div>

              {/* Thumbnails Rail */}
              <div className="thumbnails-rail">
                <span className="rail-label">TACTICAL FEEDS ({screenshots.length})</span>
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${activeScreen === idx ? "active" : ""}`}
                    onClick={() => handleScreenChange(idx)}
                  >
                    <img src={s.src} alt={s.title} className="thumb-img" />
                    <div className="thumb-info">
                      <span className="thumb-title">{s.title}</span>
                      <span className="thumb-idx">FEED 0{idx + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="flagship-action-banner">
              <div className="banner-left">
                <span className="banner-tag">INSTANT ACCESS</span>
                <h4 className="banner-heading">Ready to enter Neo-Kyoto 2189?</h4>
                <p className="banner-desc">Playable directly in modern desktop and mobile browsers. No installation required.</p>
              </div>
              <div className="banner-actions">
                <a
                  href="https://respawn-rebels26.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-primary"
                  onClick={() => sound.click()}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Launch Live Game</span>
                </a>
                <a
                  href="https://github.com/meet-Codee/Rebel-Respawn26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-secondary"
                  onClick={() => sound.click()}
                >
                  <Github size={16} />
                  <span>Inspect Source</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: CYBER MECHANICS */}
        {activeTab === "mechanics" && (
          <div className="tab-pane-mechanics">
            <div className="mechanics-grid">
              <div className="mechanic-card">
                <div className="mech-icon-wrap cyan">
                  <Zap size={24} />
                </div>
                <h4 className="mech-title">Blink Phase-Teleport [Q]</h4>
                <p className="mech-desc">
                  Instant 230px phase dash through guards, lasers, and smoke with invulnerability frames. Hold Up/Down to blink vertically between platforms.
                </p>
                <span className="mech-cooldown">Cooldown: 3.2s • Tactical Mobility</span>
              </div>

              <div className="mechanic-card">
                <div className="mech-icon-wrap violet">
                  <Shield size={24} />
                </div>
                <h4 className="mech-title">Plasma Hex Shield [Z]</h4>
                <p className="mech-desc">
                  Deploys a hexagonal energy barrier absorbing 60 damage for 4 seconds, deflecting shurikens, bullets, and kunai back at hostile attackers.
                </p>
                <span className="mech-cooldown">Cooldown: 12.0s • Deflection Matrix</span>
              </div>

              <div className="mechanic-card">
                <div className="mech-icon-wrap magenta">
                  <Eye size={24} />
                </div>
                <h4 className="mech-title">Vision Cones & Noise Rings</h4>
                <p className="mech-desc">
                  Enemies project dynamic flashlight vision cones. Footsteps and sword swings emit visible acoustic rings that alert nearby guards.
                </p>
                <span className="mech-cooldown">Stealth Engine • AI Perception</span>
              </div>

              <div className="mechanic-card">
                <div className="mech-icon-wrap gold">
                  <Flame size={24} />
                </div>
                <h4 className="mech-title">Overlord Cyborg Boss</h4>
                <p className="mech-desc">
                  Three-phase climactic encounter with 500 HP, laser sweeps, teleport counter-attacks, and orbital drop-in combat in chapters 6 & 8.
                </p>
                <span className="mech-cooldown">500 HP • Multi-Phase Mechanics</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: 8-CHAPTER CAMPAIGN */}
        {activeTab === "chapters" && (
          <div className="tab-pane-chapters">
            <div className="chapters-grid">
              {chapters.map((ch) => (
                <div key={ch.num} className="chapter-card" onMouseEnter={() => sound.hover()}>
                  <div className="ch-num">{ch.num}</div>
                  <div className="ch-info">
                    <span className="ch-type">{ch.type}</span>
                    <h4 className="ch-name">{ch.name}</h4>
                    <p className="ch-desc">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: TEAM RESPAWN REBELS & MEET'S ROLE */}
        {activeTab === "team" && (
          <div className="tab-pane-team">
            <div className="team-intro-banner">
              <span className="team-badge">TEAM RESPAWN REBELS</span>
              <h3 className="team-intro-heading">Four First-Time Game Developers • RESPAWN Hackathon</h3>
              <p className="team-intro-text">
                Formed specifically for the sci-fi themed RESPAWN gaming hackathon at Ramaiah University of Applied Sciences.
                Together we achieved <strong>3rd Place</strong> competing against veteran teams.
              </p>
            </div>

            <div className="team-members-grid">
              {team.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`team-card ${m.isSelf ? "highlight-self" : ""}`}
                  onMouseEnter={() => sound.hover()}
                >
                  <div className="team-card-header">
                    <div className="team-avatar-icon">
                      {m.isSelf ? <Zap size={20} className="text-cyan" /> : <Users size={20} />}
                    </div>
                    <div>
                      <h4 className="member-name">{m.name}</h4>
                      <span className="member-role">{m.role}</span>
                    </div>
                  </div>
                  <p className="member-contrib">{m.contribution}</p>
                  {m.isSelf && (
                    <div className="self-tag">
                      <span>VERIFIED PERSONAL CONTRIBUTION</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NeonShadow;
