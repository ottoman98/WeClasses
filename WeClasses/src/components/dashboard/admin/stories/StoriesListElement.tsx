import { story } from "../../../../types/storyTypes";
import { DataContextTabs } from "../../../../context/studentsTab";
import { DataContextStoryId } from "../../../../context/stories/storyId";
import DeleteStory from "./DeleteStory";
import { useContext } from "react";
import PreviewStory from "./PreviewStory";

function StoriesListElement({ data }: { data: story }) {
  const { setName } = useContext(DataContextTabs);
  const setId = useContext(DataContextStoryId).setName;
  if (data.createdAt) {
    return (
      <>
        <tr className=" border-gray-200 dark:border-gray-700 hover:bg-gray-100 ">
          <td className="px-6 py-4 flex flex-col">
            <span className="font-semibold ">
              {new Date(data.createdAt).toLocaleDateString()}
            </span>
            <span className="text-slate-500">
              {new Date(data.createdAt).toLocaleTimeString()}
            </span>
          </td>
          <td className="px-6 py-4">{data.title}</td>
          <td className="px-6 py-4 text-center flex flex-col">
            <span
              className={`${
                data.language == "en"
                  ? "bg-blue-300 text-blue-700"
                  : "bg-red-300 text-red-700"
              }  rounded-xl text-xs font-semibold px-1`}
            >
              {data.language == "en"
                ? "English"
                : data.language == "es"
                ? "Español"
                : data.language}
            </span>
          </td>
          <td>{data.readingTime}</td>
          <td>{data.status}</td>
          <td>{data.level}</td>

          <td className=" flex flex-col  gap-2 px-6 py-4 text-center">
            <p
              onClick={() => {
                setName("editStory");
                setId(data._id);
              }}
              className="text-sm leading-6 text-gray-900 cursor-pointer hover:bg-light-blue rounded-xl"
            >
              Editar
            </p>
            <div>
              <DeleteStory story={data} />
            </div>
            <div>
              <PreviewStory title={data.title} preview={data.dialogue} />
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default StoriesListElement;
