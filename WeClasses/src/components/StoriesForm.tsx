import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postStory } from "../api/axiosStories";
import { story } from "../types/storyTypes";
import { useNavigate } from "react-router-dom";
import RichEditor from "./RichEditor";
import postResponse from "../types/postResponse";

function StoriesForm() {
  const [response, setResponse] = useState<null | postResponse>(null);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<story>();
  useEffect(() => {
    register("dialogue", {
      required: { value: true, message: "Required" },
      minLength: { value: 20, message: "La longitud minima es 20 caracteres" },
    });
  }, [response]);

  const navigate = useNavigate();
  useEffect(() => {
    if (response && response.message == "valid") {
      navigate("/dashboard/stories/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <>
      <div className="w-3/4 p-14">
        <h2>Agregar Story</h2>
        <form
          onSubmit={handleSubmit(async (x) => {
            const data = await postStory(x);
            setResponse(data.data);
          })}
          className="w-full grid grid-cols-1 gap-2 p-6 "
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              className="flex flex-col "
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className="text-xs italic text-red-500">
              {errors.title?.message}
            </p>
          </div>
          <div>
            <label htmlFor="language">Language.</label>
            <select
              className="flex flex-col "
              {...register("language", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            >
              <option value="">Seleccione El idioma</option>
              <option value="english">Ingles</option>
              <option value="spanish">Español</option>
            </select>
            <p className="text-xs italic text-red-500">
              {errors.language?.message}
            </p>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              className="flex flex-col "
              {...register("status", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            >
              <option value="">Selecione una opcion</option>
              <option value="free">Free</option>
              <option value="premiun">Premiun</option>
            </select>
            <p className="text-xs italic text-red-500">
              {errors.status?.message}
            </p>
          </div>
          <div>
            <label htmlFor="readingTime">Reading Time</label>
            <input
              className="flex flex-col "
              type="text"
              {...register("readingTime", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />

            <p className="text-xs italic text-red-500">
              {errors.readingTime?.message}
            </p>
          </div>

          <div>
            <RichEditor
              set={(editorState: string) => {
                setValue("dialogue", editorState);
              }}
              value={getValues("dialogue")}
            />

            <p className="text-xs italic text-red-500">
              {errors.dialogue?.message}
            </p>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default StoriesForm;
