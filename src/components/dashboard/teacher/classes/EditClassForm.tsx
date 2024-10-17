import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { classe } from "../../../../types/classeTypes";
import { GetClasseById, putClasse } from "../../../../api/axiosClasses";
import { valid } from "../../../../types/postResponse";
import { useNavigate } from "react-router-dom";
import { DataContextTabsClasses } from "../../../../context/classes/classes";
import getFormattedDateTime from "../../../../utils/FormattedDateTime";
import { DataContextTabs } from "../../../../context/studentsTab";
function EditClassesForm() {
  const { name, setName } = useContext(DataContextTabsClasses);
  const id = name;

  const data: classe | undefined = GetClasseById(id);

  const [response, setResponse] = useState<valid | null>(null);
  const tabs = useContext(DataContextTabs).setName;
  if (response?.valid) {
    tabs("loading");
    setName("");
    setTimeout(() => {
      tabs("classes");
    }, 1000);
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<classe>();

  const navigate = useNavigate();
  useEffect(() => {
    if (response && response.message) {
      navigate("/dashboard/classes/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("language", data.language);
      setValue("duration", data.duration);
      setValue("link", data.link);
      setValue("level", data.level);
      setValue("description", data.description);
      setValue("price", data.price);
      setValue("capacity", data.capacity);
      const date = new Date(data.date);
      const definite = getFormattedDateTime(date);
      setValue("date", definite);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await putClasse(id, x);
          setResponse(data.data);
        })}
        className="w-full grid grid-cols-2 gap-3  max-w-[90rem] mx-auto px-10 pt-10 pb-16"
      >
        <h2 className="col-span-2 text-3xl font-bold text-light-blue">
          Editar Clase
        </h2>
        <div className="flex flex-col ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            type="text"
          />
          <p className="text-xs italic text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duration
          </label>
          <select
            disabled
            {...register("duration", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="duration"
          >
            <option value="">seleccione eso ombe</option>
            <option value="0.5">30 minutos</option>
            <option value="1">1 hora</option>
            <option value="2">2 horas</option>
            <option value="3">3 horas</option>
            <option value="4">4 horas</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Language
          </label>
          <select
            disabled
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
          <label
            htmlFor="link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Link de la clase
          </label>
          <input
            {...register("link", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="link"
            type="url"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="level"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Class level
          </label>
          <select
            disabled
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
            htmlFor="link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precio
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="link"
            type="number"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <input
            disabled
            {...register("date", {
              required: { value: true, message: "Required" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="link"
            type="datetime-local"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Capacity
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

        <div className="col-span-2 ">
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción
          </label>
          <textarea
            {...register("description", {
              required: { value: true, message: "Required" },
            })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
            id="description"
          ></textarea>
          <p className="text-xs italic text-red-500">
            {errors.description?.message}
          </p>
        </div>

        <div className="col-span-2 mt-10">
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

export default EditClassesForm;
