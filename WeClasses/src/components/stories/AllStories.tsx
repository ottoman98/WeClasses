import { Link } from "react-router-dom";
import { GetAllStories } from "../../api/axiosStories";
import Loading from "../partials/Loading";

function AllStories() {
  const data = GetAllStories();
  console.log(data);
  return (
    <main className="py-32">
      <nav className="flex flex-row">
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
        <ul className="flex flex-row bg-red-300 w-full items-center justify-around">
          <li>Lectura</li>
          <li>Escucha</li>
          <li>Dictados</li>
          <li>Gramatica</li>
          <li>Vocabulario</li>
        </ul>
      </nav>
      <section className="flex flex-col">
        <h2 className="text-4xl font-semibold">All Stories</h2>
        <div className="grid grid-cols-2 gap-2">
          {!data ? (
            <Loading />
          ) : (
            data.map((x) => {
              return (
                <div className="bg-blue-600">
                  <Link to={`/story/${x._id}`}>
                    <h3>{x.title}</h3>
                  </Link>
                  <div
                    className="bg-green-300 text-red-500"
                    dangerouslySetInnerHTML={{
                      __html: x.dialogue,
                    }}
                  ></div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}

export default AllStories;
