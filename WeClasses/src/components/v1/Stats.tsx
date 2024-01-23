import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
function Stats() {
  return (
    <section className="flex md:text-[1.5rem] text-[0.7rem] p-10 justify-around border-y-2 border-black gap-3">
      <div className="flex flex-col">
        <BsPeople />
        <strong className="md:text-xl"> Mas de 200 </strong>
        <small>estudiantes impactados</small>
      </div>
      <div className="flex flex-col">
        <BsMap />
        <strong className="md:text-xl"> Mas de 3 años </strong>
        <small>de experiencia del proyecto</small>
      </div>
      <div className="flex flex-col ">
        <BsGlobe />
        <strong className="md:text-xl"> Mas de 4 </strong>
        <small>Países Alcanzados</small>
      </div>
    </section>
  );
}

export default Stats;
