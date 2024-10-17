import { GetAllApplicants } from "../../../../api/axiosAdmin";
import ListTeachersApplicants from "./ListTeachersApplicants";

function Applicants() {
  const data = GetAllApplicants();
  console.log(data);
  if (data) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-light-blue">Applicants</h2>
        <ListTeachersApplicants title="Applicants" data={data} />
      </div>
    );
  }
}

export default Applicants;
