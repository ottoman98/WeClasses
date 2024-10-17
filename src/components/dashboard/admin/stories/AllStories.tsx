import { GetAllStories } from "../../../../api/axiosStories";

import { story } from "../../../../types/storyTypes";

import StoriesListElement from "./StoriesListElement";

function AllStories() {
  const response: Array<story> | undefined = GetAllStories();

  if (response) {
    return (
      <section className="flex flex-col gap-3">
        <h2 className="text-light-blue text-4xl font-semibold">All Stories</h2>
        <table className="w-full text-sm text-center  bg-white border text-customBlack">
          <thead className="text-customBlack font-normal border bg-gray-100">
            <tr>
              <th className="px-1 py-3 font-normal">Fecha de adición</th>
              <th className="px-1 py-3 font-normal">Titulo</th>
              <th className="px-1 py-3 font-normal">Idioma</th>
              <th className="px-1 py-3 font-normal">Estimado de lectura</th>
              <th className="px-1 py-3 font-normal">Estatus</th>
              <th className="px-1 py-3 font-normal">Level</th>
              <th className="px-1 py-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {response.map((x) => {
              return <StoriesListElement data={x} />;
            })}
          </tbody>
        </table>
      </section>
    );
  } else {
    return <> loading</>;
  }
}

export default AllStories;
