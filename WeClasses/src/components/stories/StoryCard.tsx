import { Link } from "react-router-dom";
import { story } from "../../types/storyTypes";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
function StoryCard({ story }: { story: story }) {
  return (
    <div className="flex flex-row w-full border-y border-blue-900 justify-between">
      <div className="overflow-y-auto-auto 0 overflow-hidden h-11 ">
        <Link to={`/story/${story._id}`}>
          <h3 className="text-light-blue text-lg underline">{story.title}</h3>
        </Link>
        <div
          className="
        "
          dangerouslySetInnerHTML={{
            __html: story.dialogue,
          }}
        ></div>
      </div>
      <div className="flex flex-row ">
        <div className="text-blue-900 border  flex justify-center items-center border-x-blue-900 px-2">
          <IoIosArrowDroprightCircle size={20} />
        </div>
        <div className="text-blue-900  h-full flex justify-center items-center px-2">
          <GrDocumentPdf size={20} />
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
