import { Avatar, Dropdown } from "flowbite-react";
import { removeCookies } from "../../../utils/cookies";
import { useContext } from "react";
import { DataContextSession } from "../../../context/session";
import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import logo from "../../../assets/logos/Recurso 6@3x.png";
import LanguageSwitch from "../../partials/LanguageSwitch";

function NavBarProfileStudent() {
  const { setCookie } = useContext(DataContextSession);

  return (
    <>
      <nav className="flex  justify-between py-4 px-2">
        <div className=" flex flex-row gap-5">
          <Link to="/">
            <img src={logo} className="w-32" alt="WeClasses Logo" />
          </Link>
          <li className="flex items-center">
            <Link to="/classes">Find Tutors</Link>
          </li>
        </div>
        <div className="flex md:order-2 gap-10">
          <ul className="flex gap-3">
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
            <li className="flex items-center">
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
          </ul>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://i.kym-cdn.com/photos/images/original/002/301/340/1bf.png"
                rounded
              />
            }
          >
            <Dropdown.Item>
              <Link to="/dashboard/resume">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/dashboard/resume">Messages</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/dashboard/resume">My lessons</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/dashboard/resume">Saved Tutors</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                removeCookies("token");
                setCookie("");
              }}
            >
              Log out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}

export default NavBarProfileStudent;
