import { Dropdown, Avatar } from "flowbite-react";
import { logout } from "../../api/axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { DataContextTabs } from "../../context/studentsTab";
import { decodeToken } from "react-jwt";
import { GetProfileStudent, GetProfileTeacher } from "../../api/axiosProfiles";

function UserOptions() {
  const { setCookie, cookie } = useContext(DataContextSession);
  const { setName } = useContext(DataContextTabs);
  const decoded: { id: string; level: string } | null = decodeToken(
    cookie as string
  );
  let data;
  let url = "";
  if (decoded?.level == "teacher") {
    data = GetProfileTeacher(decoded?.id);
    url = "/dashboard";
  }
  if (decoded?.level == "student") {
    data = GetProfileStudent(decoded?.id);
    url = "/profile";
  }
  console.log(decoded);

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
        to={url}
      >
        <Dropdown.Item>Home</Dropdown.Item>
      </Link>{" "}
      <Link
        onClick={() => {
          setName("messages");
        }}
        to={url}
      >
        <Dropdown.Item>Messages</Dropdown.Item>
      </Link>{" "}
      <Link
        onClick={() => {
          setName("lessons");
        }}
        to={url}
      >
        <Dropdown.Item>My lessons</Dropdown.Item>
      </Link>
      <Link
        onClick={() => {
          setName("settings");
        }}
        to={url}
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
