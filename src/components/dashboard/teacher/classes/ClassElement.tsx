import {
  GetClasseStatus,
  GetPurchaseList,
} from "../../../../api/studentPurchases";
import { classe } from "../../../../types/classeTypes";

import ClassOptions from "../../../partials/ClassOptions";

function ClassElement({ data: classe }: { data: classe }) {
  const classStatus = GetClasseStatus(classe._id);

  const users = GetPurchaseList(classe._id);
  console.log("data:", users);

  if (classe.createdAt) {
    return (
      <>
        <tr
          className={` border-gray-200 dark:border-gray-700 hover:bg-gray-100 $`}
        >
          <td className="px-6 py-4 flex flex-col">
            <span className="font-semibold ">
              {new Date(classe.createdAt).toLocaleDateString()}
            </span>
            <span className="text-slate-500">
              {new Date(classe.createdAt).toLocaleTimeString()}
            </span>
          </td>
          <td className="px-6 py-4">{classe.name}</td>
          <td className="px-6 py-4 text-center flex flex-col">
            <span
              className={`${
                classe.language == "en"
                  ? "bg-blue-300 text-blue-700"
                  : "bg-red-300 text-red-700"
              }  rounded-xl text-xs font-semibold px-1`}
            >
              {classe.language == "en" ? "English" : "Español"}
            </span>
            <span className="text-xs">{classe.level}</span>
          </td>
          <td className="px-6 py-4 ">
            <div className="flex flex-col">
              <span className="font-semibold">
                {new Date(classe.date).toLocaleDateString()}
              </span>
              <span className="text-slate-500">
                {new Date(classe.date).toLocaleTimeString()}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 text-center text-light-blue">
            {classe.duration < 1
              ? `${Math.round(60 * classe.duration)} minutos`
              : `${classe.duration} hora${classe.duration > 1 ? "s" : ""}`}
          </td>
          <td className="px-6 py-4 text-center">
            {classStatus?.first ? 0 : classStatus?.data?.student.length}/
            {classe.capacity}
          </td>

          <td className=" px-6 py-4 text-green-600   text-center">
            {classe.price} $
          </td>

          <td className="px-6 py-4 text-center">
            <ClassOptions id={classe._id} />
          </td>
        </tr>
      </>
    );
  }
}

export default ClassElement;
