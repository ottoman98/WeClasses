import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { classe } from "../../../../types/classeTypes";
import { postClasse } from "../../../../api/axiosClasses";
import { valid } from "../../../../types/postResponse";

import { DataContextTabsClasses } from "../../../../context/classes/classes";
import { DataContextTabs } from "../../../../context/studentsTab";
import { DataContextLanguage } from "../../../../context/language";

function ClassesForm() {
  const [response, setResponse] = useState<valid | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<classe>();
  const { translation } = useContext(DataContextLanguage);

  const { setName } = useContext(DataContextTabsClasses);
  const tabs = useContext(DataContextTabs).setName;
  if (response?.valid) {
    tabs("loading");
    setName("");
    setTimeout(() => {
      tabs("classes");
    }, 1000);
  }

  return (
    <div>
      <button
        className="bg-red-700 p-5"
        onClick={() => {
          setName("");
        }}
      >
        {translation.profiles.teacher.form.back}
      </button>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await postClasse(x);
          console.log(x);

          setResponse(data.data);
        })}
        className="w-full grid grid-cols-2 gap-3  max-w-[90rem] mx-auto px-10 pt-10 pb-16"
      >
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            {translation.profiles.teacher.form.name}
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="name"
            type="text"
            placeholder={translation.profiles.teacher.form.name}
          />
          <p className="text-xs italic text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="duration" className="text-sm">
            {translation.profiles.teacher.form.duration}
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
            {translation.profiles.teacher.form.language}
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
            {translation.profiles.teacher.form.link}
          </label>
          <input
            {...register("link", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="link"
            type="url"
            placeholder={translation.profiles.teacher.form.link}
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="level" className="text-sm">
            {translation.profiles.teacher.form.level}
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
            {translation.profiles.teacher.form.price}
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Required" },
              valueAsNumber: true,
            })}
            className="appearance-none border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="price"
            type="number"
            placeholder={translation.profiles.teacher.form.price}
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm">
            {translation.profiles.teacher.form.date}
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
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm">
            {translation.profiles.teacher.form.capacity}
          </label>
          <select
            {...register("capacity", {
              required: { value: true, message: "Required" },
            })}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="date"
          >
            <option value="">seleccione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <p className="text-xs italic text-red-500">
            {errors.capacity?.message}
          </p>
        </div>

        <div className=" col-span-2 h-[20rem]">
          <label htmlFor="" className="text-sm flex flex-col">
            {translation.profiles.teacher.form.description}
          </label>
          <textarea
            {...register("description", {
              minLength: {
                value: 10,
                message: "min 10 caracteres",
              },
              required: { value: true, message: "Required" },
            })}
            className="appearance-none border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="description"
            placeholder={translation.profiles.teacher.form.description}
          ></textarea>
          <p className="text-xs italic text-red-500">
            {errors.description?.message}
          </p>
        </div>
        <div className="col-span-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            {translation.profiles.teacher.form.button}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClassesForm;
