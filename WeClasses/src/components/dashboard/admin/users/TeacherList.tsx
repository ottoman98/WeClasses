import { GetAllTeachers } from "../../../../api/axiosAdmin";
import List from "./List";

function TeacherList() {
  const data = GetAllTeachers();

  if (data) {
    return <List title="All Teachers" data={data} />;
  }
}

export default TeacherList;
