import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src="/img.jpeg" alt="Meet Amit Dharaiya" />
        </div>

        <div className="about-content">
          <h3>Meet Amit Dharaiya</h3>

          <p>
            I'm a passionate Full Stack Web Developer from Bangalore who loves
            creating responsive, modern and user-friendly websites using HTML,
            CSS, JavaScript and React.
          </p>

          <p>
            I enjoy learning new technologies and building projects that solve
            real-world problems. My goal is to become a skilled software
            developer and contribute to impactful applications.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;