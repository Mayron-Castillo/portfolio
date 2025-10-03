function Skills() {
  // Componente que muestra las skills
  const skills = [
    { src: "/logos/html5.svg", alt: "Logotipo de HTML5", logo: "HTML5" },
    { src: "/logos/css.svg", alt: "Logo CSS", logo: "CSS" },
    {
      src: "/logos/javascript.svg",
      alt: "Logo JavaScript",
      logo: "JavaScript",
    },
    { src: "/logos/react.svg", alt: "Logo React", logo: "React" },
    { src: "/logos/github.svg", alt: "Logo Git", logo: "Git" },
    { src: "/logos/tailwind.svg", alt: "Logo Tailwind", logo: "Tailwind" },
    { src: "/logos/vite.svg", alt: "Logo Vite", logo: "Vite" },
    {
      src: "/logos/typescript.svg",
      alt: "Logo TypeScript",
      logo: "TypeScript",
    },
  ];

  return (
    <section id="skills" className="pt-12 px-4 md:px-0 md:pt-12">
      <h3 className="text-[2.5rem] py-[1.5rem] md:pt-12">🛠️ Habilidades</h3>
      <section className="max-w-[768px] mx-auto bg-[#fafdff] border-2 border-[#bee6f9] rounded-lg p-6 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <figure
              key={index}
              className="w-full max-w-[120px] text-center flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-md border border-[#e3f3fa] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-16 h-16 mb-3 transition-transform duration-300 hover:scale-110">
                <img
                  className="w-full h-full object-contain"
                  src={skill.src}
                  alt={skill.alt}
                />
              </div>
              <figcaption className="font-semibold text-sm text-[#333]">
                {skill.logo}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Skills;
