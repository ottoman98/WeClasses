import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { removeCookies } from "../utils/cookies";
import { useContext } from "react";
import { DataContextSession } from "../context/session";
import { Link } from "react-router-dom";

function NavBarProfile() {
  const { setCookie } = useContext(DataContextSession);

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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
            <Dropdown.Header>
              <span className="block text-sm"></span>
              <span className="block truncate text-sm font-medium">
                Osman@WeClasses.we
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/dashboard/resume">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                removeCookies("token");
                setCookie("");
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
}

export default NavBarProfile;
