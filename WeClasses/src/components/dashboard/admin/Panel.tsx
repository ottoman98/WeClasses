import { useContext } from "react";
import AsideAdmin from "./AsideAdmin";
import { DataContextTabs } from "../../../context/studentsTab";
import UserOptions from "../../partials/UserOptions";
import AllClasses from "./classes/AllClasses";
import EditClassesForm from "./classes/EditClassForm";
import { DataProviderTabsClasses } from "../../../context/classes/classes";
import Settings from "./settings/Settings";
import StudentsList from "./users/StudentsList";
import TeacherList from "./users/TeacherList";
import Applicants from "./users/Applicants";
import ManageUserTeacher from "./users/ManageTeacher";
import { DataProviderManage } from "../../../context/teachers/manage";
import ManageUserStudent from "./users/ManageUserStudent";
import Loading from "./users/Loading";

function Panel() {
  const { name } = useContext(DataContextTabs);

  function tabs() {
    switch (name) {
      case "resume":
        return "resume";
      case "all":
        return <AllClasses />;
      case "add":
        return <EditClassesForm />;
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
    }
  }

  return (
    <DataProviderManage>
      <DataProviderTabsClasses>
        <nav className=" flex justify-between px-16">
          <div></div>
          <UserOptions />
        </nav>
        <div className="flex">
          <AsideAdmin />
          {tabs()}
        </div>
      </DataProviderTabsClasses>
    </DataProviderManage>
  );
}

export default Panel;
