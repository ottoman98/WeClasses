import { useContext } from "react";
import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { DataContextLanguage } from "../../context/language";
function Stats() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="flex p-10 justify-around   gap-3 max-w-[80rem] mx-auto  ">
      <div className="flex flex-col">
        <BsPeople size={30} />
        <strong className="text-xl">{translation.stats.first.bold}</strong>
        <small className="text-lg text-slate-700">
          {translation.stats.first.text}
        </small>
      </div>
      <div className="flex flex-col">
        <BsMap size={30} />
        <strong className="text-xl">{translation.stats.second.bold}</strong>
        <small className="text-lg text-slate-700">
          {translation.stats.second.text}
        </small>
      </div>
      <div className="flex flex-col ">
        <BsGlobe size={30} />
        <strong className="text-xl">{translation.stats.third.bold}</strong>
        <small className="text-lg text-slate-700">
          {translation.stats.third.text}
        </small>
      </div>
    </section>
  );
}

export default Stats;
