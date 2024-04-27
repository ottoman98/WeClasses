import { teacherData } from "../../../../types/teacher";

function ListElement({ data }: { data: teacherData }) {
  if (data.createdAt) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="flex justify-center">
          <img className="aspect-square w-16" src={data.photo} alt="" />
        </th>
        <th>{new Date(data.createdAt).toLocaleDateString()}</th>
        <th>{data.name}</th>
        <th>{data.lastName}</th>
        <th>{data.email}</th>
        <th>{data.phone}</th>
        <th>{new Date(data.birthDay).toLocaleDateString()}</th>
        <th className="flex flex-col">
          {data.languages.map((x) => (
            <span>{`${x.language}  (${x.level}`})</span>
          ))}
        </th>
        <th>
          {data.score.length > 0
            ? data.score.reduce((acc, currentValue) => acc + currentValue, 0) /
              data.score.length
            : "no tiene calificaciones aun"}
        </th>
        <th>
          <button className="bg-blue-600 text-white">Gestionar</button>
        </th>
      </tr>
    );
  }
}

export default ListElement;
