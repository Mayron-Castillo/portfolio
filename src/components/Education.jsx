import './Education.css'

function Education(props) {
    return (
        <section id='education' className='education'>
            <h2 className='education-title'>🎓 Educación</h2>
            <div className="education-container">
                <div className="education-card">
                    <h3> {props.title} </h3>
                    <p> {props.date} </p>
                    <p> {props.languaje} </p>
                </div>
            </div>
        </section>
    )
}

export default Education