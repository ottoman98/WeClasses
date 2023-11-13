import { useState } from "react";
import { useForm } from "react-hook-form";
import { postStory } from "../api/axiosStories";
import { story } from "../types/storyTypes";

function StoriesForm() {
  const [response, setResponse] = useState<null | object>(null);
  const { handleSubmit, register } = useForm<story>();
  return (
    <>
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 w-100 mx-auto">
        <form
          onSubmit={handleSubmit(async (x) => {
            const data = await postStory(x);
            setResponse(data);
            console.log(response);
          })}
          className="w-full grid grid-cols-1 gap-2 "
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
            <label htmlFor="language">Language.</label>
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

export default StoriesForm;
