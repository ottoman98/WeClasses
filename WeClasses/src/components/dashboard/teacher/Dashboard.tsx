import { useContext } from "react";
import NavBarOptionsProfileTeacher from "./NavBarOptionsProfileTeacher";
import NavBarProfileTeacher from "./NavbarProfileTeacher";
import ResumeTeacher from "./ResumeTeacher";
import { DataContextTabs } from "../../../context/studentsTab";
import AllClasses from "./classes/AllClasses";
import { DataProviderTabsClasses } from "../../../context/classes/classes";
import AllClassesBooked from "./classes/Booked/AllClassesBooked";
import Settings from "./settings/Settings";
import { DataProviderTabsSettings } from "../../../context/settings/settings";

function Dashboard() {
  const { name } = useContext(DataContextTabs);
  function currentTab(tab: string) {
    switch (tab) {
      case "home":
        return <ResumeTeacher />;

      case "messages":
        return <>messages</>;
      case "classes":
        return <AllClasses />;

      case "booked":
        return <AllClassesBooked />;
      case "settings":
        return <Settings />;
    }
  }

  return (
    <DataProviderTabsClasses>
      <DataProviderTabsSettings>
        <NavBarProfileTeacher />
      </DataProviderTabsSettings>
      <NavBarOptionsProfileTeacher />

      {currentTab(name)}
    </DataProviderTabsClasses>
  );
}

export default Dashboard;
