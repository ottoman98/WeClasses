import NavBarProfileStudent from "./NavbarProfileStudent";
import NavBarOptionsProfile from "./NavBarOptionsProfile";
import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import MyLessons from "./lessons/MyLessons";
import Messages from "./messages/Messages";
import Home from "./Home";
import Settings from "./settings/Settings";

function Profile() {
  const { name } = useContext(DataContextTabs);

  function currentTab(tab: string) {
    switch (tab) {
      case "home":
        return <Home />;

      case "messages":
        return <Messages />;
      case "lessons":
        return <MyLessons />;
      case "settings":
        return <Settings />;
    }
  }

  return (
    <>
      <NavBarProfileStudent />
      <NavBarOptionsProfile />
      {currentTab(name)}
    </>
  );
}

export default Profile;
