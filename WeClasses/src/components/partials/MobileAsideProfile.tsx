import { useContext, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { DataContextSession } from "../../context/session";
import { DataContextTabs } from "../../context/studentsTab";
import { logout } from "../../api/axios";
import { Avatar } from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import LanguageSwitch from "./LanguageSwitch";

function MobileAsideProfile() {
  const [show, setShow] = useState(false);
  const { setCookie } = useContext(DataContextSession);
  const { setName } = useContext(DataContextTabs);
  const { cookie } = useContext(DataContextSession);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width >= 768) {
      setShow(false);
    }
  }, [width]);

  return (
    <div className="text-slate-500">
      <IoMenu
        className="md:hidden "
        size={20}
        onClick={() => {
          setShow(!show);
        }}
      />

      {show ? (
        <div className="w-full fixed right-0 top-0 flex  z-50 h-[100vh]">
          <div
            className=" bg-black opacity-50 w-full"
            onClick={() => {
              setShow(false);
            }}
          ></div>
          <div className=" py-5 px-3 w-56   bg-white">
            <div className="flex justify-between">
              {cookie ? (
                <div className="flex items-center">
                  <Avatar
                    alt="User settings"
                    img="https://i.kym-cdn.com/photos/images/original/002/301/340/1bf.png"
                    rounded
                    size="xs"
                  />
                  <p className="font-bold text-customBlack">El osman</p>
                </div>
              ) : (
                <Link
                  className="flex  hover:text-blue-950"
                  to="/login"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <FaRegUserCircle size={18} />
                  <span className="rounded-md px-1">Login</span>
                </Link>
              )}

              <IoMdClose
                className="hover:text-blue-950 rounded-md"
                size={20}
                onClick={() => {
                  setShow(!show);
                }}
              />
            </div>
            {cookie ? (
              <div className="flex flex-col gap-1">
                <hr className="h-px my-2 " />
                <Link
                  className="hover:text-blue-950 rounded-md px-1"
                  onClick={() => {
                    setName("home");
                    setShow(false);
                  }}
                  to="/dashboard/"
                >
                  <li>Home</li>
                </Link>
                <Link
                  className="hover:text-blue-950 rounded-md px-1"
                  onClick={() => {
                    setName("messages");
                  }}
                  to="/dashboard"
                >
                  Messages
                </Link>{" "}
                <Link
                  className="hover:text-blue-950 rounded-md px-1"
                  onClick={() => {
                    setName("lessons");
                  }}
                  to="/dashboard"
                >
                  My lessons
                </Link>
                <Link
                  className="hover:text-blue-950 rounded-md px-1"
                  onClick={() => {
                    setName("settings");
                  }}
                  to="/dashboard"
                >
                  Settings
                </Link>
                <li
                  className="hover:text-blue-950 rounded-md px-1"
                  onClick={() => {
                    setCookie("");
                    logout();
                  }}
                >
                  Log out
                </li>
              </div>
            ) : (
              <ul className="flex flex-col">
                <hr className="h-px my-2 " />

                <li className="flex items-center hover:text-blue-950 rounded-md px-1">
                  <Link
                    to="/register"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            )}
            <div className=" flex flex-col  h-full  justify-between pb-16">
              <ul className="flex flex-col gap-1">
                <hr className="h-px my-2 " />

                <li className="flex items-center  hover:text-blue-950 px-1">
                  <Link
                    to="classes"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Find a teacher
                  </Link>
                </li>
                <li className="flex items-center  hover:text-blue-950 px-1">
                  <Link
                    to="/register_tutor"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Become a teacher
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShow(false);
                  }}
                  className="flex items-center  hover:text-blue-950 px-1"
                >
                  Help
                </li>
              </ul>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MobileAsideProfile;
