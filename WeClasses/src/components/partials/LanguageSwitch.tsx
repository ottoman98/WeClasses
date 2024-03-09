import { Dropdown } from "flowbite-react";
import spainFlag from "../../assets/icons/spain_flag.png";
import usaFlag from "../../assets/icons/usa_flag.png";
import { DataContextLanguage } from "../../context/language";
import { useContext } from "react";
import spanish from "../../translations/spanish";
import english from "../../translations/english";
import { dataContextLanguage } from "../../types/contextTypes";

function LanguageSwitch() {
  const { translation, setTranslation } =
    useContext<dataContextLanguage>(DataContextLanguage);
  return (
    <>
      <Dropdown label={translation.nav.language} inline>
        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(spanish);
          }}
        >
          <img className="w-5 mr-2" src={spainFlag} />
          {translation.languages.spanish}
        </Dropdown.Item>

        <Dropdown.Item
          className="text-xs  hover:text-blue-950 text-slate-500"
          onClick={() => {
            setTranslation(english);
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
