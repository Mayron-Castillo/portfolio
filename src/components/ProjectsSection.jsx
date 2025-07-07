const techImages = {
  HTML: "/logos/html5.svg",
  CSS: "/logos/css.svg",
  JavaScript: "/logos/javascript.svg",
  React: "/logos/react.svg",
  Tailwind: "/logos/tailwind.svg",
};

const projects = [
  {
    id: 1,
    title: "Portfolio personal",
    description:
      "Web en la que puedes poner tus notas, que utiliza una API, para guardarte tus notas y con varias funcionalidades",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    image: "/logos/portfolio.webp",
    github: "https://github.com/Mayron-Castillo/portfolio",
    live: "https://portfolio-mayron.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce de camisetas de futbol",
    description:
      "Web de una e-commerce de camisetas de futbol, con varias funcionalidades",
    technologies: ["React", "Tailwind"],
    image: "/logos/e-commerce.webp",
    github: "https://github.com/Mayron-Castillo/e-commerce-futbol",
    live: "https://e-commerce-futbol-mayron.vercel.app/",
  },
  {
    id: 3,
    title: "Calculadora",
    description: "Web de una calculadora simple",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/logos/calculadora.webp",
    github: "https://github.com/Mayron-Castillo/calculadora",
    live: "https://calculadora-mayron.netlify.app/",
  },
  {
    id: 4,
    title: "Dragon Ball",
    description:
      "Web de personajes de Dragon Ball desde una API, en la que se muestran todos los personajes de la saga de Dragon Ball",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/logos/goku.webp",
    github: "https://github.com/Mayron-Castillo/Dragon-ball",
    live: "https://dragonball-mayron.netlify.app/",
  },
  {
    id: 5,
    title: "Rick and Morty",
    description:
      "App de Rick and Morty, que se hizo utilizando una API, y en esta app, se muestran varios de los personajes de la serie Rick and Morty",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/logos/rickandmorty.webp",
    github: "https://github.com/Mayron-Castillo/RickandMorty",
    live: "https://rickandmorty-mayron.netlify.app/",
  },
  {
    id: 6,
    title: "App de notas",
    description:
      "Web en la que puedes poner tus notas, que utiliza una API, para guardarte tus notas y con varias funcionalidades",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/logos/notes.webp",
    github: "https://github.com/Mayron-Castillo/notes-app-react",
    live: "https://notes-mayron.netlify.app/",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden max-w-[768px] h-auto md:h-[350px] bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#e3f3fa]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-[350px] h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        loading="lazy"
      />
      <div className="flex flex-col justify-around items-start p-6 md:p-4 gap-4 w-full">
        <h3 className="text-2xl text-[#0b5981]">{project.title}</h3>
        <p className="text-lg text-[#555]">{project.description}</p>

        <div className="flex justify-center flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#f5f5f5] px-[10px] py-[5px] rounded-md"
            >
              <img
                src={techImages[tech]}
                alt={tech}
                className="w-[24px] h-[24px]"
              />
              <span className="text-l text-[#333] font-bold">{tech}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b5981] text-white px-4 py-2 rounded-md list-none text-l transition-all duration-300 hover:bg-[#083a5a] text-center w-full md:w-auto"
          >
            Ver Código
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b5981] text-white px-4 py-2 rounded-md list-none text-l transition-all duration-300 hover:bg-[#083a5a] text-center w-full md:w-auto"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="pt-12 md:pt-12">
      <h2 className="text-[2.5rem] py-[1.5rem] px-4 md:px-0">🚀 Proyectos</h2>
      <div className="flex flex-col max-w-[768px] mx-auto gap-8 justify-center px-4 md:px-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
