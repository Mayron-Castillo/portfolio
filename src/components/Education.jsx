import './Education.css'

function Education() {
    return (
        <section className='education'>
            <h2 className='education-title'>🎓 Educación</h2>

            <div className="education-container">
                <div className="education-card">
                    <h3>Academia</h3>
                    <p> -Academia X - 2024/2025</p>
                    <p>📌 Temas: HTML, CSS, JS, REACT, TAILWIND</p>
                </div>
                <div className="education-card">
                    <h3>Ingeniería en Software</h3>
                    <p>📍 Universidad Y - En curso</p>
                </div>
            </div>

        </section>
    )
}

export default Education