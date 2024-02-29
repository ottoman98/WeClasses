import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 7@3x.png";

//import germanyFlag from "../../assets/icons/germany_flag.png";
//import franceFlag from "../../assets/icons/france_flag.png";

import { DataContextLanguage } from "../../context/language";
import { useContext } from "react";

import { dataContextLanguage } from "../../types/contextTypes";
import LanguageSwitch from "../partials/LanguageSwitch";

function NavBarr() {
  const { translation } = useContext<dataContextLanguage>(DataContextLanguage);

  return (
    <>
      <nav className="flex p-3 justify-between border-b-[1px] text-slate-500 ">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>

        <ul className=" flex items-center  gap-5">
          <li className="flex items-center  hover:text-blue-950">
            <LanguageSwitch />
          </li>
          <li className="flex items-center  hover:text-blue-950">
            Find a teacher
          </li>

          <li className="flex items-center  hover:text-blue-950">
            <Link to="/register_tutor"> Become a teacher</Link>
          </li>
          <li className="flex items-center  hover:text-blue-950">
            {translation.nav.help}
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
