import { Outlet } from "react-router-dom";

function StoriesMain() {
  return (
    <main className="py-16 max-w-[80rem] mx-auto">
      <nav className="flex flex-row bg-white py-2 ">
        <select name="idiomas" id="idiomas">
          <option value="">Selecciona un idioma</option>
          <option value="mandarin">Mandarín</option>
          <option value="espanol">Español</option>
          <option value="ingles">Inglés</option>
          <option value="hindustani">Hindustani</option>
          <option value="arabe">Árabe</option>
          <option value="bengali">Bengalí</option>
          <option value="portugues">Portugués</option>
          <option value="ruso">Ruso</option>
          <option value="japones">Japonés</option>
          <option value="frances">Francés</option>
          <option value="aleman">Alemán</option>
          <option value="turco">Turco</option>
          <option value="italiano">Italiano</option>
          <option value="coreano">Coreano</option>
          <option value="vietnamita">Vietnamita</option>
          <option value="tailandes">Tailandés</option>
        </select>
        <ul className="flex flex-row  w-full items-center justify-around">
          <li>Lectura</li>
          <li>Escucha</li>
          <li>Dictados</li>
          <li>Gramatica</li>
          <li>Vocabulario</li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default StoriesMain;
