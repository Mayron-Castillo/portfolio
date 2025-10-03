const techImages = {
  HTML: "/logos/html5.svg",
  CSS: "/logos/css.svg",
  JavaScript: "/logos/javascript.svg",
  React: "/logos/react.svg",
  Tailwind: "/logos/tailwind.svg",
  TypeScript: "/logos/typescript.svg",
  Vite: "/logos/vite.svg",
};

// Proyectos con su información
const projects = [
  {
    id: 1,
    title: "Dashboard",
    description:
      "Web de una dashboard completa, con distintos componentes que se muestran en las que se usan llamadas a APIs, y un CRUD completo simulado ",
    technologies: ["React", "Tailwind", "TypeScript", "Vite"],
    image: "/logos/dashboard.webp",
    github: "https://github.com/Mayron-Castillo/dashboard",
    live: "https://mayrondashboard.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio personal",
    description:
      "Este es mi portfolio personal que estás viendo, donde muestro mis proyectos, skills y educación",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    image: "/logos/portfolio.webp",
    github: "https://github.com/Mayron-Castillo/portfolio",
    live: "https://portfolio-mayron.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce de camisetas de futbol",
    description:
      "Web de una e-commerce de camisetas de futbol, con varias funcionalidades",
    technologies: ["React", "Tailwind", "Vite"],
    image: "/logos/e-commerce.webp",
    github: "https://github.com/Mayron-Castillo/ecommerce-futbol",
    live: "https://ecommerce-futbol.vercel.app/",
  },

  {
    id: 4,
    title: "Calculadora",
    description: "Web de una calculadora simple",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/logos/calculadora.webp",
    github: "https://github.com/Mayron-Castillo/calculadora",
    live: "https://calculadora-mayron.netlify.app/",
  },
  {
    id: 5,
    title: "App de notas",
    description:
      "Web en la que puedes poner tus notas, que utiliza Local Storage, para guardarte tus notas y con varias funcionalidades",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/logos/notes.webp",
    github: "https://github.com/Mayron-Castillo/notes-app-react",
    live: "https://notes-mayron.netlify.app/",
  },
];

function ProjectCard({ project }) {
  // Aquí se encarga de mostrar el contenido que va a tener cada proyecto
  return (
    <div className="flex flex-col overflow-hidden max-w-[768px] h-auto m-4 md:m-0 bg-white rounded-2xl shadow-lg border-2 border-[#bee6f9]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-around items-start p-6 gap-4 w-full">
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

        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b5981] text-white flex justify-center items-center px-4 py-2 rounded-md list-none text-l hover:bg-[#083a5a] text-center w-full md:w-auto"
          >
            Ver Código
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b5981] text-white flex justify-center items-center px-4 py-2 rounded-md list-none text-l hover:bg-[#083a5a] text-center w-full md:w-auto"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  // Esto hace el .map para mostrar todos los proyectos
  return (
    <section id="projects" className="pt-12">
      <h2 className="text-[2.5rem] py-[1.5rem] px-4 md:px-0">🚀 Proyectos</h2>
      <div className="flex flex-col max-w-[768px] mx-auto gap-8 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
