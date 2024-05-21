import { useContext } from "react";

import { DataContextLanguage } from "../../context/language";
import Button from "../partials/Button";

function Banner2() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="bg-light-blue text-white   flex flex-col justify-center items-center gap-4 p-5 xs:text-[0.5rem] md:text-[1rem] xl:text-[1.5rem]">
      <h2 className="text-lg md:text-2xl font-black text-center">
        {translation.main.banner.title}
      </h2>
      <p className="text-center text-sm">{translation.main.banner.subtitle}</p>
      <Button content={translation.main.banner.button} link="/classes" />
    </section>
  );
}

export default Banner2;
