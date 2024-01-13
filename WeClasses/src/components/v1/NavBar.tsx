import logo from "../../assets/logo.png";
import { FaFlagUsa } from "react-icons/fa6";
function NavBar() {
  return (
    <>
      <header className="flex justify-between bg-red-700 py-8 px-3">
        <div className="flex justify-between">
          <img className="w-10" src={logo} alt="WeClasses logo" />
          <h1 className="text-xl font-bold text-white">WE CLASSES</h1>
        </div>
        <nav>
          <ul className="flex gap-10 font-semibold">
            <li className="p-2 hover:text-zinc-200">Quienes Somos</li>
            <li className="p-2 hover:text-zinc-200">Modo oscuro</li>
            <li className="p-2">
              <ul className="group relative">
                <li>Idioma</li>
                <div className="absolute hidden group-hover:block bg-teal-600 pt-12  pb-6 z-10">
                  <li className="flex px-10">
                    <FaFlagUsa /> <p>English</p>
                  </li>
                  <li className="flex px-10">
                    <FaFlagUsa /> <p>Spanish</p>
                  </li>
                </div>
              </ul>
            </li>
            <li className="p-2 hover:text-zinc-200">Ingresar</li>
            <li className="p-2 rounded-full bg-lime-400 hover:scale-110">
              Regístrate Gratis
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
