import { useParams } from "react-router-dom";
import { GetStoryById } from "../api/axiosStories";

function StoryBody() {
  const { id } = useParams();
  const data = GetStoryById(id);

  console.log(id);
  return (
    <div className=" flex justify-center ">
      {!data ? (
        "loading"
      ) : (
        <>
          <div>
            <h2 className="text-5xl pb-5">{data.title}</h2>
            <div
              className="flex flex-col gap-3 "
              dangerouslySetInnerHTML={{ __html: data.dialogue }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default StoryBody;
