import { useState } from "react";
import { GetAllClasses } from "../../api/axiosClasses";
import ClassesCard from "./ClassesCard";

function ClassesList() {
  const classes = GetAllClasses();
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  let filtered = classes;

  if (language != "") {
    const byLanguage = classes?.filter((x) => x.language == language);

    filtered = byLanguage;
  }

  if (level != "") {
    const byLanguage = filtered?.filter((x) => x.level == level);

    filtered = byLanguage;
  }

  return (
    <section>
      <h2>Online English tutors & teachers for private lessons</h2>
      <div>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => {
              const selected = e.target.value;
              setLanguage(selected);
            }}
          >
            <option value="">Todos los idiomas</option>
            <option value="en">Ingles</option>
            <option value="es">Español</option>
          </select>
          <select
            name=""
            id=""
            onChange={(e) => {
              const selected = e.target.value;
              setLevel(selected);
            }}
          >
            <option value="">Todos los idiomas</option>
            <option value="A1-A2">A1-A2</option>
            <option value="B1-B2">B1-B2</option>
            <option value="C1-C2">C1-C2</option>
          </select>
        </div>
        <div className="px-10 py-5 flex flex-col gap-5">
          {filtered?.map((x) => {
            return <ClassesCard data={x} key={x._id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ClassesList;
