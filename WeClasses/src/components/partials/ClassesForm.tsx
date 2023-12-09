import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { classe } from "../../types/classeTypes";
import RichEditor from "../RichEditor";
import { postClasse } from "../../api/axiosClasses";
import { valid } from "../../types/postResponse";
import { useNavigate } from "react-router-dom";

function ClassesForm() {
  const [response, setResponse] = useState<valid | null>(null);
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<classe>();
  console.log(response);

  const navigate = useNavigate();
  useEffect(() => {
    if (response && response.valid == true) {
      navigate("/dashboard/classes/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = await postClasse(x);
          setResponse(data.data);
        })}
        className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
      >
        <div className="flex flex-col ">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="duration">Duration</label>
          <input
            {...register("duration", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            id="name"
            type="duration"
          />
          <p className="text-xs italic text-red-500">
            {errors.duration?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="language">Language</label>
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
          <label htmlFor="link">Link de la clase</label>
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
          <label htmlFor="level">Class level</label>
          <select
            {...register("level", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            id="name"
          >
            <option value="">Escoja el nivel de la clase</option>
            <option value="A1-A2">Español</option>
            <option value="B1-B2">English</option>
            <option value="C1-C2">English</option>
          </select>
          <p className="text-xs italic text-red-500">{errors.level?.message}</p>
        </div>

        <div className="flex flex-col">
          <RichEditor
            set={(editorState: string) => {
              setValue("description", editorState);
            }}
            value={getValues("description")}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ClassesForm;
