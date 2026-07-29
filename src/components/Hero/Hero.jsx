import "./Hero.css";

function Hero() {

  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }

  return (
    <section id="hero" className="hero-section">

      <h1>
        {getGreeting()}, I'm <span className="highlight">Meet 👋</span>
      </h1>

      <p className="tagline">
        I'm a passionate Web Developer from Bangalore
      </p>

      <div className="hero-buttons">

        <a href="#projects" className="btn btn-primary">
          View My Work
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>

      </div>

    </section>
  );
}

export default Hero;