import { Dropdown, Avatar } from "flowbite-react";
import { logout } from "../../api/axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { DataContextTabs } from "../../context/studentsTab";
import { decodeToken } from "react-jwt";
import { GetProfileTeacher } from "../../api/axiosProfiles";

function UserOptions() {
  const { setCookie, cookie } = useContext(DataContextSession);
  const { setName } = useContext(DataContextTabs);
  const decoded: { id: string } | null = decodeToken(cookie as string);
  const data = GetProfileTeacher(decoded?.id);

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="User settings" img={`${data?.photo}`} rounded />}
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
