import { GetAllStories } from "../api/axiosStories";
import { Badge } from "flowbite-react";
import { story } from "../types/storyTypes";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "./Modal";
import { useState, useEffect } from "react";

function AllStories() {
  const response: Array<story> | undefined = GetAllStories();
  const [render, setRender] = useState(false);

  function deleteStatus(value: boolean) {
    setRender(value);
  }

  console.log(response);

  useEffect(() => {}, [render]);

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
                    <p className="text-sm leading-6 text-gray-900">
                      <Link to={`/dashboard/story/${x._id}`}>Editar</Link>
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      <ModalDelete story={x} status={deleteStatus} />
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
