import { useContext } from "react";
import NavBarOptionsProfileTeacher from "./NavBarOptionsProfileTeacher";
import NavBarProfileTeacher from "./NavbarProfileTeacher";
import ResumeTeacher from "./ResumeTeacher";
import { DataContextTabs } from "../../../context/studentsTab";
import AllClasses from "./classes/AllClasses";
import { DataProviderTabsClasses } from "../../../context/classes/classes";

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
      case "settings":
        return <>settings</>;
    }
  }

  return (
    <DataProviderTabsClasses>
      <NavBarProfileTeacher />
      <NavBarOptionsProfileTeacher />

      {currentTab(name)}
    </DataProviderTabsClasses>
  );
}

export default Dashboard;
