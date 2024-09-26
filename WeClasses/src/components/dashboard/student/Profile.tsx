import NavBarOptionsProfile from "../../partials/NavBarOptionsProfile";
NavBarProfile;
import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import MyLessons from "./lessons/MyLessons";
import Messages from "./messages/Messages";
import Home from "./Home";
import Settings from "../../partials/settings/Settings";
import Loading from "../../partials/Loading";
import NavBarProfile from "../../partials/NavbarProfile";

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
      case "loading":
        return <Loading />;
    }
  }

  return (
    <main>
      <NavBarProfile />
      <NavBarOptionsProfile />
      {currentTab(name)}
    </main>
  );
}

export default Profile;
