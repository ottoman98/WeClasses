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

  const users = GetPurchaseList(classe._id);
  console.log("data:", users);

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
              <td colSpan={9}>
                <div className="flex flex-row justify-between px-5 text-center">
                  <div></div>
                  <table className="my-5 border ">
                    <caption>Estudiantes</caption>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>

                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!users
                        ? ""
                        : users.map((x) => {
                            return (
                              <tr>
                                <td className="px-2">
                                  {" "}
                                  <img
                                    className="aspect-square w-14"
                                    src={x.photo}
                                    alt=""
                                  />
                                </td>
                                <td className="px-2">
                                  {x.name} {x.lastName}
                                </td>

                                <td className="px-2">{x.email}</td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </>
        )}
      </>
    );
  }
}

export default ClassElement;
