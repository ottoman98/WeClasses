import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 6@3x.png";
import spainFlag from "../../assets/icons/spain_flag.png";
import germanyFlag from "../../assets/icons/germany_flag.png";
import franceFlag from "../../assets/icons/france_flag.png";
import usaFlag from "../../assets/icons/usa_flag.png";

function NavBarr() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 xs:text-[0.7rem] md:text-[1rem] max-w-[150rem] mx-auto xl:text-[2rem]"
    >
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img
          src={logo}
          className=" w-10 xs:w-16 sm:w-24 md:w-48 lg:w-64"
          alt="Flowbite React Logo"
        />
      </Link>
      <div className="flex md:order-2">
        <Link
          to="#"
          className=" xl:text-[0.5em] flex items-center   font-extrabold    hover:scale-110 bg-blue-950 text-white p-1 rounded-xl "
        >
          Regístrate gratis
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <a href="#">Inicio</a>
        <a href="#">Quienes somos</a>
        <a href="#">Contacto</a>
        <Dropdown label="Idioma" inline>
          <Dropdown.Item className="flex gap-2">
            <img className="w-6" src={spainFlag} alt="" />
            <p>Español</p>
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-2">
            <img className="w-6" src={usaFlag} alt="" />
            <p>Ingles</p>
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-2">
            <img className="w-6" src={franceFlag} alt="" />
            <p>Frances</p>
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-2">
            <img className="w-6" src={germanyFlag} alt="" />
            <p>Alemán</p>
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;
