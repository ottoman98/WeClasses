import { postStory } from "../../../../api/axiosStories";
import { story } from "../../../../types/storyTypes";
import RichEditor from "../../../../utils/Editor/RichEditor";
import { useForm } from "react-hook-form";

function AddStory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<story>();

  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-semibold text-light-blue">Add Story</h2>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await postStory(x);
          console.log(data);
        })}
        className="grid grid-cols-2 w-3/4 gap-2"
        action=""
      >
        <div className="flex flex-col col-span-2 ">
          <label htmlFor="name" className="text-sm">
            Titulo
          </label>
          <input
            {...register("title", {
              required: { value: true, message: "Requerido" },
              minLength: {
                value: 5,
                message: "debe ser superior a 5 la longitud sea serio",
              },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
            type="text"
          />
          <p className="text-xs italic text-red-500">{errors.title?.message}</p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="language" className="text-sm">
            Idioma
          </label>
          <select
            {...register("language", {
              required: { value: true, message: "Requerido" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="language"
          >
            <option value="">Escoja uno</option>
            <option value="es">Español</option>
            <option value="en">Ingles</option>
          </select>
          <p className="text-xs italic text-red-500">
            {errors.language?.message}
          </p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="status" className="text-sm">
            Estatus
          </label>
          <select
            {...register("status", {
              required: { value: true, message: "Requerido" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="status"
          >
            <option value="">Escoja uno</option>
            <option value="free">Gratis</option>
            <option value="premium">Premium</option>
          </select>
          <p className="text-xs italic text-red-500">
            {errors.language?.message}
          </p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="level" className="text-sm">
            Level
          </label>
          <select
            {...register("level", {
              required: { value: true, message: "Requerido" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="level"
          >
            <option value="">Escoja uno</option>
            <option value="A1-A2">A1-A2</option>
            <option value="B1-B2">B1-B2</option>
            <option value="C1-C2">C1-C2</option>
          </select>
          <p className="text-xs italic text-red-500">{errors.level?.message}</p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="labels" className="text-sm">
            Etiquetas
          </label>
          <select
            {...register("labels", {
              required: { value: true, message: "Requerido" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="labels"
          >
            <option value="">Escoja</option>
            <option value="Dialogo">Dialogo</option>
            <option value="Lectura">Lectura</option>
            <option value="Historia">Historia</option>
            <option value="Etc">Etc</option>
          </select>
          <p className="text-xs italic text-red-500">
            {errors.labels?.message}
          </p>
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
