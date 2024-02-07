import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContextLanguage } from "../../context/language";

function Banner2() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="bg-slate-200   flex flex-col justify-center items-center gap-4 p-5 xs:text-[0.5rem] md:text-[1rem] xl:text-[1.5rem]">
      <h2 className="xs:text-[2em] md:text-2xl font-black">
        {translation.banner.title}
      </h2>
      <p className="xs:text-[1.2em] xl:text-[0.8em]">
        {translation.banner.subtitle}
      </p>
      <Link
        to=""
        className="bg-green-500 px-10 py-1 rounded-full duration-500 hover:scale-105"
      >
        {translation.banner.button}
      </Link>
    </section>
  );
}

export default Banner2;
