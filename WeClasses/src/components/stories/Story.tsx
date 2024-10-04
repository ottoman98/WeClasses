import { useParams } from "react-router-dom";
import { GetStoryById } from "../../api/axiosStories";
import Loading from "../partials/Loading";

function Story() {
  const { id } = useParams();
  const data = GetStoryById(id);
  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="py-32">
        <h3 className="text-3xl">{data.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.dialogue }}></div>
      </div>
    );
  }
}

export default Story;
