import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">Meet</h2>

        <p className="footer-text">
          © {year} Meet Amit Dharaiya. All Rights Reserved.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/meet-Codee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/meetAD-8618093307/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;