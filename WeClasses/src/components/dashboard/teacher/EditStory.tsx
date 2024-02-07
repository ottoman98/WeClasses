import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { story } from "../../../types/storyTypes";
import { GetStoryById, putStory } from "../../../api/axiosStories";
import { useParams } from "react-router-dom";
import RichEditor from "../../../utils/RichEditor";
import { postResponse } from "../../../types/postResponse";

function EditStory() {
  const [response, setResponse] = useState<null | postResponse>(null);

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<story>();
  const { id } = useParams();
  const navigate = useNavigate();

  const data: story | undefined = GetStoryById(id);

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("language", data.language);
      setValue("readingTime", data.readingTime);
      setValue("status", data.status);
      setValue("dialogue", data.dialogue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    register("dialogue", {
      required: { value: true, message: "Required" },
      minLength: { value: 20, message: "La longitud minima es 20 caracteres" },
    });
  }, [register]);

  useEffect(() => {
    if (response && response.message == "valid") {
      navigate("/dashboard/stories/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <>
      <div className="w-3/4 p-14">
        <form
          className="w-full grid grid-cols-1 gap-2 "
          onSubmit={handleSubmit(async (x) => {
            const data = await putStory(id, x);
            setResponse(data.data);
          })}
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
            <label htmlFor="language">Language</label>
            <input
              className="flex flex-col "
              type="text"
              {...register("language", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className="text-xs italic text-red-500">
              {errors.language?.message}
            </p>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input
              className="flex flex-col "
              type="text"
              {...register("status", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
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
              value={data?.dialogue}
            />

            <p className="text-xs italic text-red-500">
              {errors.dialogue?.message}
            </p>
          </div>

          <button className="">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditStory;
