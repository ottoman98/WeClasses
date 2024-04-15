import { GetAllPurchaseNames } from "../../../../../api/studentPurchases";
import { classe } from "../../../../../types/classeTypes";

function ClassElementBooked({
  data: classe,
  student,
}: {
  data: classe;
  student: string;
}) {
  const name = GetAllPurchaseNames(student);
  if (classe.createdAt) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th>
          {new Date(classe.createdAt).toLocaleDateString() +
            " " +
            new Date(classe.createdAt).toLocaleTimeString()}
        </th>
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
        <td className="px-6 py-4">
          {new Date(classe.duration).toLocaleDateString() +
            " " +
            new Date(classe.duration).toLocaleTimeString()}
        </td>
        <td>
          name del stuident hubo un error porque borre usuarios, toca move por
          alla
        </td>
        <td className="px-6 py-4">{classe.duration} horas</td>
      </tr>
    );
  }
}

export default ClassElementBooked;
