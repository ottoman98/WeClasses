import { Outlet } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import { DataContextStoriesLanguage } from "../../context/stories/storiesLanguage";

import english from "../../assets/flags/gb.svg";
import german from "../../assets/flags/de.svg";
import spanish from "../../assets/flags/es.svg";
import french from "../../assets/flags/fr.svg";
import chinese from "../../assets/flags/cn.svg";
import arab from "../../assets/flags/sa.svg";
import japanese from "../../assets/flags/jp.svg";
import russian from "../../assets/flags/ru.svg";
import italian from "../../assets/flags/it.svg";
import turkish from "../../assets/flags/tr.svg";

function StoriesMain() {
  const [show, setShow] = useState(false);
  const { setName, name } = useContext(DataContextStoriesLanguage);

  return (
    <main className="py-16 max-w-[80rem] mx-auto">
      <nav className=" bg-white py-2 ">
        <ul className="flex flex-row text-lg justify-between px-6 bg-slate-100 py-2">
          <li
            onClick={() => {
              setShow(!show);
            }}
            className="flex flex-row items-center text-customBlack cursor-pointer px-5"
          >
            <span className="min-w-20">
              {name === "en"
                ? "English"
                : name === "es"
                ? "Spanish"
                : name === "zh"
                ? "Chinese"
                : name === "ar"
                ? "Arabic"
                : name === "pt"
                ? "Portuguese"
                : name === "ru"
                ? "Russian"
                : name === "ja"
                ? "Japanese"
                : name === "fr"
                ? "French"
                : name === "de"
                ? "German"
                : name === "tr"
                ? "Turkish"
                : name === "it"
                ? "Italian"
                : "Unknown Language"}
            </span>
            <IoMdArrowDropdown />
          </li>
          <li className="hover:bg-light-blue rounded-md py-1 px-2 cursor-pointer">
            Lectura
          </li>
          <li className="hover:bg-light-blue rounded-md py-1 px-2 cursor-pointer">
            Escucha
          </li>
          <li className="hover:bg-light-blue rounded-md py-1 px-2 cursor-pointer">
            Dictados
          </li>
          <li className="hover:bg-light-blue rounded-md py-1 px-2 cursor-pointer">
            Gramatica
          </li>
          <li className="hover:bg-light-blue rounded-md py-1 px-2">
            Vocabulario
          </li>
        </ul>
        <div
          className={`${
            show ? "flex" : "hidden"
          }   flex-col justify-center px-10 py-5 gap-3 `}
        >
          <h3 className="text-xl font-semibold text-light-blue">
            Que idioma quires aprender
          </h3>
          <div className="grid grid-cols-5 gap-2">
            <div
              onClick={() => {
                setName("en");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={english} alt="" />
              <span>Ingles</span>
            </div>
            <div
              onClick={() => {
                setName("zh");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={chinese} alt="" />
              <span>Chino</span>
            </div>
            <div
              onClick={() => {
                setName("fr");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={french} alt="" />
              <span>Frances</span>
            </div>
            <div
              onClick={() => {
                setName("es");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={spanish} alt="" />
              <span>Español</span>
            </div>
            <div
              onClick={() => {
                setName("ar");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={arab} alt="" />
              <span>Árabe</span>
            </div>
            <div
              onClick={() => {
                setName("ru");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={russian} alt="" />
              <span>Ruso</span>
            </div>
            <div
              onClick={() => {
                setName("ja");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={japanese} alt="" />
              <span>Japones</span>
            </div>
            <div
              onClick={() => {
                setName("de");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={german} alt="" />
              <span>Alemán</span>
            </div>
            <div
              onClick={() => {
                setName("tr");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={turkish} alt="" />
              <span>Turco</span>
            </div>
            <div
              onClick={() => {
                setName("it");
              }}
              className="bg-slate-200 p-2 flex flex-row items-center rounded-md gap-2 hover:bg-light-blue cursor-pointer w-36"
            >
              <img className="w-12" src={italian} alt="" />
              <span>Italiano</span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default StoriesMain;
