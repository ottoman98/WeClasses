import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
function Stats() {
  return (
    <section className="flex  p-10 justify-around border-y-2 border-black gap-3 xs:text-[0.7rem] md:text-[1rem] xl:text-[2rem]">
      <div className="flex flex-col">
        <BsPeople />
        <strong className="xl:text-[0.8em]"> +200 </strong>
        <small>estudiantes impactados</small>
      </div>
      <div className="flex flex-col">
        <BsMap />
        <strong className="xl:text-[0.8em]"> 3 años </strong>
        <small>de experiencia del proyecto</small>
      </div>
      <div className="flex flex-col ">
        <BsGlobe />
        <strong className="xl:text-[0.8em]"> +5 Países</strong>
        <small> Alcanzados</small>
      </div>
    </section>
  );
}

export default Stats;
