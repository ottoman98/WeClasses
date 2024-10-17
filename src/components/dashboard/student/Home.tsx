import { useContext } from "react";
import { GetAllClasses } from "../../../api/axiosClasses";

import ClassesCard from "../../classes/ClassesCard";
import { DataContextLanguage } from "../../../context/language";
import RadarGraph from "../../charts/RadarGraph";
import BarsChart from "../../charts/BarsChart";

function Home() {
  const classes = GetAllClasses();
  const { translation } = useContext(DataContextLanguage);

  return (
    <div className="max-w-[80rem] mx-auto py-10 flex flex-col gap-5">
      <div className=" flex flex-col gap-14 bg-white rounded-xl py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <h2 className="text-center text-4xl text-light-blue font-semibold">
          Your Progress
        </h2>
        <div className="flex flex-row justify-center px-4">
          <div className="">
            <BarsChart />
          </div>
          <div className="-mt-24">
            <RadarGraph />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl text-center font-semibold text-light-blue">
          {" "}
          {translation.profiles.home.title}
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {!classes
            ? "loading..."
            : classes.map((x) => {
                return <ClassesCard complement={false} data={x} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Home;
