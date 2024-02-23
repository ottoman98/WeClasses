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
      <nav className="flex  justify-between py-4 px-2 text-slate-500 ">
        <div className=" flex flex-row gap-5">
          <img src={logo} className="w-32" alt="WeClasses Logo" />
          <li className="flex items-center">Find Tutor</li>
        </div>
        <div className="flex md:order-2 gap-5">
          <ul className="flex gap-3">
            <li className="flex">
              <FcMoneyTransfer />
              Balance : 100$
            </li>
            <li>Subscribe</li>
            <li>Refer a Friend</li>
          </ul>
          <ul className="flex gap-5 ">
            <li>
              <LanguageSwitch />
            </li>
            <li>
              <FcComments />
            </li>
            <li>
              <IoIosHelpCircle />
            </li>
            <li>
              <IoMdNotifications />
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
            <Dropdown.Header>
              <span className="block text-sm">name</span>
              <span className="block truncate text-sm font-medium">
                Osman@WeClasses.we
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/dashboard/resume">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                removeCookies("token");
                setCookie("");
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}

export default NavBarProfileStudent;
