import { useState } from "react";
import { sound } from "../../utils/audio";
import { Trophy, Award, CheckCircle2, Maximize2, X, Calendar } from "lucide-react";
import "./Achievements.css";

const CERTIFICATES = [
  {
    id: "jarvis",
    title: "1st Place — Jarvis 1.0 (24-Hour Hackathon)",
    recipient: "MEET AMIT DHARAIYA",
    issuer: "Forma (Pooja M, Data Engineer - L2 & Jerrin Anto, Founder)",
    date: "07-11-2026",
    placement: "1st Place Winner",
    type: "win",
    accent: "#ffb800",
    image: "/certificates/jarvis-first-place.png",
    alt: "Certificate of Achievement presented to Meet Amit Dharaiya for securing 1st Place at Jarvis 1.0 (24 Hour Hackathon) on 07-11-2026.",
    description:
      "Awarded 1st Place to Meet Amit Dharaiya for securing top honors at the Jarvis 1.0 24-Hour Hackathon (Issue Date: 07-11-2026).",
  },
  {
    id: "respawn",
    title: "Third Place — RESPAWN at PRAVRUTTI 2.0",
    recipient: "MEET AMIT DHARAIYA",
    issuer: "Ramaiah University of Applied Sciences (MSRUAS)",
    date: "14th to 16th October",
    placement: "3rd Place Winner",
    type: "win",
    accent: "#00d4ff",
    image: "/certificates/respawn-third-place.jpg",
    alt: "Certificate of Recognition certifying that Meet Amit Dharaiya secured Third Place in RESPAWN at PRAVRUTTI 2.0, organized by Ramaiah University of Applied Sciences from 14th to 16th October.",
    description:
      "Secured Third Place in RESPAWN at PRAVRUTTI 2.0 with Team Respawn Rebels for Neon Shadow — where I built a candidate game prototype, pitched in the final round, supported Q&A, and set up the demo.",
  },
  {
    id: "whimsymaxxing",
    title: "Whimsymaxxing — RUAS Literary Club",
    recipient: "MEET AMIT DHARAIYA",
    issuer: "RUAS Literary Club • Ramaiah University of Applied Sciences",
    date: "25 September 2026",
    placement: "Official Participation",
    type: "participation",
    accent: "#ff007f",
    image: "/certificates/whimsymaxxing.jpg",
    alt: "Certificate of Participation for Meet Amit Dharaiya in Whimsymaxxing conducted on 25 September 2026 by the RUAS Literary Club.",
    description:
      "Verified participation in 'Whimsymaxxing,' conducted on 25 September 2026 by the RUAS Literary Club.",
  },
];

function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="achievements" className="achievements-section reveal-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Trophy size={16} />
          <span>MEET AMIT DHARAIYA • VERIFIED CERTIFICATES & HONORS</span>
        </div>

        <h2 className="section-title">
          The <span className="gradient-text">Trophy Vault</span> & Verified Credentials
        </h2>
        <p className="section-subtitle">
          Every award and participation entry is backed by its official certificate issued to <strong>Meet Amit Dharaiya</strong>. Click any certificate to inspect it in full 4K resolution.
        </p>
      </div>

      <div className="achievements-grid">
        {CERTIFICATES.map((cert) => (
          <article
            key={cert.id}
            className="cert-card holo-card"
            style={{ "--cert-accent": cert.accent }}
            onMouseMove={handleCardMove}
            onMouseEnter={() => sound.hover()}
          >
            <div className="cert-orbital-header">
              <div className="cert-orb-emblem" aria-hidden="true">
                <div className="cert-orb-ring"></div>
                {cert.type === "win" ? <Trophy size={18} /> : <CheckCircle2 size={18} />}
              </div>

              <div className="cert-meta-top">
                <span className="cert-placement-pill">{cert.placement}</span>
                <span className="cert-date">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </span>
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>

            <button
              type="button"
              className="cert-preview-wrap"
              onClick={() => {
                sound.click();
                setSelectedCert(cert);
              }}
              aria-label={`Inspect full certificate for ${cert.title}`}
            >
              <img src={cert.image} alt={cert.alt} className="cert-thumbnail" />
              <div className="cert-zoom-overlay">
                <Maximize2 size={20} />
                <span>Inspect 4K Certificate</span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close Certificate Preview"
            >
              <X size={20} />
            </button>
            <h3 className="modal-title">{selectedCert.title}</h3>
            <p className="modal-sub">
              Issued to <strong>{selectedCert.recipient}</strong> • {selectedCert.issuer} ({selectedCert.date})
            </p>
            <div className="modal-img-wrap">
              <img src={selectedCert.image} alt={selectedCert.alt} className="modal-cert-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;
