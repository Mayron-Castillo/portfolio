import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className='header-li'> <a href="#sobre-mi">Sobre mí</a></li>
                    <li className='header-li'> <a href="#projects">Proyectos</a></li>
                    <li className='header-li'> <a href="#skills">Habilidades</a></li>
                    <li className='header-li'> <a href=""></a>Contact me</li>
                </ul>
            </nav>        
        </>
    )
}

export default HeaderComponent