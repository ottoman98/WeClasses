import UserOptions from "./UserOptions";
import { Link } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import {
  IoIosHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import logo from "../../assets/logos/Recurso 6@3x.png";
import LanguageSwitch from "./LanguageSwitch";
import MobileAside from "./MobileAside";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";

function NavBarProfileTeacher() {
  const { translation } = useContext(DataContextLanguage);
  console.log(translation);
  return (
    <nav className="flex  justify-between py-4 px-2">
      <div className=" flex flex-row gap-5">
        <Link to="/">
          <img src={logo} className="w-32" alt="WeClasses Logo" />
        </Link>
        <li className="hidden md:flex items-center">
          <Link to="/classes">{translation.profileNav.nav.find}</Link>
        </li>
      </div>
      <div className="flex md:order-2 gap-10">
        <ul className="hidden md:flex gap-3">
          <li className="flex gap-1 text-blue-900 items-center">
            <CiWallet size={20} />
            {translation.profileNav.nav.balance} : 100$
          </li>
          <li className="flex items-center">
            <span className="w-full px-4 py-2  text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer">
              {translation.profileNav.nav.suscribe}
            </span>
          </li>
          <li className="flex items-center">
            <span className="border-2 py-1 px-2 text-light-blue border-light-blue rounded-lg cursor-pointer hover:scale-105">
              {translation.profileNav.nav.refer}
            </span>
          </li>
        </ul>
        <ul className="flex gap-3 ">
          <li className="hidden md:flex items-center">
            <LanguageSwitch />
          </li>
          <li className="flex items-center mt-1">
            <FaRegMessage className="mt-1" size={14} />
          </li>
          <li className="flex items-center mt-1">
            <IoIosHelpCircleOutline size={20} />
          </li>
          <li className="flex items-center mt-1">
            <IoMdNotificationsOutline size={20} />
          </li>
          <li className="flex items-center mt-1">
            <MobileAside />
          </li>
        </ul>
        <div className="hidden md:block">
          <UserOptions />
        </div>
      </div>
    </nav>
  );
}

export default NavBarProfileTeacher;
