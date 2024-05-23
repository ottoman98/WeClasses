import { DataContextTabsSettings } from "../../../context/settings/settings";
import { useContext } from "react";
import Password from "./Password";
import Account from "./Account";
import AsideSettings from "./AsideSettings";
function Settings() {
  const { name } = useContext(DataContextTabsSettings);
  function currentTab(tab: string) {
    switch (tab) {
      case "account":
        return <Account />;
      case "password":
        return <Password />;
    }
  }
  return (
    <div className="flex flex-row max-w-[50rem] mx-auto py-10 px-5">
      <AsideSettings />
      {currentTab(name)}
    </div>
  );
}

export default Settings;
