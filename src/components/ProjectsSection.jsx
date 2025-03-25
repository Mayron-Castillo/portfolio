import './ProjectsSection.css'
import React from "react";

const techImages = {
  HTML: '/src/assets/logos/html5.svg',
  CSS: '/src/assets/logos/css.svg',
  JavaScript: '/src/assets/logos/javascript.svg',
  React: '/src/assets/logos/react.svg'
}

const projects = [
  {
    id: 1,
    title: "Calculadora",
    description: "Web de una calculadora simple",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/src/assets/logos/calculadora.png",
    github: "https://github.com/Mayron-Castillo/calculadora",
    live: "https://calculadora-mayron.netlify.app/",
  },
  {
    id: 2,
    title: "Dragon Ball ",
    description: "Web de personajes de Dragon Ball desde una API, en la que se muestran todos los personajes de la saga de Dragon Ball",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/src/assets/logos/proyectos/Goku_dbz_fin.webp",
    github: "https://github.com/Mayron-Castillo/Dragon-ball",
    live: "https://dragonball-mayron.netlify.app/",
  },
  {
    id: 3,
    title: "Rick and Morty",
    description: "App de Rick and Morty, que se hizo utilizando una API, y en esta app, se muestran varios de los personajes de la serie Rick and Morty",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/src/assets/logos/rickandmorty.png",
    github: "https://github.com/Mayron-Castillo/RickandMorty",
    live: "https://rickandmorty-mayron.netlify.app/",
  },
  {
    id: 4,
    title: "App de notas",
    description: "Web en la que puedes poner tus notas, que utiliza una API, para guardarte tus notas y con varias funcionalidades",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/src/assets/logos/proyectos/Goku_dbz_fin.webp",
    github: "https://github.com/Mayron-Castillo/notes-app-react",
    live: "https://notes-mayron.netlify.app/",
  },
];

function ProjectCard({ project }){
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className='project-div'>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={techImages[tech]} alt={tech} className="tech-icon" />
              <span className="tech-name">{tech}</span>
            </div>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button">
            Ver Código
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-button">
            Ver Demo
          </a>
        </div>
      </div>

    </div>
  );
};

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection