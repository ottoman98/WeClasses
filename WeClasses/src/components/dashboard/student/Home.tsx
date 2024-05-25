import { useContext } from "react";
import { GetAllClasses } from "../../../api/axiosClasses";

import ClassesCard from "../../classes/ClassesCard";
import { DataContextLanguage } from "../../../context/language";

function Home() {
  const classes = GetAllClasses();
  const { translation } = useContext(DataContextLanguage);

  return (
    <div className="max-w-[80rem] mx-auto py-10 flex flex-col gap-5">
      <ul className="md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-5 rounded-lg">
        <li className="text-xl font-bold">
          {translation.profiles.home.classesTaken}
          <span className="text-red-700"> bastantes</span>
        </li>
        <li className="text-xl font-bold">
          {translation.profiles.home.hoursTaken}

          <span className="text-red-700">las suficientes </span>
        </li>
        <li className="text-xl font-bold">
          {translation.profiles.home.storiesTime}

          <span className="text-red-700">poco y nada</span>
        </li>
      </ul>

      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-center md:text-5xl font-bold">
          {" "}
          {translation.profiles.home.title}
        </h2>
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
