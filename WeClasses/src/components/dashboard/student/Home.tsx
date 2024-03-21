import { GetAllClasses } from "../../../api/axiosClasses";

import ClassesCard from "../../classes/ClassesCard";

function Home() {
  const classes = GetAllClasses();

  return (
    <div className="max-w-[80rem] mx-auto py-10 flex flex-col gap-5">
      <ul className="md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-5 rounded-lg">
        <li className="text-xl font-bold">
          Horas de clase tomadas:
          <span className="text-red-700"> bastantes</span>
        </li>
        <li className="text-xl font-bold">
          Cantidad de clases tomadas:
          <span className="text-red-700">las suficientes </span>
        </li>
        <li className="text-xl font-bold">
          Tiempo de stories leídas:
          <span className="text-red-700">poco y nada</span>
        </li>
      </ul>

      <div className="flex flex-col gap-3">
        <h2 className="text-5xl font-bold">Classes recomendadas</h2>
        <div>
          {!classes
            ? "loading..."
            : classes.map((x) => {
                return <ClassesCard data={x} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Home;
