import { useState, useEffect, useRef } from "react";
import { sound } from "../../utils/audio";
import {
  Gamepad2,
  Play,
  Trophy,
  Users,
  Shield,
  Zap,
  Eye,
  Flame,
  Crosshair,
  Layers,
  Sparkles,
  Swords,
} from "lucide-react";
import { Github } from "../common/Icons";
import "./NeonShadow.css";

const SCREENSHOTS = [
  {
    src: "/projects/neon-shadow-gameplay.png",
    title: "Real-Time Stealth Combat",
    caption: "Hide in shadow, read guard vision cones & acoustic noise rings, and strike from darkness.",
  },
  {
    src: "/projects/neon-shadow-menu.png",
    title: "Neo-Kyoto 2189 Terminal HUD",
    caption: "Sci-fi main menu with full audio controls, key rebinding, and Shadow Archive lore.",
  },
  {
    src: "/projects/neon-shadow-characters.png",
    title: "4 Playable Cyber Ninjas",
    caption: "Character selection & outfit customization across four unique stealth operatives.",
  },
  {
    src: "/projects/neon-shadow-inventory.png",
    title: "17 Weapons & Ninja Store",
    caption: "Loadout inventory featuring Katana, Shuriken, Kunai, Smoke Bombs, Blink, and Plasma Shield.",
  },
  {
    src: "/projects/neon-shadow-levels.png",
    title: "8-Chapter Story Campaign",
    caption: "Progressive difficulty scaling across 8 chapters culminating in the 3-phase Overlord boss.",
  },
];

const CHAPTERS = [
  { num: "01", name: "Rooftop Infiltration", tag: "Stealth Entry", desc: "Scale rain-slicked Neo-Kyoto spires and slip past Cadet patrols.", angle: 0 },
  { num: "02", name: "Neon Alleyways", tag: "Urban Shadow", desc: "Evade red Sentry sightlines and laser tripwires in the lower district.", angle: 45 },
  { num: "03", name: "Data Vault Breach", tag: "Hacking Sprint", desc: "Crack corporate terminals while suppressing security alarms.", angle: 90 },
  { num: "04", name: "Industrial Depths", tag: "Close Quarters", desc: "Navigate vertical shafts and armored Enforcer squads.", angle: 135 },
  { num: "05", name: "The High Spire", tag: "Vertical Climb", desc: "Chain Blink teleports and grapple points up the syndicate tower.", angle: 180 },
  { num: "06", name: "Frozen Pursuit", tag: "Special Chapter", desc: "The Overlord drops from orbit for a high-stakes mid-campaign clash.", angle: 225 },
  { num: "07", name: "Syndicate Core", tag: "Maximum Security", desc: "Phase-dash past Enforcers and automated defense grids.", angle: 270 },
  { num: "08", name: "Overlord's Citadel", tag: "Final Boss", desc: "Three-phase 500 HP showdown against the cybernetic Overlord.", angle: 315 },
];

const TEAM = [
  {
    name: "Meet Amit Dharaiya",
    badge: "PROTOTYPING, PITCH & DEMO",
    role: "Candidate Game Prototype, Final Pitch, Q&A & Demo Setup",
    contribution:
      "Built one of the candidate games during prototyping, then helped present at the final judging round, supported the live Q&A, and set up the playable demo.",
    isSelf: true,
    color: "#00d4ff",
  },
  {
    name: "R Tanushree",
    badge: "TEAM LEAD & DIRECTION",
    role: "Team Lead, Game Design & Direction",
    contribution:
      "Chose the concept, wrote feature requirements for every version, directed AI-assisted development, play-tested builds, and planned the final live demo and Q&A.",
    isSelf: false,
    color: "#ff007f",
  },
  {
    name: "Anjali",
    badge: "QA & BALANCE",
    role: "Play-Testing & Feedback",
    contribution:
      "Tested builds and reported bugs and balance issues that shaped the difficulty curve and polish passes.",
    isSelf: false,
    color: "#a855f7",
  },
  {
    name: "Om Rathod",
    badge: "DOCUMENTATION",
    role: "Game Documentation",
    contribution:
      "Wrote the comprehensive game documentation for the hackathon’s October 15 submission.",
    isSelf: false,
    color: "#ffb800",
  },
];

