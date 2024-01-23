import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import spainFlag from "../../assets/spain_flag.png";
import germanyFlag from "../../assets/germany_flag.png";
import franceFlag from "../../assets/france_flag.png";
import usaFlag from "../../assets/usa_flag.png";

function NavBarr() {
  return (
    <Navbar fluid rounded className="static top-0 z-50 md:sticky ">
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src={logo} className="w-10 md:w-20 " alt="Flowbite React Logo" />
      </Link>
      <div className="flex md:order-2 ">
        <Link
          to="#"
          className=" flex items-center  text-[0.7rem] font-extrabold  md:text-lg  hover:scale-110 md:bg-blue-950 md:text-white p-1 rounded-xl "
        >
          Regístrate Gratis
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <a href="#">Home</a>
        <a href="#">Quienes somos</a>
        <a href="#">Contacto</a>
        <Dropdown label="Idioma" inline>
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;
