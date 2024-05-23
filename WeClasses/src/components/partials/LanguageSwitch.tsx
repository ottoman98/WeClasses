import { Dropdown } from "flowbite-react";
import spainFlag from "../../assets/icons/spain_flag.png";
import usaFlag from "../../assets/icons/usa_flag.png";
import { DataContextLanguage } from "../../context/language";
import { useContext, useState } from "react";
import spanish from "../../translations/spanish/spanish";
import english from "../../translations/english/english";
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
            <img
              className="w-4"
              src={language == "Español" ? spainFlag : usaFlag}
              alt=""
            />
            <span>{language}</span>
          </div>
        }
        inline
      >
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(spanish);
            setLanguage("Español");
          }}
        >
          <img className="w-5 mr-2" src={spainFlag} />
          {translation.languages.spanish}
        </Dropdown.Item>

        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(english);
            setLanguage("English");
          }}
        >
          <img className="w-5 mr-2" src={usaFlag} />
          {translation.languages.english}
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}

export default LanguageSwitch;
