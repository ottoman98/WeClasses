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
  let optionsT = "hidden";
  let optionsS = "hidden";
  if (decoded?.level == "teacher") {
    data = GetProfileTeacher(decoded?.id);
    optionsT = "";
    optionsS = "hidden";

    url = "/dashboard";
  }
  if (decoded?.level == "student") {
    data = GetProfileStudent(decoded?.id);
    optionsS = "";
    optionsT = "hidden";

    url = "/profile";
  }

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
      <Dropdown.Item className={`${optionsT}`}>
        <Link
          onClick={() => {
            setName("classes");
          }}
          to={url}
        >
          Classes
        </Link>{" "}
      </Dropdown.Item>
      <Dropdown.Item className={`${optionsT}`}>
        <Link
          onClick={() => {
            setName("classes");
          }}
          to={url}
        >
          Booked
        </Link>
      </Dropdown.Item>
      <Dropdown.Item className={`${optionsS}`}>
        <Link
          onClick={() => {
            setName("booked");
          }}
          to={url}
        >
          My lessons
        </Link>
      </Dropdown.Item>
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
          document.cookie =
            "token" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          logout();
        }}
      >
        Log out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default UserOptions;
