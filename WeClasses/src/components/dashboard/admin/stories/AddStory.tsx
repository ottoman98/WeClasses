import RichEditor from "../../../../utils/Editor/RichEditor";

function AddStory() {
  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-semibold text-light-blue">Add Story</h2>
      <form className="grid grid-cols-2 w-3/4" action="">
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Titulo
          </label>
          <input
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
            type="text"
          />
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Idioma
          </label>
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
          >
            <option value="">Escoja uno</option>
            <option value="">Español</option>
            <option value="">Ingles</option>
          </select>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Estatus
          </label>
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
          >
            <option value="">Escoja uno</option>
            <option value="">Gratis</option>
            <option value="">Premium</option>
          </select>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Level
          </label>
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
          >
            <option value="">Escoja uno</option>
            <option value="">A1-A2</option>
            <option value="">B1-B2</option>
            <option value="">C1-C2</option>
          </select>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Etiquetas
          </label>
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
          >
            <option value="">Escoja</option>
            <option value="">Dialogo</option>
            <option value="">Lectura</option>
            <option value="">Historia</option>
            <option value="">Etc</option>
          </select>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="col-span-2">
          <RichEditor />
        </div>
        <div className="col-span-2">
          <input
            className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}

export default AddStory;
