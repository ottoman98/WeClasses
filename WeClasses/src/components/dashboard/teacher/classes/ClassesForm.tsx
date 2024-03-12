import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { classe } from "../../../../types/classeTypes";
import RichEditor from "../../../../utils/RichEditor";
import { postClasse } from "../../../../api/axiosClasses";
import { valid } from "../../../../types/postResponse";

import { DataContextTabsClasses } from "../../../../context/classes/classes";

function ClassesForm() {
  const [response, setResponse] = useState<valid | null>(null);
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<classe>();

  const { setName } = useContext(DataContextTabsClasses);
  if (response?.valid) {
    setName("");
  }

  return (
    <div>
      <button
        className="bg-red-700 p-5"
        onClick={() => {
          setName("");
        }}
      >
        pa atrás
      </button>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await postClasse(x);
          console.log(data.data);
          setResponse(data.data);
        })}
        className="w-full grid grid-cols-2 gap-3  max-w-[90rem] mx-auto px-10 pt-10 pb-16"
      >
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
            type="text"
          />
          <p className="text-xs italic text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="duration" className="text-sm">
            Duration
          </label>
          <select
            {...register("duration", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="duration"
          >
            <option value="">Select Duration</option>
            <option value="0.5">30 minutos</option>
            <option value="1">1 hora</option>
            <option value="2">2 horas</option>
            <option value="3">3 horas</option>
            <option value="4">4 horas</option>
          </select>

          <p className="text-xs italic text-red-500">
            {errors.duration?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="language" className="text-sm">
            Language
          </label>
          <select
            {...register("language", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="language"
          >
            <option value="">Select a language </option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <p className="text-xs italic text-red-500">
            {errors.language?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="link" className="text-sm">
            Link de la clase
          </label>
          <input
            {...register("link", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="link"
            type="url"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="level" className="text-sm">
            Class level
          </label>
          <select
            {...register("level", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
          >
            <option value="">Escoja el nivel de la clase</option>
            <option value="A1-A2">A1-A2</option>
            <option value="B1-B2">B1-B2</option>
            <option value="C1-C2">C1-C2</option>
          </select>
          <p className="text-xs italic text-red-500">{errors.level?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm">
            Precio
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Required" },
              valueAsNumber: true,
            })}
            className="appearance-none border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="price"
            type="number"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm">
            Date
          </label>
          <input
            {...register("date", {
              required: { value: true, message: "Required" },
              valueAsDate: true,
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="date"
            type="datetime-local"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className=" col-span-2 h-[20rem]">
          <label htmlFor="" className="text-sm">
            Descripción
          </label>
          <RichEditor
            set={(editorState: string) => {
              setValue("description", editorState);
            }}
            value={getValues("description")}
          />
        </div>
        <div className="col-span-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClassesForm;
