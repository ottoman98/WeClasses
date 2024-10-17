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
  const minDate = new Date().toISOString().slice(0, 16);

  return (
    <div>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await postClasse(x);
          console.log(x);

          setResponse(data.data);
        })}
        className="w-full grid grid-cols-2 gap-3  max-w-[90rem] mx-auto px-10 pt-10"
      >
        <h2 className="col-span-2 text-3xl font-bold text-light-blue">
          Agregar Clase
        </h2>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.name}
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            type="text"
            placeholder={translation.profiles.teacher.form.name}
          />
          <p className="text-xs italic text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.duration}
          </label>
          <select
            {...register("duration", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.language}
          </label>
          <select
            {...register("language", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label htmlFor="link">{translation.profiles.teacher.form.link}</label>
          <input
            {...register("link", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="link"
            type="url"
            placeholder={translation.profiles.teacher.form.link}
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="level"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.level}
          </label>
          <select
            {...register("level", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.price}
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Required" },
              valueAsNumber: true,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            placeholder={translation.profiles.teacher.form.price}
          />
          <p className="text-xs italic text-red-500">{errors.price?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.date}
          </label>
          <input
            min={minDate}
            {...register("date", {
              required: { value: true, message: "Required" },
              valueAsDate: true,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="date"
            type="datetime-local"
          />
          <p className="text-xs italic text-red-500">{errors.date?.message}</p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {translation.profiles.teacher.form.capacity}
          </label>
          <select
            {...register("capacity", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
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
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
            id="description"
            placeholder={translation.profiles.teacher.form.description}
          ></textarea>
          <p className="text-xs italic text-red-500">
            {errors.description?.message}
          </p>
        </div>
        <div className="col-span-2">
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Submit
          </button>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              setName("");
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClassesForm;
