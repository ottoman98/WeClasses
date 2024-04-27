import { GetAllStudents } from "../../../../api/axiosAdmin";

function StudentsList() {
  const data = GetAllStudents();

  console.log(data);

  return <div>studentsList</div>;
}

export default StudentsList;
