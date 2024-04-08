import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";

function NavBarOptionsProfileTeacher() {
  const { name, setName } = useContext(DataContextTabs);

  return (
    <>
      <nav className="hidden md:block border  px-4">
        <ul className="flex flex-row gap-6">
          <li
            className={`${
              name == "home" ? "border-b-4 border-light-blue" : ""
            } py-1`}
            onClick={() => {
              setName("home");
            }}
          >
            Home
          </li>
          <li
            className={`${
              name == "messages" ? "border-b-4 border-light-blue" : ""
            } py-1`}
            onClick={() => {
              setName("messages");
            }}
          >
            Messages
          </li>
          <li
            className={`${
              name == "classes" ? "border-b-4 border-light-blue" : ""
            } py-1`}
            onClick={() => {
              setName("classes");
            }}
          >
            My Classes
          </li>
          <li
            className={`${
              name == "booked" ? "border-b-4 border-light-blue" : ""
            } py-1`}
            onClick={() => {
              setName("booked");
            }}
          >
            Booked
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarOptionsProfileTeacher;
