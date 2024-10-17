import { GetAllTeachers } from "../../../../api/axiosAdmin";
import ListTeachersApplicants from "./ListTeachersApplicants";

function TeacherList() {
  const data = GetAllTeachers();

  if (data) {
    return <ListTeachersApplicants title="All Teachers" data={data} />;
  }
}

export default TeacherList;
