import { useContext } from "react";
import img from "../../assets/images/main.jpeg";
import { FcNext } from "react-icons/fc";
import { DataContextLanguage } from "../../context/language";
import Button from "../partials/Button";

function Description() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <div className="flex flex-col-reverse md:flex-row  h-full items-center justify-center text-customBlack max-w-[80rem] mx-auto">
      <img
        src={img}
        className="md:w-1/2 h-full object-cover object-left "
        alt="Domina diferentes idiomas con expertos nativos en nuestra plataforma"
      />
      <div className="md:w-1/2">
        <div className=" flex p-5  h-full flex-col gap-5">
          <h1 className="text-2xl text-center md:text-4xl font-bold">
            {translation.banner.title}
          </h1>
          <ul className="text-xs flex gap-3 flex-col">
            <li className="flex gap-2">
              <FcNext />
              <p>
                Take customizable 1-on-1 lessons trusted by millions of user
              </p>
            </li>
            <li className="flex gap-2">
              <FcNext />
              <p>
                Take customizable 1-on-1 lessons trusted by millions of user
              </p>
            </li>
            <li className="flex gap-2">
              <FcNext />
              <p>
                Take customizable 1-on-1 lessons trusted by millions of user
              </p>
            </li>
          </ul>
          <Button content={translation.banner.button} link="/register" />
        </div>
      </div>
    </div>
  );
}

export default Description;
