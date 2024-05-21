import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import { DataContextLanguage } from "../../../context/language";

function NavBarOptionsProfileTeacher() {
  const { name, setName } = useContext(DataContextTabs);
  const { translation } = useContext(DataContextLanguage);

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
              name == "classes" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("classes");
            }}
          >
            My Classes
          </li>
          <li
            className={`${
              name == "booked" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("booked");
            }}
          >
            Booked
          </li>
          <li
            className={`${
              name == "purchase" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("purchase");
            }}
          >
            Purchased
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarOptionsProfileTeacher;
