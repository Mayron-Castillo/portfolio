import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <>
            {/* <nav className="header-nav"> */}
            <nav className="flex fixed w-full justify-around text-xl py-[0.5rem] px-[0.3rem] md:text-2xl md:py-[0.7rem] md:px-[0.5rem] lg:text-2xl lg:py-4 lg:px-0 font-semibold bg-[#f1f9feb3] backdrop-blur-[10px] z-10">
                <ul className="cursor-pointer text-[#086a9c] flex gap-4 flex-wrap justify-center md:gap-6 lg:gap-12 list-none px-6">
                    <li> <a className='no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f]' href="#home">Sobre mí</a></li>
                    <li> <a className='no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f]' href="#projects">Proyectos</a></li>
                    <li> <a className='no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f]' href="#skills">Habilidades</a></li>
                    <li> <a className='no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f]' href="#education">Educación</a></li>
                    <li> <a className='no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f]' href="#contact">Contáctame</a></li>
                </ul>
            </nav>        
        </>
    )
}

export default HeaderComponent
