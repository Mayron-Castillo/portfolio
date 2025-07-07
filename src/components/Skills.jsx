function Skills() {
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
  ];

  return (
    <section id="skills" className="pt-12 px-4 md:px-0 md:pt-12">
      <h3 className="text-[2.5rem] py-[1.5rem] md:pt-12">🛠️ Habilidades</h3>
      <section className="w-auto border-2 border-[#bee6f9] bg-[#fafdff] rounded-lg p-4 h-auto shadow-lg grid gap-8 justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <figure
            key={index}
            className="w-[100px] text-center flex flex-col items-center justify-center rounded-xl shadow-md border border-[#e3f3fa] bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="transition-all duration-300 ease-in-out">
              <img
                className="w-[100px] block"
                src={skill.src}
                alt={skill.alt}
                loading="lazy"
              />
              <figcaption className="font-semibold text-l text-black mt-2">
                {skill.logo}
              </figcaption>
            </div>
          </figure>
        ))}
      </section>
    </section>
  );
}

export default Skills;
