import { useContext } from "react";
import profile from "../../../../assets/icons/profile.png";

import { DataContextManage } from "../../../../context/teachers/manage";
import { DataContextTabs } from "../../../../context/studentsTab";
import { fullContact } from "../../../../types/userTypes";

function ListElementStudent({ data }: { data: fullContact }) {
  const { setName } = useContext(DataContextManage);
  const tabs = useContext(DataContextTabs).setName;

  if (data.createdAt) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="flex justify-center">
          <img
            className="aspect-square w-16"
            src={data.photo ? data.photo : profile}
            alt=""
          />
        </th>
        <th>{new Date(data.createdAt).toLocaleDateString()}</th>
        <th>{data.name}</th>
        <th>{data.lastName}</th>
        <th>{data.email}</th>
        <th>{data.phone}</th>
        <th>{data.country}</th>
        <th>{data.nativeLanguage}</th>
        <th>
          {data.languageToLearn} ({data.languageLevel})
        </th>
        <th>{data.active ? "active" : "banned"}</th>

        <th>
          <button
            className="bg-blue-600 text-white"
            onClick={() => {
              setName(data._id);
              tabs("manageStudent");
            }}
          >
            Gestionar
          </button>
        </th>
      </tr>
    );
  }
}

export default ListElementStudent;
