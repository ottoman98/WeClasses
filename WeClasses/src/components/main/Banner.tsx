import { useContext } from "react";

import { DataContextLanguage } from "../../context/language";
import Button from "../partials/Button";

function Banner2() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="bg-light-blue text-white   flex flex-col justify-center items-center gap-4 p-5 xs:text-[0.5rem] md:text-[1rem] xl:text-[1.5rem]">
      <h2 className="xs:text-[2em] md:text-2xl font-black">
        {translation.banner.title}
      </h2>
      <p className="xs:text-[1.2em] xl:text-[0.8em]">
        {translation.banner.subtitle}
      </p>
      <Button content={translation.banner.button} link="/classes" />
    </section>
  );
}

export default Banner2;
