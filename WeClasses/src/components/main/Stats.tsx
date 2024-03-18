import { useContext } from "react";
import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { DataContextLanguage } from "../../context/language";
function Stats() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="grid grid-cols-2 place-items-center md:flex flex-wrap p-10 justify-around   gap-5 max-w-[80rem] mx-auto  ">
      <div className="flex  flex-col items-center ">
        <BsPeople size={30} />
        <strong className="text-xl">{translation.stats.first.bold}</strong>
        <small className="text-lg text-slate-700 text-center">
          {translation.stats.first.text}
        </small>
      </div>
      <div className="flex  flex-col items-center">
        <BsMap size={30} />
        <strong className="text-xl">{translation.stats.second.bold}</strong>
        <small className="text-lg text-slate-700 text-center">
          {translation.stats.second.text}
        </small>
      </div>
      <div className="flex  flex-col  items-center col-span-2 ">
        <BsGlobe size={30} />
        <strong className="text-xl">{translation.stats.third.bold}</strong>
        <small className="text-lg text-slate-700 text-center">
          {translation.stats.third.text}
        </small>
      </div>
    </section>
  );
}

export default Stats;
