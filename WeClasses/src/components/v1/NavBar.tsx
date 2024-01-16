import { Button, Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function NavBarr() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50">
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Link>
      <div className="flex md:order-2 gap-10">
        <Dropdown label="Idioma del sitio" inline>
          <Dropdown.Item>Español</Dropdown.Item>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Arameo</Dropdown.Item>
          <Dropdown.Item>Costeño</Dropdown.Item>
        </Dropdown>
        <Button>Regístrate Gratis</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Quienes somos</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
        <Navbar.Link href="#">Ingresar</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;
