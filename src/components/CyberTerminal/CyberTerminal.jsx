import { useState, useEffect, useRef } from "react";
import { sound } from "../../utils/audio";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import "./CyberTerminal.css";

function CyberTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "MAD_OS [Version 2189.4K.FOLIOFORGE]" },
    { type: "system", text: "(c) 2026 Meet Amit Dharaiya. All rights reserved." },
    { type: "info", text: "Type 'help' to inspect available system commands or explore projects." },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      sound.terminalBeep();
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "user", text: `> ${input}` }];

      switch (cmd) {
        case "help":
          newHistory.push({
            type: "output",
            text: `Available Commands:
  • help       : Display this command manual
  • whoami     : Developer profile & background
  • neon       : Inspect flagship game 'Neon Shadow'
  • projects   : List live production & hackathon projects
  • awards     : Verified hackathon achievements
  • team       : Respawn Rebels team credits
  • skills     : View developer tech stack
  • contact    : Get direct contact transmission info
  • matrix     : Toggle visual cyber overload
  • clear      : Clear console buffer
  • exit       : Close this terminal`
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: `MEET AMIT DHARAIYA
Role: Full-Stack Web Developer & Game Prototyper
Base: Bangalore, Karnataka, India
Institution: Ramaiah University of Applied Sciences (MSRUAS)
Focus: Interactive 2D Mechanics, Real-Time Audio/Video Pipelines, and Zero-Bloat Web UI.`
          });
          break;

        case "neon":
          newHistory.push({
            type: "output",
            text: `[FLAGSHIP] NEON SHADOW (2026)
Status: Live & Playable (Browser 2D Canvas)
Award: 3rd Place Winner at RESPAWN (PRAVRUTTI 2.0)
Team: Respawn Rebels (Tanushree, Anjali, Om, Meet)
Features: 8 Chapters, 4 Operatives, Blink (Q), Plasma Shield (Z), Overlord Boss Fight.
URL: https://respawn-rebels26.netlify.app/`
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: `FEATURED REPERTOIRE:
1. Neon Shadow (Flagship) -> https://respawn-rebels26.netlify.app/
2. Project Christina (AI Voice Tutor - 1st Place Jarvis) -> https://christina-murex.vercel.app
3. SkyGuard AI (Defense / SIH 2026 Prototype) -> https://github.com/meet-Codee/SkyGuard_AI-Backup-
4. FolioForge 2026 (This Portfolio) -> https://meet-portfolioo.netlify.app/`
          });
          break;

        case "awards":
          newHistory.push({
            type: "output",
            text: `VERIFIED ACCOLADES:
★ 1st Place Champion: Jarvis 1.0 (24-Hour Hackathon by Forma) [07-11-2026]
★ 3rd Place Winner: RESPAWN at PRAVRUTTI 2.0 (MSRUAS) [14-16 Oct 2026]
★ Participant: Whimsymaxxing Creative Showcase (RUAS Literary Club) [25 Sep 2026]`
          });
          break;

        case "team":
          newHistory.push({
            type: "output",
            text: `TEAM RESPAWN REBELS (Neon Shadow):
• R Tanushree : Team Lead, Game Design & Direction
• Anjali      : Play-Testing & Balance Feedback
• Om Rathod   : Game Documentation & Submission
• Meet Amit Dharaiya (Me) : Prototyping, Final Pitch & Demo Setup`
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: `TECHNICAL ARSENAL:
Frontend : React 19, JavaScript ES2024, HTML5 Canvas 2D, WebGL, CSS Glassmorphism
Backend  : Node.js, Python, Google Gemini API, Sarvam AI, Web Audio API
Cloud/Tools: Vite, Git/GitHub, Netlify, Vercel, VS Code`
          });
          break;

        case "contact":
          newHistory.push({
            type: "output",
            text: `TRANSMISSION DETAILS:
Email   : meetadharaiya@gmail.com
GitHub  : https://github.com/meet-Codee
LinkedIn: https://www.linkedin.com/in/meetAD-8618093307/`
          });
          break;

        case "matrix":
          sound.fanfare();
          newHistory.push({
            type: "cyan",
            text: `[SYSTEM] Matrix cyber protocol initialized. All systems optimal.`
          });
          break;

        case "clear":
          setHistory([]);
          setInput("");
          return;

        case "exit":
          onClose();
          return;

        default:
          if (cmd !== "") {
            newHistory.push({
              type: "error",
              text: `Command not recognized: '${cmd}'. Type 'help' for valid directives.`
            });
          }
          break;
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-title">
            <TerminalIcon size={16} className="text-cyan" />
            <span>MAD_OS :: CYBER_TERMINAL_v2189</span>
          </div>

          <div className="terminal-controls">
            <button className="term-ctrl close-btn" onClick={onClose} aria-label="Close Terminal">
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Buffer */}
        <div className="terminal-body" onClick={() => inputRef.current && inputRef.current.focus()}>
          {history.map((line, idx) => (
            <div key={idx} className={`term-line term-${line.type}`}>
              <pre>{line.text}</pre>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="term-input-line">
            <span className="term-prompt">meet@folioforge:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              spellCheck={false}
              className="term-input"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

export default CyberTerminal;
