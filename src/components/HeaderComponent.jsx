import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li> <a className='header-a' href="#home">Sobre mí</a></li>
                    <li> <a className='header-a' href="#projects">Proyectos</a></li>
                    <li> <a className='header-a' href="#skills">Habilidades</a></li>
                    <li> <a className='header-a' href="#education">Educación</a></li>
                    <li> <a className='header-a' href="#contact">Contáctame</a></li>
                </ul>
            </nav>        
        </>
    )
}

export default HeaderComponent