import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li> <a className='header-a' href="#sobre-mi">Sobre mí</a></li>
                    <li> <a className='header-a' href="#projects">Proyectos</a></li>
                    <li> <a className='header-a' href="#skills">Habilidades</a></li>
                    <li> <a className='header-a' href="#educacion"></a>Educación</li>
                    <li> <a className='header-a' href="#contacto"></a>Contact me</li>
                </ul>
            </nav>        
        </>
    )
}

export default HeaderComponent