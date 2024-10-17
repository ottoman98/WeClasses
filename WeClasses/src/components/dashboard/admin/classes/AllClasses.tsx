import { useContext } from "react";
import { GetAllClassesTeacher } from "../../../../api/axiosClasses";
import { DataContextTabsClasses } from "../../../../context/classes/classes";
import EditClassesForm from "./EditClassForm";
import ClassesForm from "./ClassesForm";
import ClassElement from "./ClassElement";

function AllClasses() {
  const data = GetAllClassesTeacher();

  const { name } = useContext(DataContextTabsClasses);

  if (name == "") {
    return (
      <section className="md:max-w-[80rem] mx-auto flex flex-col py-4 gap-3">
        <h2 className="text-4xl font-semibold text-light-blue">MyClasses</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col">
          <table className="w-full text-sm text-center  bg-white border text-customBlack">
            <thead className="text-customBlack font-normal border bg-gray-100">
              <tr>
                <th className="px-1 py-3 font-normal">Fecha de creación</th>
                <th className="px-1 py-3 font-normal">Nombre</th>
                <th className="px-1 py-3 font-normal">Idioma</th>

                <th className="px-1 py-3 font-normal">Fecha de la clase</th>
                <th className="px-1 py-3 font-normal">Duración</th>
                <th className="px-1 py-3 font-normal">Capacidad</th>
                <th className="px-1 py-3 font-normal">Precio</th>
                <th className="px-1 py-3 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!data
                ? "loading"
                : data.map((x) => {
                    return <ClassElement data={x} />;
                  })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (name == "add") {
    return <ClassesForm />;
  } else {
    return <EditClassesForm />;
  }
}

export default AllClasses;
