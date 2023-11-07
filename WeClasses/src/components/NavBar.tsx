import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="We Classes"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to="/">We Classes</Link>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active>
            <Link to="/">Home</Link>
          </Navbar.Link>

          <Navbar.Link>
            <Dropdown label="Contact Us" inline>
              <Dropdown.Item>
                <Link to="/students"> Students</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to="/teachers"> Teachers</Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>More...</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="about"> About Us</Link>
          </Navbar.Link>

          <Navbar.Link>
            <Link to="/login">Login/Register</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;