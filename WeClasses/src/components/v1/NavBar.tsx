import { Button, Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import spainFlag from "../../assets/spain_flag.png";
import germanyFlag from "../../assets/germany_flag.png";
import franceFlag from "../../assets/france_flag.png";
import usaFlag from "../../assets/usa_flag.png";

function NavBarr() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50">
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Link>
      <div className="flex md:order-2 gap-10">
        <Dropdown label="Idioma del sitio" inline>
          <Dropdown.Item>
            <img className="w-6" src={spainFlag} alt="" />
            <p>Español</p>
          </Dropdown.Item>
          <Dropdown.Item>
            <img className="w-6" src={usaFlag} alt="" />
            <p>English</p>
          </Dropdown.Item>
          <Dropdown.Item>
            <img className="w-6" src={franceFlag} alt="" />
            <p>French</p>
          </Dropdown.Item>
          <Dropdown.Item>
            <img className="w-6" src={germanyFlag} alt="" />
            <p>German</p>
          </Dropdown.Item>
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;
