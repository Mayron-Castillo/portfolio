function Education() {
  // Componente que muestra la educación
  return (
    <section
      id="education"
      className="pt-12 px-4 md:px-0 md:pt-12 flex flex-col gap-6"
    >
      <h2 className="text-[2.5rem] py-[1.5rem] md:pt-12">🎓 Educación</h2>
      <div className="max-w-[768px] w-full mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-full flex flex-col items-center bg-[#fafdff] border-2 border-[#bee6f9] rounded-lg p-4 md:p-5 shadow-lg">
          <h3 className="my-2 text-base md:text-xl text-[#333]">
            Academia X LLC
          </h3>
          <p className="my-2 text-sm md:text-base text-[#666]">
            Noviembre 2024- Julio 2025
          </p>
          <p className="my-2 text-sm md:text-base text-[#666]">
            📌 Temas: HTML, CSS, JS, REACT, TypeScript, TAILWIND
          </p>
        </div>
      </div>
      <div className="max-w-[768px] w-full mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-full flex flex-col items-center bg-[#fafdff] border-2 border-[#bee6f9] rounded-lg p-4 md:p-5 shadow-lg">
          <h3 className="my-2 text-base md:text-xl text-[#333]">
            Alura Latam (Oracle Next Education)
          </h3>
          <p className="my-2 text-sm md:text-base text-[#666]">
            Enero 2024 - Septiembre 2024
          </p>
          <p className="my-2 text-sm md:text-base text-[#666]">
            📌 Temas: HTML,CSS,JS,REACT,GIT,SQL
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
