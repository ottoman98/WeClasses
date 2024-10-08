import { useParams } from "react-router-dom";
import { GetStoryById } from "../../api/axiosStories";
import Loading from "../partials/Loading";

import { GrDocumentPdf } from "react-icons/gr";

function Story() {
  const { id } = useParams();
  const data = GetStoryById(id);
  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="py-32 min-h-screen">
        <div className=" w-1/2 mx-auto flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div></div>
            <div className="flex flex-row gap-1 text-light-blue">
              <GrDocumentPdf className="-mt-1" size={20} />
              <span className="underline cursor-pointer">Descargar</span>
            </div>
          </div>
          <h3 className="text-3xl text-center font-semibold text-light-blue">
            {data.title}
          </h3>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: data.dialogue }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Story;
