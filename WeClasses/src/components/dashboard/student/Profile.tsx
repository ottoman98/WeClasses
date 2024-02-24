import NavBarProfileStudent from "./NavbarProfileStudent";
import NavBarOptionsProfile from "./NavBarOptionsProfile";
import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import MyLessons from "./MyLessons";
import Messages from "./messages/Messages";

function Profile() {
  const { name } = useContext(DataContextTabs);

  function currentTab(tab: string) {
    switch (tab) {
      case "home":
        return <>home</>;

      case "messages":
        return <Messages />;
      case "lessons":
        return <MyLessons />;
      case "settings":
        return <>settings</>;
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
