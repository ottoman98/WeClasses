import { useParams } from "react-router-dom";
import { GetClasseById } from "../../api/axiosClasses";
import { decodeToken } from "react-jwt";
import { GetClasseStatus } from "../../api/studentPurchases";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import Resume from "./Resume";

function ClassPayments() {
  const { id } = useParams();

  const classId: string | undefined = id ?? "";

  const data = GetClasseById(classId);
  const classeStatus = GetClasseStatus(classId);
  console.log("status:", classeStatus);

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

  return <>went wrong</>;
}

export default ClassPayments;
