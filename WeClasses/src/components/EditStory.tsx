import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { story } from "../types/storyTypes";
import { GetStoryById, putStory } from "../api/axiosStories";
import { useParams } from "react-router-dom";

function EditStory() {
  const [response, setResponse] = useState<null | object>(null);
  const {
    handleSubmit,
    setValue,
    register,
    //formState: { errors },
  } = useForm<story>();
  const { id } = useParams();

  const data: story = GetStoryById(id);

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("language", data.language);
      setValue("readingTime", data.readingTime);
      setValue("status", data.status);
      setValue("dialogue", data.dialogue);
    }
  }, [data]);

  return (
    <>
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 w-100 mx-auto">
        <form
          className="w-full grid grid-cols-1 gap-2 "
          onSubmit={handleSubmit((x) => {
            const data = putStory(id, x);
            setResponse(data);
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
          </div>

          <div>
            <label htmlFor="status">Body</label>
            <textarea
              className="flex flex-col "
              {...register("dialogue", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
          </div>
          <button className="">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditStory;
