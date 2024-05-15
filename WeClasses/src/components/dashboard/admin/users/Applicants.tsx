import { GetAllApplicants } from "../../../../api/axiosAdmin";
import ListTeachers from "./ListTeachers";

function Applicants() {
  const data = GetAllApplicants();
  console.log(data);
  if (data) {
    return (
      <div>
        <h2 className="text-xl font-bold">Applicants</h2>
        <ListTeachers title="Applicants" data={data} />
      </div>
    );
  }
}

export default Applicants;
