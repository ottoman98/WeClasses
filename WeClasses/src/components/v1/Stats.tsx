import { useContext } from "react";
import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { DataContextLanguage } from "../../context/language";
function Stats() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="flex  p-10 justify-around border-y-2 border-black gap-3 xs:text-[0.7rem] md:text-[1rem] xl:text-[2rem]">
      <div className="flex flex-col">
        <BsPeople />
        <strong className="xl:text-[0.8em]">
          {translation.stats.first.bold}
        </strong>
        <small>{translation.stats.first.text}</small>
      </div>
      <div className="flex flex-col">
        <BsMap />
        <strong className="xl:text-[0.8em]">
          {translation.stats.second.bold}{" "}
        </strong>
        <small>{translation.stats.second.text}</small>
      </div>
      <div className="flex flex-col ">
        <BsGlobe />
        <strong className="xl:text-[0.8em]">
          {" "}
          {translation.stats.third.bold}
        </strong>
        <small>{translation.stats.third.text}</small>
      </div>
    </section>
  );
}

export default Stats;
