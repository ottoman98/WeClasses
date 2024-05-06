import { useContext } from "react";
import { DataContextManage } from "../../../../context/teachers/manage";
import { GetProfileStudent } from "../../../../api/axiosProfiles";
import profile from "../../../../assets/icons/profile.png";
import { desactiveAccount } from "../../../../api/axiosAdmin";
import { DataContextTabs } from "../../../../context/studentsTab";

function ManageUserStudent() {
  const { name } = useContext(DataContextManage);
  const { setName } = useContext(DataContextTabs);
  const data = GetProfileStudent(name);
  console.log(data);
  if (data?.createdAt) {
    return (
      <div className="flex flex-col gap-8">
        <img
          className="w-[20rem]"
          src={data.photo ? data.photo : profile}
          alt=""
        />

        <div className="grid grid-cols-3 gap-4">
          <span>request: {new Date(data.createdAt).toLocaleDateString()}</span>
          <span>name: {data.name}</span>
          <span>lastName: {data.lastName}</span>
          <span>email: {data.email}</span>
          <span>country: {data.country}</span>
          <span>
            phone: {data.countryCode} {data.phone}
          </span>
          <span>languages: </span>

          <span>status:{data.active}</span>
        </div>
        {data.active ? (
          <button
            onClick={() => {
              desactiveAccount(data._id, { active: false });
              setName("students");
            }}
            className="bg-red-800 text-white"
          >
            se va de baneada
          </button>
        ) : (
          <button
            onClick={() => {
              desactiveAccount(data._id, { active: true });
              setName("students");
            }}
            className="bg-green-700 text-white"
          >
            Activar
          </button>
        )}
      </div>
    );
  } else {
    return <>loading</>;
  }
}

export default ManageUserStudent;
