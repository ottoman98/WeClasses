import Button from "../partials/Button";
import foto from "../../assets/images/dama.jpg";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";

function BecomeTutor() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="md:p-5 max-w-[80rem] mx-auto bg-light-blue md:bg-white text-white md:text-blue-950">
      <div className="flex flex-col md:flex-row mx-auto md:rounded-xl md:border-[1px] border-light-blue bg-red">
        <img
          className="md:w-1/2 md:rounded-l-xl object-cover"
          src={foto}
          alt=""
        />
        <div className="px-7 py-10  flex flex-col gap-6 md:w-1/2">
          <h2 className="text-3xl md:text-7xl font-bold ">
            {translation.main.becomeTutor.title}
          </h2>
          <p>{translation.main.becomeTutor.description}</p>
          <ul className="list-disc font-bold text-2xl flex flex-col gap-4 pl-6">
            <li>{translation.main.becomeTutor.items[0]}</li>
            <li>
              <li>{translation.main.becomeTutor.items[1]}</li>
            </li>
            <li>
              <li>{translation.main.becomeTutor.items[2]}</li>
            </li>
          </ul>
          <Button
            content={translation.main.becomeTutor.button}
            link="/register_tutor"
          />
          <span className="text-center underline font-bold">
            {translation.main.becomeTutor.link}
          </span>
        </div>
      </div>
    </section>
  );
}

export default BecomeTutor;
