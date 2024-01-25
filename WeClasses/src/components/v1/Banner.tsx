import { Link } from "react-router-dom";

function Banner2() {
  return (
    <section className="bg-slate-200   flex flex-col justify-center items-center gap-4 p-5 xs:text-[0.5rem] md:text-[1rem] xl:text-[1.5rem]">
      <h2 className="xs:text-[2em] md:text-2xl font-black">
        Rompe las barreras del idioma y conecta con el mundo
      </h2>
      <p className="xs:text-[1.2em] xl:text-[0.8em]">
        Únete a nosotros y aprende de profesores multiculturales que harán que
        cada clase sea una experiencia enriquecedora.
      </p>
      <Link
        to=""
        className="bg-green-500 px-10 py-1 rounded-full duration-500 hover:scale-105"
      >
        Encuentra tu profesor ideal
      </Link>
    </section>
  );
}

export default Banner2;
