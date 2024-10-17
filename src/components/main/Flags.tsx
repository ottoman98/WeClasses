import usaFlag from "../../assets/icons/usa_flag.png";
import germanyFlag from "../../assets/icons/germany_flag.png";
import spainFlag from "../../assets/icons/spain_flag.png";
import franceFlag from "../../assets/icons/france_flag.png";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";
import { Link } from "react-router-dom";

function FlagsBar() {
  const { translation } = useContext(DataContextLanguage);
  console.log(translation.languages);
  return (
    <section className="pt-5 max-w-[80rem] mx-auto ">
      <div className="flex justify-around">
        <Link to="/classes">
          <div className="flex flex-col p-2   items-center">
            <img
              className="object-contain xs:w-5 md:w-10 xl:w-20"
              src={usaFlag}
              alt=""
            />
            <span className="text-center text-gray-500 ">
              {translation.languages.english}
            </span>
          </div>
        </Link>
        <Link to="/classes">
          <div className="flex flex-col p-2 items-center">
            <img
              className="object-contain xs:w-5 md:w-10 xl:w-20"
              src={germanyFlag}
              alt=""
            />
            <span className="text-center text-gray-500">
              {translation.languages.german}
            </span>
          </div>
        </Link>
        <Link to="/classes">
          <div className="flex flex-col p-2 items-center">
            <img
              className="object-contain xs:w-5 md:w-10 xl:w-20"
              src={spainFlag}
              alt=""
            />
            <span className="text-center text-gray-500">
              {translation.languages.spanish}
            </span>
          </div>
        </Link>
        <Link to="/classes">
          <div className="flex flex-col p-2  items-center">
            <img
              className="object-contain xs:w-5 md:w-10 xl:w-20"
              src={franceFlag}
              alt=""
            />
            <span className="text-center text-gray-500">
              {translation.languages.french}
            </span>
          </div>
        </Link>
      </div>

      <small className="block text-center py-5 text-base font-semibold">
        {translation.main.flags.text}
      </small>
    </section>
  );
}

export default FlagsBar;
