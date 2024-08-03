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
        <h2 className="text-4xl">
          {translation.profiles.teacher.classes.title}
        </h2>
        <span
          className="w-1/4 bg-blue-900 hover:bg-blue-800 block cursor-pointer text-center text-white rounded-md m-2"
          onClick={() => setName("add")}
        >
          {translation.profiles.teacher.classes.add}
        </span>
        <div className="overflow-auto px-10">
          <table>
            <thead>
              <tr>
                <th className="px-10">Fecha de creación</th>
                <th className="px-10">Nombre</th>
                <th className="px-10">Idioma</th>
                <th className="px-10">Nivel</th>
                <th className="px-10">Fecha de la clase</th>
                <th className="px-10">Duración</th>
                <th className="px-10">Capacidad</th>
                <th className="px-10">Estudiantes</th>
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
