import { teacherData } from "../../../../types/teacher";
import { useContext } from "react";
import { DataContextTabs } from "../../../../context/studentsTab";
import { DataContextManage } from "../../../../context/teachers/manage";

function ListElementTeacher({ data }: { data: teacherData }) {
  const { setName } = useContext(DataContextTabs);
  const manage = useContext(DataContextManage).setName;
  console.log();
  if (data.createdAt) {
    return (
      <tr
        className={` border-gray-200 dark:border-gray-700 hover:bg-gray-100 $`}
      >
        <td className="px-6 py-4">
          {new Date(data.createdAt).toLocaleDateString()}
        </td>
        <td className="px-6 py-4 ">
          <span> {data.name}</span>
        </td>
        <td className="px-6 py-4 ">
          <div className="flex flex-col">
            <span> {data.lastName}</span>
          </div>
        </td>
        <td className="px-6 py-4 text-center text-light-blue">
          <span> {data.email}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span> {data.phone}</span>
        </td>

        <td className=" px-6 py-4 text-green-600   text-center">
          <span> {new Date(data.birthDay).toLocaleDateString()}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <span>
            {data.approved === undefined
              ? "Sin gestionar aun"
              : data.approved === false
              ? "Rejected"
              : ""}
          </span>
        </td>

        <td className="px-6 py-4 text-center">
          <span
            className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer"
            onClick={() => {
              setName("manage");
              manage(data._id);
            }}
          >
            gestionar
          </span>
        </td>
      </tr>
    );
  }
}

export default ListElementTeacher;
