import { GetAllApplicants } from "../../../../api/axiosAdmin";
import List from "./List";

function Applicants() {
  const data = GetAllApplicants();
  console.log(data);
  if (data) {
    return <List data={data} />;
  }
}

export default Applicants;
