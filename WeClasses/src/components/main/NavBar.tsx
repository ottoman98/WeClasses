import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 7@3x.png";
import spainFlag from "../../assets/icons/spain_flag.png";
//import germanyFlag from "../../assets/icons/germany_flag.png";
//import franceFlag from "../../assets/icons/france_flag.png";
import usaFlag from "../../assets/icons/usa_flag.png";
import { DataContextLanguage } from "../../context/language";
import { useContext } from "react";
import spanish from "../../translations/spanish";
import english from "../../translations/english";
import { dataContextLanguage } from "../../types/contextTypes";

function NavBarr() {
  const { translation, setTranslation } =
    useContext<dataContextLanguage>(DataContextLanguage);

  return (
    <>
      <nav className="flex p-3 justify-between border-b-[1px] text-slate-500 ">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>

        <ul className=" flex items-center  gap-5">
          <li className="flex items-center  hover:text-blue-950">
            <Dropdown label={translation.nav.language} inline>
              <Dropdown.Item
                className="text-xs  hover:text-blue-950 text-slate-500"
                onClick={() => {
                  setTranslation(spanish);
                }}
              >
                <img className="w-5 mr-2" src={spainFlag} />
                {translation.languages.spanish}
              </Dropdown.Item>

              <Dropdown.Item
                className="text-xs  hover:text-blue-950 text-slate-500"
                onClick={() => {
                  setTranslation(english);
                }}
              >
                <img className="w-5 mr-2" src={usaFlag} />
                {translation.languages.english}
              </Dropdown.Item>
            </Dropdown>
          </li>
          <li className="flex items-center  hover:text-blue-950">
            Find a teacher
          </li>

          <li className="flex items-center  hover:text-blue-950">
            Become a teacher
          </li>
          <li className="flex items-center  hover:text-blue-950">
            {translation.nav.help}{" "}
          </li>
        </ul>

        <ul className="flex items-center  gap-5">
          <li className="flex items-center   text-blue-950">
            <Link to="/login">{translation.nav.login}</Link>
          </li>
          <li className="flex items-center text-blue-950">
            <Link to="/register">{translation.nav.register}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarr;