function NeonShadow() {
  const [stageMode, setStageMode] = useState("sim"); // sim | gallery
  const [activeScreen, setActiveScreen] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(CHAPTERS[0]);
  const [simStatus, setSimStatus] = useState("STEALTH READY — TRIGGER AN ABILITY BELOW");
  const canvasRef = useRef(null);
  const simStateRef = useRef({
    ninjaX: 150,
    ninjaY: 220,
    targetX: 150,
    shieldTimer: 0,
    slashTimer: 0,
    blinkTrail: [],
    sparks: [],
    shurikens: [],
  });

  // Interactive Neo-Kyoto 2189 Ninja Dojo Canvas Simulation
  useEffect(() => {
    if (stageMode !== "sim") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const W = (canvas.width = 760);
    const H = (canvas.height = 400);

    const rain = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      len: Math.random() * 16 + 8,
      speed: Math.random() * 5 + 6,
    }));

    let tick = 0;

    const draw = () => {
      tick += 1;
      const st = simStateRef.current;

      // Sky gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#050414");
      bg.addColorStop(0.6, "#100b2e");
      bg.addColorStop(1, "#180d38");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Cyber Moon / Orbital Ring in Neo-Kyoto Sky
      ctx.save();
      ctx.translate(610, 95);
      ctx.beginPath();
      ctx.arc(0, 0, 46, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 0, 127, 0.22)";
      ctx.shadowColor = "#ff007f";
      ctx.shadowBlur = 30;
      ctx.fill();

      ctx.rotate(tick * 0.01);
      ctx.beginPath();
      ctx.ellipse(0, 0, 74, 22, -0.35, 0, Math.PI * 2);
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Distant Neo-Kyoto Skyline Silhouettes
      const buildings = [
        [20, 150, 75, 250, "#09071c"],
        [105, 110, 90, 290, "#0b0922"],
        [210, 165, 80, 235, "#08061a"],
        [310, 95, 110, 305, "#0c0a26"],
        [440, 140, 85, 260, "#09081e"],
        [545, 175, 95, 225, "#0b0922"],
        [655, 125, 85, 275, "#08071a"],
      ];
      buildings.forEach(([bx, by, bw, bh, col], i) => {
        ctx.fillStyle = col;
        ctx.fillRect(bx, by, bw, bh);
        ctx.strokeStyle = i % 2 === 0 ? "rgba(0, 212, 255, 0.28)" : "rgba(255, 0, 127, 0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(bx, by, bw, bh);
      });

      // Rooftop Platform
      ctx.fillStyle = "#070614";
      ctx.fillRect(0, 310, W, 90);
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 310);
      ctx.lineTo(W, 310);
      ctx.stroke();

      // Guard Enemy + Sweeping Vision Cone on Right
      const guardX = 590;
      const guardY = 278;
      const coneSwipe = Math.sin(tick * 0.025) * 0.22;

      ctx.save();
      ctx.translate(guardX, guardY);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-240, -55 + coneSwipe * 120);
      ctx.lineTo(-240, 45 + coneSwipe * 120);
      ctx.closePath();
      const coneGrad = ctx.createLinearGradient(0, 0, -240, 0);
      coneGrad.addColorStop(0, "rgba(255, 51, 102, 0.42)");
      coneGrad.addColorStop(1, "rgba(255, 51, 102, 0.0)");
      ctx.fillStyle = coneGrad;
      ctx.fill();

      // Sentry Guard Body
      ctx.fillStyle = "#ff3366";
      ctx.shadowColor = "#ff3366";
      ctx.shadowBlur = 12;
      ctx.fillRect(-10, -18, 20, 50);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(-8, -12, 8, 4);
      ctx.restore();

      // Periodically fire a shuriken from Guard
      if (tick % 95 === 0) {
        st.shurikens.push({ x: guardX - 18, y: guardY - 4, vx: -5.2, vy: 0, reflected: false });
      }

      // Smooth Ninja position interpolation
      st.ninjaX += (st.targetX - st.ninjaX) * 0.22;
      const ninjaY = 276;

      // Draw Blink Teleport Afterimages
      for (let i = st.blinkTrail.length - 1; i >= 0; i--) {
        const tr = st.blinkTrail[i];
        tr.alpha -= 0.04;
        if (tr.alpha <= 0) {
          st.blinkTrail.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = tr.alpha;
        ctx.fillStyle = "#00d4ff";
        ctx.shadowColor = "#00d4ff";
        ctx.shadowBlur = 18;
        ctx.fillRect(tr.x - 11, ninjaY - 22, 22, 54);
        ctx.restore();
      }

      // Draw Cyber Ninja (Player)
      ctx.save();
      ctx.translate(st.ninjaX, ninjaY);

      // Flowing Neon Scarf
      ctx.beginPath();
      ctx.moveTo(-6, -14);
      ctx.quadraticCurveTo(
        -28,
        -22 + Math.sin(tick * 0.15) * 8,
        -48,
        -10 + Math.cos(tick * 0.15) * 6
      );
      ctx.strokeStyle = "#ff007f";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#ff007f";
      ctx.shadowBlur = 12;
      ctx.stroke();

      // Ninja Silhouette & Cyan Visor
      ctx.fillStyle = "#0e1329";
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 2;
      ctx.fillRect(-12, -22, 24, 54);
      ctx.strokeRect(-12, -22, 24, 54);

      ctx.fillStyle = "#00d4ff";
      ctx.shadowColor = "#00d4ff";
      ctx.shadowBlur = 10;
      ctx.fillRect(0, -15, 10, 4);

      // Katana Slash Arc
      if (st.slashTimer > 0) {
        st.slashTimer -= 1;
        ctx.beginPath();
        ctx.arc(10, 0, 52, -Math.PI * 0.65, Math.PI * 0.55);
        ctx.strokeStyle = "#00d4ff";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#ff007f";
        ctx.shadowBlur = 24;
        ctx.stroke();

        // Acoustic Noise Ring
        ctx.beginPath();
        ctx.arc(0, 0, (20 - st.slashTimer) * 6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 184, 0, ${st.slashTimer / 20})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Plasma Hex Shield [Z]
      if (st.shieldTimer > 0) {
        st.shieldTimer -= 1;
        ctx.save();
        ctx.rotate(tick * 0.04);
        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const a = (Math.PI / 3) * s;
          const hx = Math.cos(a) * 44;
          const hy = Math.sin(a) * 44;
          if (s === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = "#a855f7";
        ctx.fillStyle = "rgba(168, 85, 247, 0.16)";
        ctx.lineWidth = 2.5;
        ctx.shadowColor = "#00d4ff";
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      // Update & Draw Shurikens
      for (let i = st.shurikens.length - 1; i >= 0; i--) {
        const sh = st.shurikens[i];
        sh.x += sh.vx;
        if (
          !sh.reflected &&
          st.shieldTimer > 0 &&
          Math.abs(sh.x - st.ninjaX) < 46
        ) {
          sh.vx = Math.abs(sh.vx) * 1.4;
          sh.reflected = true;
          for (let k = 0; k < 10; k++) {
            st.sparks.push({
              x: sh.x,
              y: sh.y,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              alpha: 1,
              color: "#00d4ff",
            });
          }
        } else if (!sh.reflected && Math.abs(sh.x - st.ninjaX) < 16) {
          st.shurikens.splice(i, 1);
          continue;
        }
        if (sh.x < 0 || sh.x > W) {
          st.shurikens.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(sh.x, sh.y);
        ctx.rotate(tick * 0.35);
        ctx.strokeStyle = sh.reflected ? "#00d4ff" : "#ffb800";
        ctx.lineWidth = 2;
        ctx.strokeRect(-5, -5, 10, 10);
        ctx.restore();
      }

      // Update & Draw Particle Sparks
      for (let i = st.sparks.length - 1; i >= 0; i--) {
        const sp = st.sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.alpha -= 0.04;
        if (sp.alpha <= 0) {
          st.sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.fillRect(sp.x, sp.y, 3, 3);
        ctx.globalAlpha = 1;
      }

      // Neon Rain
      ctx.strokeStyle = "rgba(0, 212, 255, 0.25)";
      ctx.lineWidth = 1;
      rain.forEach((r) => {
        r.y += r.speed;
        r.x -= 1;
        if (r.y > H) {
          r.y = -10;
          r.x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - 2, r.y + r.len);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [stageMode]);

  const triggerBlink = () => {
    sound.fanfare();
    const st = simStateRef.current;
    const oldX = st.ninjaX;
    const nextX = st.targetX > 300 ? 140 : 410;
    for (let s = 0; s <= 5; s++) {
      st.blinkTrail.push({
        x: oldX + ((nextX - oldX) * s) / 5,
        alpha: 0.75 - s * 0.1,
      });
    }
    st.targetX = nextX;
    setSimStatus("✧ BLINK TELEPORT [Q] EXECUTED — 230PX PHASE DASH!");
  };

  const triggerShield = () => {
    sound.click();
    simStateRef.current.shieldTimer = 140;
    setSimStatus("⛨ PLASMA HEX SHIELD [Z] ACTIVE — DEFLECTING PROJECTILES!");
  };

  const triggerSlash = () => {
    sound.terminalBeep();
    const st = simStateRef.current;
    st.slashTimer = 20;
    for (let k = 0; k < 16; k++) {
      st.sparks.push({
        x: st.ninjaX + 20,
        y: 270,
        vx: (Math.random() - 0.2) * 8,
        vy: (Math.random() - 0.5) * 8,
        alpha: 1,
        color: k % 2 === 0 ? "#00d4ff" : "#ff007f",
      });
    }
    setSimStatus("⚔ KATANA NEON SLASH [SPACE] — ACOUSTIC RING EMITTED!");
  };

  return (
    <section id="neon-shadow" className="neon-shadow-section reveal-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Gamepad2 size={16} />
          <span>FLAGSHIP PROJECT • TEAM RESPAWN REBELS • SCI-FI HACKATHON</span>
        </div>

        <div className="title-row">
          <h2 className="section-title">
            NEON SHADOW <span className="gradient-text">2189</span>
          </h2>

          <div className="award-badge-pill" onMouseEnter={() => sound.hover()}>
            <Trophy size={16} />
            <span>3rd Place Winner • RESPAWN at PRAVRUTTI 2.0 (MSRUAS)</span>
          </div>
        </div>

        <p className="section-subtitle">
          A 2D sci-fi ninja stealth-action browser game set across eight story chapters in{" "}
          <strong>Neo-Kyoto 2189</strong>. Built by <strong>Team Respawn Rebels</strong> (four first-time game developers) with character selection & customization, 17 weapons, guard vision cones, and full keyboard/mouse/touch support.
        </p>
      </div>

      {/* Prominent Spotlight on Meet Amit Dharaiya's Role */}
      <div className="meet-flagship-spotlight holo-card">
        <div className="spotlight-orbit-emblem" aria-hidden="true">
          <div className="spot-ring ring-1"></div>
          <div className="spot-ring ring-2"></div>
          <Sparkles size={22} className="spot-icon" />
        </div>

        <div className="spotlight-body">
          <span className="spotlight-eyebrow">MEET AMIT DHARAIYA’S PERSONAL CONTRIBUTION</span>
          <h3 className="spotlight-heading">
            Candidate Game Prototyping, Final-Round Pitch, Q&A & Live Demo Setup
          </h3>
          <p className="spotlight-text">
            Neon Shadow was built as a collaborative team project by <strong>Team Respawn Rebels</strong>. For my part, I <strong>built one of the candidate games</strong> during the prototyping phase, then helped <strong>present at the final judging round</strong>, <strong>supported the live Q&A</strong>, and <strong>set up the live playable demo</strong> at RESPAWN (PRAVRUTTI 2.0).
          </p>
        </div>

        <div className="spotlight-ctas">
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
          <a
            href="https://github.com/meet-Codee/Rebel-Respawn26"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn cyber-btn-secondary"
            onClick={() => sound.click()}
          >
            <Github size={16} />
            <span>Game Repo</span>
          </a>
        </div>
      </div>

      {/* Dual Stage: Left Interactive Arena/Gallery + Right 3D Orbital Chapter Wheel */}
      <div className="neon-dual-grid">
        {/* Left Column: Interactive Ninja Stealth Simulator & Verified Screenshot Feeds */}
        <div className="neon-stage-card holo-card">
          <div className="stage-mode-bar">
            <div className="mode-pills">
              <button
                type="button"
                className={`mode-pill ${stageMode === "sim" ? "active" : ""}`}
                onClick={() => {
                  sound.click();
                  setStageMode("sim");
                }}
              >
                <Zap size={15} />
                <span>Interactive Stealth Dojo</span>
              </button>
              <button
                type="button"
                className={`mode-pill ${stageMode === "gallery" ? "active" : ""}`}
                onClick={() => {
                  sound.click();
                  setStageMode("gallery");
                }}
              >
                <Layers size={15} />
                <span>5 Verified Game Captures</span>
              </button>
            </div>
            <span className="stage-live-tag">● NEO-KYOTO 2189 // 60 FPS</span>
          </div>

          {stageMode === "sim" ? (
            <div className="sim-container">
              <div className="crt-screen">
                <canvas ref={canvasRef} className="ninja-sim-canvas" />
                <div className="crt-overlay-hud">
                  <span className="crt-rec">● INTERACTIVE TELEMETRY</span>
                  <span className="crt-cam">{simStatus}</span>
                </div>
              </div>

              <div className="sim-ability-dock">
                <button type="button" className="ability-btn btn-cyan" onClick={triggerBlink}>
                  <Zap size={16} />
                  <div>
                    <strong>[Q] Blink Teleport</strong>
                    <span>230px Phase Dash</span>
                  </div>
                </button>

                <button type="button" className="ability-btn btn-violet" onClick={triggerShield}>
                  <Shield size={16} />
                  <div>
                    <strong>[Z] Plasma Hex Shield</strong>
                    <span>Deflects Shurikens</span>
                  </div>
                </button>

                <button type="button" className="ability-btn btn-magenta" onClick={triggerSlash}>
                  <Swords size={16} />
                  <div>
                    <strong>[SPACE] Katana Slash</strong>
                    <span>Neon Blade Arc</span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="gallery-container">
              <div className="crt-screen">
                <img
                  src={SCREENSHOTS[activeScreen].src}
                  alt={SCREENSHOTS[activeScreen].title}
                  className="gallery-img"
                />
                <div className="crt-overlay-hud">
                  <span className="crt-rec">● VERIFIED GAME CAPTURE</span>
                  <span className="crt-cam">
                    FEED 0{activeScreen + 1} // {SCREENSHOTS[activeScreen].title}
                  </span>
                </div>
              </div>

              <p className="gallery-caption">{SCREENSHOTS[activeScreen].caption}</p>

              <div className="gallery-thumbs-row">
                {SCREENSHOTS.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`mini-thumb ${activeScreen === idx ? "active" : ""}`}
                    onClick={() => {
                      sound.hover();
                      setActiveScreen(idx);
                    }}
                  >
                    <img src={s.src} alt={s.title} />
                    <span>0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: 3D Orbital 8-Chapter Command Wheel */}
        <div className="neon-orbital-wheel-card holo-card">
          <div className="wheel-header">
            <span className="wheel-eyebrow">ORBITAL CAMPAIGN ARCHIVE</span>
            <h3 className="wheel-title">8 Chapters in Neo-Kyoto 2189</h3>
            <p className="wheel-sub">Select any orbiting chapter node to inspect the mission briefing.</p>
          </div>

          <div className="chapter-orbit-wheel">
            <div className="wheel-ring outer-ring" aria-hidden="true"></div>
            <div className="wheel-ring inner-ring" aria-hidden="true"></div>

            {/* Center Mission Readout Core */}
            <div className="wheel-center-core">
              <span className="core-ch-num">CH.{selectedChapter.num}</span>
              <span className="core-ch-name">{selectedChapter.name}</span>
              <span className="core-ch-tag">{selectedChapter.tag}</span>
            </div>

            {/* 8 Orbiting Chapter Nodes */}
            {CHAPTERS.map((ch) => {
              const rad = (ch.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * 41;
              const y = 50 + Math.sin(rad) * 41;
              return (
                <button
                  key={ch.num}
                  type="button"
                  className={`chapter-orbit-node ${selectedChapter.num === ch.num ? "active" : ""}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => {
                    sound.click();
                    setSelectedChapter(ch);
                  }}
                  onMouseEnter={() => sound.hover()}
                >
                  <span className="node-num">{ch.num}</span>
                </button>
              );
            })}
          </div>

          <div className="wheel-briefing-box">
            <div className="brief-top">
              <span className="brief-chapter">CHAPTER {selectedChapter.num} BRIEFING</span>
              <span className="brief-tag">{selectedChapter.tag}</span>
            </div>
            <h4 className="brief-title">{selectedChapter.name}</h4>
            <p className="brief-desc">{selectedChapter.desc}</p>
          </div>
        </div>
      </div>

      {/* Verified Feature Strip */}
      <div className="neon-features-strip">
        {[
          "Character Selection & Customization",
          "8 Story Chapters (Neo-Kyoto 2189)",
          "17 Weapons & Ninja Store",
          "Achievements & Settings HUD",
          "Keyboard, Mouse & Touch Controls",
          "Fullscreen & Landscape Prompt",
        ].map((feat) => (
          <div key={feat} className="feature-orb-pill">
            <span className="pill-spark"></span>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Team Respawn Rebels Full Credits Grid */}
      <div className="respawn-team-block">
        <div className="team-block-header">
          <div>
            <span className="wheel-eyebrow">TEAM RESPAWN REBELS • FOUR FIRST-TIME GAME DEVELOPERS</span>
            <h3 className="team-block-title">The Team Behind Neon Shadow</h3>
          </div>
          <span className="team-event-pill">RESPAWN Gaming Hackathon • Sci-Fi Theme</span>
        </div>

        <div className="team-members-grid">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className={`team-card holo-card ${m.isSelf ? "highlight-self" : ""}`}
              style={{ "--member-color": m.color }}
              onMouseEnter={() => sound.hover()}
            >
              <div className="member-orbit-badge">
                <span>{m.badge}</span>
              </div>
              <h4 className="member-name">
                {m.name} {m.isSelf && <span className="me-pill">ME</span>}
              </h4>
              <p className="member-role">{m.role}</p>
              <p className="member-contrib">{m.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NeonShadow;
