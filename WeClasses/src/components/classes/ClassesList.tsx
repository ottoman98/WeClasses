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
    <section className="px-20 py-10 flex flex-col gap-10 ">
      <h2 className=" text-5xl text-center">
        Online English tutors & teachers for private lessons
      </h2>
      <div className="flex gap-10 px-20">
        <select
          className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
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
          className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
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
      <div>
        <div className="px-10 py-5 grid grid-cols-3 gap-5">
          {filtered?.map((x) => {
            return <ClassesCard data={x} key={x._id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ClassesList;
