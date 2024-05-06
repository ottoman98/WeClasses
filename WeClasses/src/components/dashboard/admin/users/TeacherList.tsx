import { GetAllTeachers } from "../../../../api/axiosAdmin";
import ListTeachers from "./ListTeachers";

function TeacherList() {
  const data = GetAllTeachers();

  if (data) {
    return <ListTeachers title="All Teachers" data={data} />;
  }
}

export default TeacherList;
