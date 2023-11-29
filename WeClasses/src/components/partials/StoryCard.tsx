import { Link } from "react-router-dom";
import { story } from "../../types/storyTypes";

function StoryCard({ story }: { story: story }, language: string) {
  return (
    <div className="flex flex-row  gap justify-between">
      <div className="flex border p-2 w-full">
        <h2 className="underline decoration-solid">
          <Link to={`/${language}/story/:id`}>{story.title.toUpperCase()}</Link>
        </h2>
        {story.dialogue.slice(0, 10)}
      </div>

      <Link className="border p-2" to={`${story._id}`}>
        Ver
      </Link>
    </div>
  );
}

export default StoryCard;
