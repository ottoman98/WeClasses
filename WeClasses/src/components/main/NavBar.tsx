import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 6@3x.png";
import spainFlag from "../../assets/icons/spain_flag.png";
//import germanyFlag from "../../assets/icons/germany_flag.png";
//import franceFlag from "../../assets/icons/france_flag.png";
import usaFlag from "../../assets/icons/usa_flag.png";
import { DataContextLanguage } from "../../context/language";
import { useContext } from "react";
import spanish from "../../translations/spanish";
import english from "../../translations/english";
import { dataContextLanguage } from "../../types/contextTypes";

function NavBarr() {
  const { translation, setTranslation } =
    useContext<dataContextLanguage>(DataContextLanguage);

  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 xs:text-[0.7rem] md:text-[1rem] max-w-[150rem] mx-auto xl:text-[2rem]"
    >
      <Link to="/">
        <img
          src={logo}
          className="  xs:w-24  md:w-40 lg:w-56"
          alt="Flowbite React Logo"
        />
      </Link>
      <div className="flex md:order-2 gap-3">
        <Link
          to="/register"
          className=" xl:text-[0.5em] flex items-center   font-extrabold    hover:scale-110 bg-blue-950 text-white p-1 rounded-xl "
        >
          {translation.nav.register}
        </Link>
        <Link
          to="/login"
          className=" xl:text-[0.5em] flex items-center   font-extrabold    hover:scale-110 bg-blue-950 text-white p-1 rounded-xl "
        >
          {translation.nav.login}
        </Link>
        <div className="text-[1rem]">
          <img
            src={translation.nav.language == "English" ? usaFlag : spainFlag}
            alt="uwu"
            className="w-6"
          />
          <Dropdown label={translation.nav.language} inline>
            <Dropdown.Item
              className="flex gap-2"
              onClick={() => {
                setTranslation(spanish);
              }}
            >
              <img className="w-6" src={spainFlag} alt="" />
              <p>{translation.languages.spanish}</p>
            </Dropdown.Item>
            <Dropdown.Item
              className="flex gap-2"
              onClick={() => {
                setTranslation(english);
              }}
            >
              <img className="w-6" src={usaFlag} alt="" />
              <p>{translation.languages.english}</p>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <a href="#">{translation.nav.home}</a>
        <a href="#">{translation.nav.help}</a>
        <a href="#">Stories</a>
        <a href="#">Pal de chicles</a>

        {/*<a href="#">{translation.nav.about}</a>*/}
        {/*<a href="#">{translation.nav.contact}</a> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;
