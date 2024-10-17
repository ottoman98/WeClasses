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
      <div className="flex flex-col justify-center gap-3">
        <h2 className=" text-light-blue text-3xl text-center">
          Review de Aplicante
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <img
            className="w-96 rounded-lg aspect-square mx-auto"
            src={data.photo}
            alt=""
          />

          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Fecha de registro:</span>
              <span>{new Date(data.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Name:</span>
              <span>{data.name}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Apellido:</span>
              <span>{data.lastName}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Email:</span>
              <span>{data.email}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">País de origen</span>
              <span>{data.country}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Teléfono:</span>
              <span>{data.phone}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Idiomas:</span>
              {data.languages.map((x) => (
                <span>
                  {(x.language == "en" ? "Inglés" : "Español") +
                    " " +
                    `(${x.level})`}
                  ,
                </span>
              ))}
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Status:</span>
              <span>
                {data.approved ? "Por aprobar" : "Fue rechazado en el pasado"}
              </span>
            </div>
          </div>
          <div className="col-span-2 w-full flex flex-col items-center mx-auto gap-1 font-semibold">
            <h2 className=" text-light-blue text-2xl">Video Presentación</h2>
            <iframe
              className=" mx-auto aspect-video w-full  "
              src={data.video?.replace("/watch?v=", "/embed/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
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
                className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer"
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
                className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer"
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
      </div>
    );
  } else {
    return <>loading</>;
  }
}

export default ManageUserTeacher;
