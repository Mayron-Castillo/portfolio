import './Skills.css'

function Skills() {
    const skills = [
        { src: "/src/assets/logos/html5.svg", alt: "Logotipo de HTML5", logo: "HTML5" },
        { src: "/src/assets/logos/css.svg", alt: "Logo CSS", logo: "CSS" },
        { src: "/src/assets/logos/javascript.svg", alt: "Logo JavaScript", logo: "JavaScript" },
        { src: "/src/assets/logos/react.svg", alt: "Logo React", logo: "React" },
        { src: "/src/assets/logos/github.svg", alt: "Logo Git", logo: "Git" },
        { src: "/src/assets/logos/tailwind.svg", alt: "Logo Tailwind", logo: "Tailwind" },
        { src: "/src/assets/logos/vite.svg", alt: "Logo Vite", logo: "Vite" }
    ];

    return (
        <section className="skills">
            <h3 id='skills' className="skills-title">Habilidades</h3>
            <section className="figures">
                {skills.map((skill, index) => (
                    <figure key={index}>
                        <div className="figure-pos">
                            <img className="figure-logos" src={skill.src} alt={skill.alt} />
                            <figcaption>{skill.logo}</figcaption>
                        </div>
                    </figure>
                ))}
            </section>
        </section>
    );
}

export default Skills