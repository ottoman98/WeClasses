import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";

import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineClass } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { DataContextTabsClasses } from "../../../context/classes/classes";
function AsideAdmin() {
  const { setName } = useContext(DataContextTabs);
  const classe = useContext(DataContextTabsClasses).setName;

  return (
    <>
      <ul className="px-4 w-44 flex flex-col gap-4 pt-10  ">
        <li
          className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105 border-b"
          onClick={() => {
            setName("home");
          }}
        >
          <HiChartPie className="text-light-blue" />
          <span>Dashboard</span>
        </li>
        <li
          className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105 border-b"
          onClick={() => {
            setName("messages");
          }}
        >
          <HiInbox className="text-light-blue" />
          <span>Messages</span>
        </li>
        <li className=" border-b">
          <span className="flex flex-row items-center gap-1  ">
            <HiUser className="text-light-blue" />
            Users
          </span>
          <ul className="px-4 py-2 text-light-blue font-light ">
            <li
              className="cursor-pointer flex flex-row items-center gap-1 hover:scale-105"
              onClick={() => {
                setName("applicants");
              }}
            >
              <span>Applicants</span>
            </li>
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("students");
              }}
            >
              <span>Students</span>
            </li>
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("teachers");
              }}
            >
              <span>Teachers</span>
            </li>
          </ul>
        </li>

        <li className="border-b">
          <li className="flex flex-row items-center gap-1">
            <MdOutlineClass className="text-light-blue" /> Classes
          </li>
          <ul className="px-4 py-2 font-light text-light-blue">
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("add");
              }}
            >
              <span>Add Class</span>
            </li>
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("all");
                classe("");
              }}
            >
              <span>All Classes</span>
            </li>
          </ul>
        </li>
        <li className="border-b">
          <li className="flex flex-row items-center gap-1">
            <LuFileSpreadsheet className="text-light-blue" /> Stories
          </li>
          <ul className="px-4 py-2 text-light-blue font-light">
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("addStory");
              }}
            >
              <span>Add Stories</span>
            </li>
            <li
              className="cursor-pointer flex flex-row items-center gap-1  hover:scale-105"
              onClick={() => {
                setName("allStories");
              }}
            >
              <span>All Stories</span>
            </li>
          </ul>
        </li>
        <li
          className="cursor-pointer flex flex-row items-center  gap-1  hover:scale-105"
          onClick={() => {
            setName("settings");
          }}
        >
          <IoMdSettings className="text-light-blue" /> <span> Settings</span>
        </li>
      </ul>
    </>
  );
}

export default AsideAdmin;
