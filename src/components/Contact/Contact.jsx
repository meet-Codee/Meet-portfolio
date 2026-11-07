import { useState } from "react";
import { sound } from "../../utils/audio";
import { Mail, Copy, Check, Send, MapPin, Radio } from "lucide-react";
import { Github, Linkedin } from "../common/Icons";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [pulseBoost, setPulseBoost] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const email = "meetadharaiya@gmail.com";

  const handleCopy = () => {
    sound.click();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setPulseBoost(true);
    setTimeout(() => setCopied(false), 2600);
    setTimeout(() => setPulseBoost(false), 1800);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.fanfare();
    setPulseBoost(true);
    setTimeout(() => setPulseBoost(false), 2400);

    const mailtoSubject = encodeURIComponent(
      form.subject || `Portfolio Inquiry for Meet Amit Dharaiya from ${form.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Meet,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section reveal-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Radio size={16} />
          <span>MEET AMIT DHARAIYA • ORBITAL COMMS & DIRECT TRANSMISSION</span>
        </div>

        <h2 className="section-title">
          Connect With <span className="gradient-text">Meet</span>
        </h2>
        <p className="section-subtitle">
          Reach out directly for web development projects, game prototyping, hackathon teams, or internship opportunities in Bangalore and beyond.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Orbital Comms Array + Direct Channels */}
        <div className="contact-info-col">
          <div className={`comms-orbit-card holo-card ${pulseBoost ? "pulse-boost" : ""}`}>
            <div className="comms-orbit-visual" aria-hidden="true">
              <div className="comms-ring r-1"></div>
              <div className="comms-ring r-2"></div>
              <div className="comms-ring r-3"></div>
              <div className="comms-core">
                <Mail size={22} />
              </div>
            </div>

            <div className="comms-details">
              <span className="card-top-tag">PRIMARY EMAIL • MEET AMIT DHARAIYA</span>
              <a href={`mailto:${email}`} className="email-text">
                {email}
              </a>

              <div className="comms-btn-row">
                <button
                  type="button"
                  className={`copy-btn ${copied ? "copied" : ""}`}
                  onClick={handleCopy}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy Meet's Email"}</span>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="cyber-btn cyber-btn-secondary direct-mail-btn"
                  onClick={() => sound.click()}
                >
                  <span>Open Mail App ↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="social-links-grid">
            <a
              href="https://github.com/meet-Codee"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card holo-card"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <div className="social-orb cyan">
                <Github size={20} />
              </div>
              <div>
                <h4 className="social-title">GitHub Repository Hub</h4>
                <span className="social-handle">github.com/meet-Codee</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/meetAD-8618093307/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card holo-card"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <div className="social-orb magenta">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="social-title">LinkedIn Network</h4>
                <span className="social-handle">Meet Amit Dharaiya</span>
              </div>
            </a>
          </div>

          <div className="location-card holo-card">
            <MapPin size={20} className="text-gold" />
            <div>
              <span className="loc-label">COORDINATES // 12.9716° N, 77.5946° E</span>
              <p className="loc-val">Bangalore, Karnataka, India • MS Ramaiah University of Applied Sciences</p>
            </div>
          </div>
        </div>

        {/* Right: Direct Email Composer */}
        <div className="contact-form-col">
          <div className="form-card holo-card">
            <div className="form-card-header">
              <span className="form-title">COMPOSE DIRECT EMAIL TO MEET</span>
              <span className="form-enc">VERIFIED MAILTO LAUNCHER</span>
            </div>

            <form onSubmit={handleSubmit} className="transmission-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Collaboration / FOLIOFORGE 2026"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message for Meet *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here — submitting opens your email client addressed to meetadharaiya@gmail.com..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="cyber-btn cyber-btn-primary submit-btn">
                <Send size={16} />
                <span>Launch Email to Meet</span>
              </button>
            </form>

            {submitted && (
              <div className="form-success-banner">
                <Check size={18} />
                <span>Opening your email app addressed to {email}!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
