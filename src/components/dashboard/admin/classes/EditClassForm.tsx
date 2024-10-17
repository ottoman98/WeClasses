import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { classe } from "../../../../types/classeTypes";
import { GetClasseById, putClasse } from "../../../../api/axiosClasses";
import { valid } from "../../../../types/postResponse";

import { DataContextTabsClasses } from "../../../../context/classes/classes";
import getFormattedDateTime from "../../../../utils/FormattedDateTime";
import { DataContextTabs } from "../../../../context/studentsTab";

function EditClassesForm() {
  const { name } = useContext(DataContextTabsClasses);
  const { setName } = useContext(DataContextTabs);
  const setId = useContext(DataContextTabsClasses).setName;

  const data: classe | undefined = GetClasseById(name);
  const [response, setResponse] = useState<valid | null>(null);

  if (response?.valid) {
    setName("loading");
    setTimeout(() => {
      setName("all");
      setId("");
    }, 1000);
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<classe>();

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
      <h2>Editar Clase</h2>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await putClasse(name, x);
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
          <label htmlFor="language" className="text-sm">
            Language
          </label>
          <select
            {...register("language", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
          <label htmlFor="link" className="text-sm">
            Precio
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            id="link"
            type="number"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="link" className="text-sm">
            Date
          </label>
          <input
            {...register("date", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            id="link"
            type="datetime-local"
          />
          <p className="text-xs italic text-red-500">{errors.link?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm">
            Capacity
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

        <div className="col-span-2 ">
          <label htmlFor="" className="text-sm flex flex-col">
            Descripción
          </label>
          <textarea
            {...register("description", {
              required: { value: true, message: "Required" },
            })}
            className="appearance-none border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
            id="description"
          ></textarea>
          <p className="text-xs italic text-red-500">
            {errors.description?.message}
          </p>
        </div>

        <div className="col-span-2 mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClassesForm;
