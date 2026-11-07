import { useState } from "react";
import { sound } from "../../utils/audio";
import { Mail, Copy, Check, Send, MapPin, Sparkles } from "lucide-react";
import { Github, Linkedin } from "../common/Icons";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const email = "meetadharaiya@gmail.com";

  const handleCopy = () => {
    sound.click();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.fanfare();

    // Construct genuine mailto link with encoded subject and body
    const mailtoSubject = encodeURIComponent(form.subject || `Portfolio Inquiry from ${form.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Mail size={16} />
          <span>DIRECT TRANSMISSION & INQUIRIES</span>
        </div>

        <h2 className="section-title">Initiate Contact</h2>
        <p className="section-subtitle">
          Interested in collaborating on game development, hackathons, or web engineering? 
          Send a direct transmission below or copy my primary email address.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Cards */}
        <div className="contact-info-col">
          {/* Quick Copy Card */}
          <div className="contact-card highlight-card" onMouseEnter={() => sound.hover()}>
            <span className="card-top-tag">DIRECT EMAIL CHANNEL</span>
            <div className="email-display-row">
              <Mail size={20} className="text-cyan" />
              <span className="email-text">{email}</span>
            </div>

            <button 
              className={`copy-btn ${copied ? "copied" : ""}`}
              onClick={handleCopy}
              aria-label="Copy Email to Clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Profiles */}
          <div className="social-links-grid">
            <a 
              href="https://github.com/meet-Codee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <Github size={22} className="text-cyan" />
              <div>
                <h4 className="social-title">GitHub Profile</h4>
                <span className="social-handle">@meet-Codee</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/meetAD-8618093307/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              onClick={() => sound.click()}
              onMouseEnter={() => sound.hover()}
            >
              <Linkedin size={22} className="text-violet" />
              <div>
                <h4 className="social-title">LinkedIn Network</h4>
                <span className="social-handle">Meet Amit Dharaiya</span>
              </div>
            </a>
          </div>

          {/* Location & Status Card */}
          <div className="location-card">
            <MapPin size={18} className="text-magenta" />
            <div>
              <span className="loc-label">CURRENT BASE</span>
              <p className="loc-val">Bangalore, Karnataka, India • RUAS Campus</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Transmission Form */}
        <div className="contact-form-col">
          <div className="form-card">
            <div className="form-card-header">
              <span className="form-title">TRANSMIT A MESSAGE</span>
              <span className="form-enc">ENCRYPTED // UTF-8</span>
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
                    placeholder="e.g. Alex Mercer"
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
                    placeholder="e.g. alex@studio.io"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Inquiry *</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Hackathon Collaboration / Project Opportunity"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Transmission Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="cyber-btn cyber-btn-primary submit-btn">
                <Send size={16} />
                <span>Transmit to Meet</span>
              </button>
            </form>

            {submitted && (
              <div className="form-success-banner">
                <Check size={18} className="text-emerald" />
                <span>Transmission prepared! Launching your email client...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
