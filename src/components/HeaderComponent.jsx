import { useState } from "react";

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex sticky top-0 w-full items-center justify-between md:justify-around text-xl py-[0.5rem] px-[0.3rem] md:text-2xl md:py-[0.7rem] md:px-[0.5rem] lg:text-2xl lg:py-4 lg:px-0 font-semibold z-10 bg-[#f1f9fe]">
        <div className="px-4 md:hidden">
          <span className="text-[#086a9c]">MC</span>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden px-4 py-2 z-50 relative text-[#086a9c] text-2xl transition-all duration-300 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
        <ul
          className={`fixed md:static top-0 right-0 w-full h-screen md:h-auto md:w-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-12 px-6 py-4 md:py-0 text-[#086a9c] transition-all duration-300 ${
            isMenuOpen
              ? "translate-x-0 bg-[#f1f9fe] backdrop-blur-lg"
              : "translate-x-full md:translate-x-0"
          }`}
        >
          <li className="w-full text-center md:w-auto md:text-left">
            <a
              className="no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f] text-2xl md:text-inherit font-semibold"
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </a>
          </li>
          <li className="w-full text-center md:w-auto md:text-left">
            <a
              className="no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f] text-2xl md:text-inherit font-semibold"
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
          </li>
          <li className="w-full text-center md:w-auto md:text-left">
            <a
              className="no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f] text-2xl md:text-inherit font-semibold"
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </a>
          </li>
          <li className="w-full text-center md:w-auto md:text-left">
            <a
              className="no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f] text-2xl md:text-inherit font-semibold"
              href="#education"
              onClick={() => setIsMenuOpen(false)}
            >
              Educación
            </a>
          </li>
          <li className="w-full text-center md:w-auto md:text-left">
            <a
              className="no-underline text-inherit transition-all duration-300 ease-in-out hover:text-[#03324f] text-2xl md:text-inherit font-semibold"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderComponent;
