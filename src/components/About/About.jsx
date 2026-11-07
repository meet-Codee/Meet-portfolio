import { sound } from "../../utils/audio";
import { User, MapPin, GraduationCap, Code, Rocket, Heart } from "lucide-react";
import "./About.css";

function About() {
  const bioHighlights = [
    {
      icon: <GraduationCap size={18} className="text-cyan" />,
      label: "Education & Campus",
      value: "Ramaiah University of Applied Sciences (MSRUAS), Bangalore"
    },
    {
      icon: <MapPin size={18} className="text-magenta" />,
      label: "Base Location",
      value: "Bangalore, Karnataka, India"
    },
    {
      icon: <Code size={18} className="text-violet" />,
      label: "Core Specialization",
      value: "Frontend Architecture, Game Prototyping & AI Voice Integration"
    },
    {
      icon: <Rocket size={18} className="text-gold" />,
      label: "Hackathon Track Record",
      value: "1st Place (Jarvis 1.0) & 3rd Place (RESPAWN Pravrutti 2.0)"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <User size={16} />
          <span>DEVELOPER BIOGRAPHY & PHILOSOPHY</span>
        </div>

        <h2 className="section-title">Behind the Code</h2>
        <p className="section-subtitle">
          Driven by curiosity, rapid prototyping, and building software that feels alive to interact with.
        </p>
      </div>

      <div className="about-grid">
        {/* Photo Column */}
        <div className="about-visual">
          <div className="about-frame" onMouseEnter={() => sound.hover()}>
            <img 
              src="/img.jpeg" 
              alt="Meet Amit Dharaiya" 
              className="about-photo"
            />
            <div className="about-frame-border"></div>
            <div className="about-status-tag">
              <span className="about-live-dot"></span>
              <span>MEET AMIT DHARAIYA</span>
            </div>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="about-narrative">
          <h3 className="about-heading">
            Engineering Playful, High-Impact Web Experiences
          </h3>

          <p className="about-text">
            I’m a developer from Bangalore with a passion for creative web technologies and game mechanics. 
            Whether building a high-octane 2D stealth game like <strong>Neon Shadow</strong> with Team Respawn Rebels 
            or architecting zero-dependency real-time voice pipelines for <strong>Christina</strong>, I thrive when 
            translating complex logic into fluid, unforgettable user interactions.
          </p>

          <p className="about-text">
            My experience has been forged in fast-paced hackathon environments — collaborating under pressure, 
            rapidly turning concepts into playable prototypes, and presenting live technical demos before judges. 
            I prioritize clean semantic structures, 4K visual crispness, and zero-bloat performance.
          </p>

          <div className="about-highlights-grid">
            {bioHighlights.map((item, idx) => (
              <div key={idx} className="about-highlight-card" onMouseEnter={() => sound.hover()}>
                <div className="highlight-icon-box">{item.icon}</div>
                <div>
                  <span className="highlight-label">{item.label}</span>
                  <p className="highlight-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a 
              href="#contact" 
              className="cyber-btn cyber-btn-primary"
              onClick={() => sound.click()}
            >
              <span>Get in Touch</span>
            </a>
            <a 
              href="#neon-shadow" 
              className="cyber-btn cyber-btn-secondary"
              onClick={() => sound.click()}
            >
              <span>Play Flagship Game</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
