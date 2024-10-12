import { useContext } from "react";
import AsideAdmin from "./AsideAdmin";
import { DataContextTabs } from "../../../context/studentsTab";
import UserOptions from "../../partials/UserOptions";
import AllClasses from "./classes/AllClasses";

import { DataProviderTabsClasses } from "../../../context/classes/classes";
import Settings from "../../partials/settings/Settings";
import StudentsList from "./users/StudentsList";
import TeacherList from "./users/TeacherList";
import Applicants from "./users/Applicants";
import ManageUserTeacher from "./users/ManageTeacher";
import { DataProviderManage } from "../../../context/teachers/manage";
import ManageUserStudent from "./users/ManageUserStudent";
import Loading from "../../partials/Loading";
import ClassesForm from "./classes/ClassesForm";
import AddStory from "./stories/AddStory";
import { DataProviderRichEditor } from "../../../context/stories/stories";
import AllStories from "./stories/AllStories";
import { DataProviderStoryId } from "../../../context/stories/storyId";
import EditStory from "./stories/EditStory";
import { DataProviderRichRaw } from "../../../context/stories/rawStory";
import Stats from "./Stats";

function Panel() {
  const { name } = useContext(DataContextTabs);

  function tabs() {
    switch (name) {
      case "home":
        return <Stats />;
      case "all":
        return <AllClasses />;
      case "add":
        return <ClassesForm />;
      case "settings":
        return <Settings />;
      case "students":
        return <StudentsList />;
      case "teachers":
        return <TeacherList />;
      case "applicants":
        return <Applicants />;
      case "manage":
        return <ManageUserTeacher />;
      case "manageStudent":
        return <ManageUserStudent />;
      case "loading":
        return <Loading />;
      case "addStory":
        return <AddStory />;
      case "editStory":
        return <EditStory />;
      case "allStories":
        return <AllStories />;
    }
  }

  return (
    <DataProviderManage>
      <DataProviderTabsClasses>
        <DataProviderStoryId>
          <DataProviderRichRaw>
            <DataProviderRichEditor>
              <nav className=" flex justify-between px-16">
                <div></div>
                <UserOptions />
              </nav>
              <div className="flex">
                <AsideAdmin />
                {tabs()}
              </div>
            </DataProviderRichEditor>
          </DataProviderRichRaw>
        </DataProviderStoryId>
      </DataProviderTabsClasses>
    </DataProviderManage>
  );
}

export default Panel;
