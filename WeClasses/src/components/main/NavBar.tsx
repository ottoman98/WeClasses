import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 7@3x.png";
import { decodeToken } from "react-jwt";

//import germanyFlag from "../../assets/icons/germany_flag.png";
//import franceFlag from "../../assets/icons/france_flag.png";

import { DataContextLanguage } from "../../context/language";
import { useContext } from "react";

import { dataContextLanguage } from "../../types/contextTypes";
import LanguageSwitch from "../partials/LanguageSwitch";
import { DataContextSession } from "../../context/session";
import UserOptions from "../partials/UserOptions";
import MobileAside from "../partials/MobileAside";

function NavBarr() {
  const { translation } = useContext<dataContextLanguage>(DataContextLanguage);
  const { cookie } = useContext(DataContextSession);
  const decoded: { level: string } | null = decodeToken(cookie as string);

  return (
    <>
      <nav className="flex p-3 justify-between border-b-[1px] text-slate-500 ">
        <Link to="/">
          <img className="w-20 md:w-32" src={logo} alt="" />
        </Link>
        <ul className="hidden md:flex items-center  gap-5">
          <li className="flex items-center  hover:text-blue-950"></li>
          <li
            className="flex items-center  hover:text-blue-950"
            hidden={decoded?.level == "teacher" ? true : false}
          >
            <Link to="classes">{translation.nav.find}</Link>
          </li>
          <li className="flex items-center  hover:text-blue-950">
            <Link to="/register_tutor"> {translation.nav.become}</Link>
          </li>
          <li className="flex items-center  hover:text-blue-950">
            {translation.nav.help}
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="hidden md:flex gap-5">
            {!cookie ? (
              <>
                <li className="flex items-center   text-blue-950">
                  <Link to="/login">{translation.nav.login}</Link>
                </li>
                <li className="flex items-center text-blue-950">
                  <Link to="/register">{translation.nav.register}</Link>
                </li>
                <LanguageSwitch />
              </>
            ) : (
              <UserOptions />
            )}
          </li>
          <MobileAside />
        </ul>
      </nav>
    </>
  );
}

export default NavBarr;
