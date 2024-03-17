import { Dropdown, Avatar } from "flowbite-react";
import { logout } from "../api/axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContextSession } from "../context/session";
import { DataContextTabs } from "../context/studentsTab";

function UserOptions() {
  const { setCookie } = useContext(DataContextSession);
  const { setName } = useContext(DataContextTabs);
  return (
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
        <Link
          onClick={() => {
            setName("home");
          }}
          to="/dashboard/"
        >
          Home
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link
          onClick={() => {
            setName("messages");
          }}
          to="/dashboard"
        >
          Messages
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link
          onClick={() => {
            setName("lessons");
          }}
          to="/dashboard"
        >
          My lessons
        </Link>
      </Dropdown.Item>

      <Dropdown.Item>
        <Link
          onClick={() => {
            setName("settings");
          }}
          to="/dashboard"
        >
          Settings
        </Link>
      </Dropdown.Item>

      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => {
          setCookie("");

          logout();
        }}
      >
        Log out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default UserOptions;
