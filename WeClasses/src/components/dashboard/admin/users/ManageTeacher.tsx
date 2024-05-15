import { useContext } from "react";
import { DataContextManage } from "../../../../context/teachers/manage";
import { GetProfileTeacher } from "../../../../api/axiosProfiles";
import { approbation, desactiveAccount } from "../../../../api/axiosAdmin";
import { DataContextTabs } from "../../../../context/studentsTab";

function ManageUserTeacher() {
  const { name } = useContext(DataContextManage);
  const { setName } = useContext(DataContextTabs);

  const data = GetProfileTeacher(name);
  console.log(data);
  if (data?.createdAt) {
    return (
      <div className="flex flex-col gap-8">
        <img className="w-[20rem]" src={data.photo} alt="" />

        <div className="grid grid-cols-3 gap-4">
          <span>request: {new Date(data.createdAt).toLocaleDateString()}</span>
          <span>name: {data.name}</span>
          <span>lastName: {data.lastName}</span>
          <span>email: {data.email}</span>
          <span>country: {data.country}</span>
          <span>
            phone: {data.countryCode} {data.phone}
          </span>
          <span>
            languages:{" "}
            <div className="flex flex-col gap-2">
              {data.languages.map((x) => (
                <span>{x.language + " " + `(${x.level})`}</span>
              ))}
            </div>
          </span>
          <span className="hover:text-blue-800">
            video:{" "}
            <a target="_blank" href={data.video}>
              {data.video}
            </a>
          </span>
          <span>status:{data.active}</span>
        </div>
        {!data.approved ? (
          <>
            <button
              onClick={() => {
                approbation(data._id, { approved: true });
                setName("loading");
                setTimeout(() => {
                  setName("applicants");
                }, 1000);
              }}
              className="bg-blue-900 text-white"
            >
              aprobar
            </button>
            <button
              onClick={() => {
                approbation(data._id, { approved: false });
                setName("loading");
                setTimeout(() => {
                  setName("applicants");
                }, 1000);
              }}
              className="bg-red-800 text-white"
            >
              rechazar
            </button>
          </>
        ) : (
          <>
            {data.active ? (
              <button
                onClick={() => {
                  desactiveAccount(data._id, { active: false });
                  setName("loading");
                  setTimeout(() => {
                    setName("teachers");
                  }, 1000);
                }}
                className="bg-red-800 text-white"
              >
                se va de baneada
              </button>
            ) : (
              <button
                onClick={() => {
                  desactiveAccount(data._id, { active: true });
                  setName("loading");
                  setTimeout(() => {
                    setName("teachers");
                  }, 1000);
                }}
                className="bg-green-700 text-white"
              >
                Activar
              </button>
            )}
          </>
        )}
      </div>
    );
  } else {
    return <>loading</>;
  }
}

export default ManageUserTeacher;
