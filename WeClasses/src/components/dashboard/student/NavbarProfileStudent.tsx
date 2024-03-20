import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import logo from "../../../assets/logos/Recurso 6@3x.png";
import LanguageSwitch from "../../partials/LanguageSwitch";
import UserOptions from "../../partials/UserOptions";
import MobileAsideProfileStudent from "../../partials/MobileAsideProfileStudent";

function NavBarProfileStudent() {
  return (
    <>
      <nav className="flex  justify-between py-4 px-2">
        <div className=" flex flex-row gap-5">
          <Link to="/">
            <img src={logo} className="w-32" alt="WeClasses Logo" />
          </Link>
          <li className="hidden md:flex items-center">
            <Link to="/classes">Find Tutors</Link>
          </li>
        </div>
        <div className="flex md:order-2 gap-10">
          <ul className="hidden md:flex gap-3">
            <li className="flex gap-1 text-blue-900 items-center">
              <FcMoneyTransfer size={20} className="mt-1" />
              Balance : 100$
            </li>
            <li className="flex items-center">
              <span className="border-2 py-1 px-2 border-light-blue rounded-lg">
                Subscribe
              </span>
            </li>
            <li className="flex items-center">
              <span className="border-2 py-1 px-2 border-light-blue rounded-lg">
                Refer a Friend
              </span>
            </li>
          </ul>
          <ul className="flex gap-5 ">
            <li className="hidden md:flex items-center">
              <LanguageSwitch />
            </li>
            <li className="flex items-center mt-1">
              <FcComments size={20} />
            </li>
            <li className="flex items-center mt-1">
              <IoIosHelpCircle size={20} />
            </li>
            <li className="flex items-center mt-1">
              <IoMdNotifications size={20} />
            </li>
            <li className="flex items-center mt-1">
              <MobileAsideProfileStudent />
            </li>
          </ul>
          <div className="hidden md:block">
            <UserOptions />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarProfileStudent;
