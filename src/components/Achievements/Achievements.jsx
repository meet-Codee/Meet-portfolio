import { useState } from "react";
import { sound } from "../../utils/audio";
import { Trophy, Award, CheckCircle2, Maximize2, X, Calendar, MapPin } from "lucide-react";
import "./Achievements.css";

function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "jarvis",
      title: "1st Place Winner — Jarvis 1.0",
      event: "Jarvis 1.0 (24-Hour Hackathon)",
      issuer: "Forma (Pooja M, Jerrin Anto)",
      date: "07-11-2026",
      placement: "1st Place (Champion)",
      type: "win",
      image: "/certificates/jarvis-first-place.png",
      description:
        "Secured 1st Place at the Jarvis 1.0 24-hour sprint. Recognized for rapid prototyping, robust voice pipeline implementation, and high-impact educational AI architecture in Project Christina."
    },
    {
      id: "respawn",
      title: "Third Place — RESPAWN at PRAVRUTTI 2.0",
      event: "RESPAWN Gaming Hackathon, PRAVRUTTI 2.0",
      issuer: "Ramaiah University of Applied Sciences (FET MSRUAS)",
      date: "14th to 16th October 2026",
      placement: "3rd Place Winner",
      type: "win",
      image: "/certificates/respawn-third-place.jpg",
      description:
        "Secured 3rd Place with Team Respawn Rebels for building Neon Shadow — a complete 2D stealth-action ninja browser game featuring 8 chapters, vision cones, and multi-phase boss mechanics."
    },
    {
      id: "whimsymaxxing",
      title: "Whimsymaxxing — RUAS Literary Club",
      event: "Whimsymaxxing Creative Showcase",
      issuer: "RUAS Literary Club, MSRUAS",
      date: "25 September 2026",
      placement: "Official Participation",
      type: "participation",
      image: null,
      description:
        "Participated in the university-wide creative narrative showcase focusing on lateral thinking, speculative storytelling, and creative composition."
    }
  ];

  const openCertModal = (cert) => {
    sound.click();
    if (cert.image) {
      setSelectedCert(cert);
    }
  };

  const closeCertModal = () => {
    sound.hover();
    setSelectedCert(null);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <div className="section-badge" onMouseEnter={() => sound.hover()}>
          <Trophy size={16} />
          <span>VERIFIED HONORS & HACKATHON ACCOLADES</span>
        </div>

        <h2 className="section-title">Achievements & Credentials</h2>
        <p className="section-subtitle">
          Demonstrated competitive performance under pressure. Every listed award is supported 
          by verifiable certificates and institutional records.
        </p>
      </div>

      <div className="achievements-grid">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className={`cert-card ${cert.type === "win" ? "cert-winner" : ""}`}
            onMouseEnter={() => sound.hover()}
          >
            <div className="cert-top">
              <span className={`cert-badge-pill ${cert.type === "win" ? "pill-win" : "pill-part"}`}>
                {cert.type === "win" ? <Trophy size={14} /> : <CheckCircle2 size={14} />}
                <span>{cert.placement}</span>
              </span>
              <span className="cert-date">
                <Calendar size={13} />
                <span>{cert.date}</span>
              </span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">Organized by: {cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>

            {cert.image ? (
              <div 
                className="cert-preview-wrap"
                onClick={() => openCertModal(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="cert-thumbnail" 
                />
                <div className="cert-zoom-overlay">
                  <Maximize2 size={20} />
                  <span>Inspect Official Certificate</span>
                </div>
              </div>
            ) : (
              <div className="cert-placeholder">
                <Award size={36} className="text-dim" />
                <span>Institutional Participation Verified</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={closeCertModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cert-modal-close" 
              onClick={closeCertModal}
              aria-label="Close Certificate Preview"
            >
              <X size={20} />
            </button>
            <h3 className="modal-title">{selectedCert.title}</h3>
            <p className="modal-sub">{selectedCert.issuer} • {selectedCert.date}</p>
            <div className="modal-img-wrap">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="modal-cert-img" 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;
