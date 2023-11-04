import { Dropdown, Navbar } from "flowbite-react";
import { AiOutlineLogin } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WeClasses
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <p> Login/Register</p>

          <Dropdown arrowIcon={false} inline label={<AiOutlineLogin />}>
            <Dropdown.Header>
              <span className="block text-sm">Osman </span>
              <span className="block truncate text-sm font-medium">
                osman@osman.osman
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="#">Quienes Somos</Navbar.Link>
          <Dropdown
            arrowIcon={true}
            inline
            label={"Contact Us"}
            placement="bottom"
          >
            <Dropdown.Item>Students</Dropdown.Item>
            <Dropdown.Item>Teachers</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>Juegos de azar y mujerzuleas</Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
