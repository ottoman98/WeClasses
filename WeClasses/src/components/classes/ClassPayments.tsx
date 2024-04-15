import { useParams } from "react-router-dom";
import { GetClasseById } from "../../api/axiosClasses";
import { decodeToken } from "react-jwt";
import { GetClasseStatus } from "../../api/studentPurchases";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import Resume from "./Resume";

function ClassPayments() {
  const { id } = useParams();

  // Add type check or default value assignment to ensure id is always a string
  const classId: string | undefined = id ?? ""; // Assign default value if id is undefined

  const data = GetClasseById(classId);
  const classeStatus = GetClasseStatus(classId);

  const { cookie } = useContext(DataContextSession);
  const decoded: { id: string } | null = decodeToken(cookie as string);

  if (data && classeStatus) {
    if (classeStatus.first) {
      return <Resume data={data} />;
    } else {
      if (classeStatus.data) {
        if (decoded) {
          if (classeStatus.data.student.includes(decoded?.id)) {
            return <p> ya lo compraste</p>;
          }
          if (classeStatus.data?.student.length >= data.capacity) {
            return <p>ta lleno</p>;
          }
        }
      }
      return <Resume data={data} />;
    }
  }

  // Add a default return statement to handle cases where data or classeStatus is not available
  return null; // or any other fallback UI
}

export default ClassPayments;
