import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContextLanguage } from "../../context/language";

function Discount() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="bg-blue-950 text-white  flex gap-5 p-6 md:p-16 justify-around xs:text-[0.5rem] md:text-[1rem] xl:text-[1.5rem]">
      <div>
        <h3 className="font-black text-[2em]">{translation.discount.title}</h3>
        <p className="xs:text-[1.2em] text-[0.5em] ">
          {translation.discount.subtitle}
        </p>
      </div>
      <Link
        to=""
        className="bg-white h-full xs:p-1 p-3 w-1/5 my-auto text-[0.8em] text-center    text-blue-700 duration-500 hover:bg-black hover:text-white rounded-lg border-2 border-black font-bold"
      >
        {translation.discount.button}
      </Link>
    </section>
  );
}

export default Discount;
