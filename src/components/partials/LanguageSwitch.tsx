import { Dropdown } from "flowbite-react";
import english from "../../assets/flags/gb.svg";
import german from "../../assets/flags/de.svg";
import spanish from "../../assets/flags/es.svg";
import french from "../../assets/flags/fr.svg";
import chinese from "../../assets/flags/cn.svg";
import arab from "../../assets/flags/arab.png";
import japanese from "../../assets/flags/jp.svg";
import russian from "../../assets/flags/ru.svg";
import italian from "../../assets/flags/it.svg";
import turkish from "../../assets/flags/tr.svg";
import { DataContextLanguage } from "../../context/language";
import { useContext, useState } from "react";
import spanishTranslation from "../../translations/spanish/spanish";
import englishTranslation from "../../translations/english/english";
import { dataContextLanguage } from "../../types/contextTypes";

function LanguageSwitch() {
  const { translation, setTranslation } =
    useContext<dataContextLanguage>(DataContextLanguage);
  const [language, setLanguage] = useState("English");

  console.log(translation.languages);
  return (
    <>
      <Dropdown
        label={
          <div className="flex gap-1">
            <span>{language}</span>
          </div>
        }
        inline
      >
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(spanishTranslation);
            setLanguage("Español");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={spanish} />
          {translation.languages.spanish}
        </Dropdown.Item>

        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={english} />
          {translation.languages.english}
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={chinese} />
          Chinese
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={french} />
          French
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2" src={arab} />
          Arab
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={russian} />
          Russian
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square " src={japanese} />
          Japanese
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={german} />
          German
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={turkish} />
          Turkish
        </Dropdown.Item>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(englishTranslation);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2  aspect-square" src={italian} />
          Italiano
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}

export default LanguageSwitch;
