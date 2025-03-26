import './Skills.css'

function Skills() {
    const skills = [
        { src: "/logos/html5.svg", alt: "Logotipo de HTML5", logo: "HTML5" },
        { src: "/logos/css.svg", alt: "Logo CSS", logo: "CSS" },
        { src: "/logos/javascript.svg", alt: "Logo JavaScript", logo: "JavaScript" },
        { src: "/logos/react.svg", alt: "Logo React", logo: "React" },
        { src: "/logos/github.svg", alt: "Logo Git", logo: "Git" },
        { src: "/logos/tailwind.svg", alt: "Logo Tailwind", logo: "Tailwind" },
        { src: "/logos/vite.svg", alt: "Logo Vite", logo: "Vite" }
    ];

    return (
        <section id='skills' className="skills">
            <h3 className="skills-title">🛠️ Habilidades</h3>
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