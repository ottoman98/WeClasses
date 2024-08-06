import { useContext } from "react";
import { GetAllClassesTeacher } from "../../../../api/axiosClasses";
import { DataContextTabsClasses } from "../../../../context/classes/classes";
import EditClassesForm from "./EditClassForm";
import ClassesForm from "./ClassesForm";
import ClassElement from "./ClassElement";
import { DataContextLanguage } from "../../../../context/language";

function AllClasses() {
  const data = GetAllClassesTeacher();

  const { name, setName } = useContext(DataContextTabsClasses);
  const { translation } = useContext(DataContextLanguage);

  if (name == "") {
    return (
      <section className="md:max-w-[80rem] mx-auto flex ga flex-col py-4 gap-3 ">
        <div className="px-12 flex flex-col gap-4">
          <h2 className="col-span-2 text-5xl font-bold text-light-blue">
            {translation.profiles.teacher.classes.title}
          </h2>
          <span
            className="text-white bg-blue-800   hover:bg-gradient-to-br focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 cursor-pointer"
            onClick={() => setName("add")}
          >
            {translation.profiles.teacher.classes.add}
          </span>
        </div>
        <div className="overflow-auto px-10 ">
          <table className="w-full text-sm text-left rtl:text-right rounded-2xl">
            <thead className=" bg-blue-900 text-white">
              <tr>
                <th className="px-10 py-3">Fecha de creación</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-10 py-3">Idioma</th>
                <th className="px-6 py-3">Nivel</th>
                <th className="px-10 py-3">Fecha de la clase</th>
                <th className="px-6 py-3">Duración</th>
                <th className="px-10 py-3">Capacidad</th>
                <th className="px-6 py-3">Precio</th>
                <th className="px-10 py-3">Actions</th>
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
