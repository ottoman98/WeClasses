import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";

function NavBarOptionsProfile() {
  const { setName } = useContext(DataContextTabs);
  return (
    <>
      <nav className="border py-2 px-4">
        <ul className="flex flex-row gap-6">
          <li
            onClick={() => {
              setName("home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setName("messages");
            }}
          >
            Messages
          </li>
          <li
            onClick={() => {
              setName("lessons");
            }}
          >
            My lessons
          </li>
          <li
            onClick={() => {
              setName("settings");
            }}
          >
            Settings
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarOptionsProfile;
