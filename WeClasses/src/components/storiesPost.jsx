import { useState } from "react";
import requests from "../api/requestStories";
import { useForm } from "react-hook-form";

function PostStory() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  data;

  const onSubmit = handleSubmit(async (values) => {
    setData(await requests.storyPost(values));
  });
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
          />
          <input
            type="text"
            {...register("dialogue", { required: true })}
            placeholder="dialogue"
          />
          <input
            type="text"
            {...register("language", { required: true })}
            placeholder="language"
          />
          <input
            type="text"
            {...register("status", { required: true })}
            placeholder="status"
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default PostStory;
