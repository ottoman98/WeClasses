import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";

function NavBarOptionsProfile() {
  const { name, setName } = useContext(DataContextTabs);
  return (
    <>
      <nav className="hidden md:block border  px-4">
        <ul className="flex flex-row gap-6">
          <li
            className={`${
              name == "home" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("home");
            }}
          >
            Home
          </li>
          <li
            className={`${
              name == "messages" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("messages");
            }}
          >
            Messages
          </li>
          <li
            className={`${
              name == "lessons" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("lessons");
            }}
          >
            My lessons
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarOptionsProfile;
