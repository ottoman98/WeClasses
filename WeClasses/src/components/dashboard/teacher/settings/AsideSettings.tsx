import { useContext } from "react";
import { DataContextTabsSettings } from "../../../../context/settings/settings";

function AsideSettings() {
  const { name, setName } = useContext(DataContextTabsSettings);

  return (
    <aside>
      <ul>
        <li
          className={`${
            name == "account" ? "border-l-4 border-light-blue" : ""
          } py-1 px-2`}
          onClick={() => {
            setName("account");
          }}
        >
          Account
        </li>
        <li
          className={`${
            name == "password" ? "border-l-4 border-light-blue" : ""
          } py-1 px-2`}
          onClick={() => {
            setName("password");
          }}
        >
          Password
        </li>
      </ul>
    </aside>
  );
}

export default AsideSettings;
