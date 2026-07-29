import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Real-time weather dashboard using OpenWeather API.",
      image: "/weather.jpg",
      tech: ["React", "API"],
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Responsive portfolio built using React and CSS.",
      image: "/portfolio.jpg",
      tech: ["React", "CSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "Task management application with CRUD functionality.",
      image: "/todo.jpg",
      tech: ["JavaScript", "React"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((item, index) => (
                  <span className="tag" key={index}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;