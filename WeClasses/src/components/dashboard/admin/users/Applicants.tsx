import { GetAllApplicants } from "../../../../api/axiosAdmin";
import ListTeachers from "./ListTeachers";

function Applicants() {
  const data = GetAllApplicants();
  console.log(data);
  if (data) {
    return <ListTeachers title="Applicants" data={data} />;
  }
}

export default Applicants;
