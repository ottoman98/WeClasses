import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { removeCookies } from "../../utils/cookies";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 6@3x.png";

function NavBarProfile() {
  const { setCookie } = useContext(DataContextSession);

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src={logo}
            className="  xs:w-20  md:w-32 lg:w-40"
            alt="WeClasses Logo"
          />
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
              <Link to="/dashboard/resume">Profile</Link>
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
        </div>
      </Navbar>
    </>
  );
}

export default NavBarProfile;
