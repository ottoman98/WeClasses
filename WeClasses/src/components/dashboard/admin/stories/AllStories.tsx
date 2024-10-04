import { GetAllStories } from "../../../../api/axiosStories";
import { Badge } from "flowbite-react";
import { story } from "../../../../types/storyTypes";
import { Fragment, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { DataContextTabs } from "../../../../context/studentsTab";
import { DataContextStoryId } from "../../../../context/stories/storyId";
import DeleteStory from "./DeleteStory";

function AllStories() {
  const response: Array<story> | undefined = GetAllStories();
  const { setName } = useContext(DataContextTabs);
  const setId = useContext(DataContextStoryId).setName;

  if (response) {
    return (
      <>
        <ul role="list" className="divide-y divide-gray-100">
          {response.map((x) => {
            return (
              <Fragment key={x._id}>
                <li className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {x.title}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        <Badge color="success"> {x.status}</Badge>
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {x.language}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Creado
                      <time>: {x.createdAt}</time>
                    </p>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p
                      onClick={() => {
                        setName("editStory");
                        setId(x._id);
                      }}
                      className="text-sm leading-6 text-gray-900"
                    >
                      Editar
                    </p>
                    <div>
                      <DeleteStory story={x} />
                    </div>
                    <p className="cursor-pointer flex flex-col items-center leading-6 text-gray-900 text-xs">
                      <FaEye /> Preview
                    </p>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <> loading</>;
  }
}

export default AllStories;
