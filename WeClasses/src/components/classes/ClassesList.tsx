import { useState } from "react";
import { GetAllClasses } from "../../api/axiosClasses";
import ClassesCard from "./ClassesCard";

function ClassesList() {
  const classes = GetAllClasses();
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  let filtered = classes;

  if (language != "") {
    const byLanguage = filtered?.filter((x) => x.language == language);

    filtered = byLanguage;
  }

  if (level != "") {
    const byLanguage = filtered?.filter((x) => x.level == level);

    filtered = byLanguage;
  }

  return (
    <section className="px-2 md:px-20 py-10 flex flex-col gap-10 ">
      <h2 className=" text-5xl text-center">
        Online English tutors & teachers for private lessons
      </h2>
      <div className=" flex flex-col gap-4 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 ">
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
        {filtered?.length && filtered.length > 0 ? (
          <span className="font-bold text-lg">
            {filtered?.length} Classes that match your needs
          </span>
        ) : (
          ""
        )}
      </div>

      {filtered?.length && filtered.length > 0 ? (
        <div className="px-2 md:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {filtered?.map((x) => {
            return <ClassesCard data={x} key={x._id} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-2 md:px-20">
          <strong className="text-xl">
            Looks like we can’t find any matches
          </strong>
          <span>Try removing some filters to see your top tutors</span>
        </div>
      )}
    </section>
  );
}

export default ClassesList;
