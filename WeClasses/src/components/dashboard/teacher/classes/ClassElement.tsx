import { useState } from "react";
import {
  GetClasseStatus,
  GetPurchaseList,
} from "../../../../api/studentPurchases";
import { classe } from "../../../../types/classeTypes";

import ClassOptions from "../../../partials/ClassOptions";

function ClassElement({ data: classe }: { data: classe }) {
  const classStatus = GetClasseStatus(classe._id);
  const [hidden, setHidden] = useState(false);

  GetPurchaseList(["661dc639760fee76ed31c8d8", "661dc37e924711d5a1b07b33"]);
  console.log(classStatus?.data);

  if (classe.createdAt) {
    return (
      <>
        <tr>
          <td className="text-center">
            {new Date(classe.createdAt).toLocaleDateString() +
              " " +
              new Date(classe.createdAt).toLocaleTimeString()}
          </td>
          <td className="text-center">{classe.name}</td>
          <td className="text-center">
            {classe.language == "en" ? "English" : "Español"}
          </td>
          <td className="text-center">{classe.level}</td>
          <td className="text-center">
            {new Date(classe.date).toLocaleDateString() +
              " " +
              new Date(classe.date).toLocaleTimeString()}
          </td>
          <td className="text-center">{classe.duration} horas </td>
          <td className="text-center">
            {classStatus?.first ? 0 : classStatus?.data?.student.length}/
            {classe.capacity}
          </td>
          {classStatus?.first ? (
            <td className="text-center">-</td>
          ) : (
            <td
              className="text-center hover:text-blue-500 underline cursor-pointer"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              Ver
            </td>
          )}

          <td className="text-center">
            <ClassOptions id={classe._id} />
          </td>
        </tr>
        {!hidden ? (
          ""
        ) : (
          <>
            <tr>
              <td colSpan={6}>
                <h4>Estudiantes</h4>
                <table className="bg-blue-500 my-5">
                  <th>
                    <tr>
                      <td>Nombre</td>
                    </tr>
                  </th>
                  <tbody>
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </>
        )}
      </>
    );
  }
}

export default ClassElement;
