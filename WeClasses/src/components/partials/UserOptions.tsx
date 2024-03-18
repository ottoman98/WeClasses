import { Dropdown, Avatar } from "flowbite-react";
import { logout } from "../../api/axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { DataContextTabs } from "../../context/studentsTab";

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
      <Link
        onClick={() => {
          setName("home");
        }}
        to="/dashboard/"
      >
        <Dropdown.Item>Home</Dropdown.Item>
      </Link>{" "}
      <Link
        onClick={() => {
          setName("messages");
        }}
        to="/dashboard"
      >
        <Dropdown.Item>Messages</Dropdown.Item>
      </Link>{" "}
      <Link
        onClick={() => {
          setName("lessons");
        }}
        to="/dashboard"
      >
        <Dropdown.Item>My lessons</Dropdown.Item>
      </Link>
      <Link
        onClick={() => {
          setName("settings");
        }}
        to="/dashboard"
      >
        <Dropdown.Item>Settings</Dropdown.Item>
      </Link>
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
