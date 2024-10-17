import { GetAllTeachers } from "../../../../api/axiosAdmin";
import ListTeachersApplicants from "./ListTeachersApplicants";

function TeacherList() {
  const data = GetAllTeachers();

  if (data) {
    return (
      <section>
        <h2 className="text text-4xl font-semibold text-light-blue">
          All teachers
        </h2>
        <ListTeachersApplicants title="All Teachers" data={data} />
      </section>
    );
  }
}

export default TeacherList;
