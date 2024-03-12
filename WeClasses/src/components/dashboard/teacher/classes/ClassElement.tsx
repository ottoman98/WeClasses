import { classe } from "../../../../types/classeTypes";

import ClassOptions from "../../../partials/ClassOptions";

function ClassElement({ data: classe }: { data: classe }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th>{classe.createdAt}</th>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {classe.name}
      </td>
      <td className="px-6 py-4">
        {classe.language == "en" ? "English" : "Español"}
      </td>
      <td className="px-6 py-4">{classe.level}</td>
      <td className="px-6 py-4">{classe.date}</td>
      <td className="px-6 py-4">{classe.duration} horas</td>
      <td className="px-6 py-4 text-right flex gap-3">
        <ClassOptions id={classe._id} />
      </td>
    </tr>
  );
}

export default ClassElement;
