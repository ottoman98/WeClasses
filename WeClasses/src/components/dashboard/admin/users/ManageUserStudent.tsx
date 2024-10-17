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

  if (data?.createdAt) {
    return (
      <div className="flex flex-col gap-4 px-4  items-center">
        <h2 className="text-light-blue font-semibold text-3xl">
          Gestionar Estudiante
        </h2>

        <div className="flex flex-col gap-2 ">
          <img
            className="w-40 mx-auto "
            src={data.photo ? data.photo : profile}
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Fecha de registro:</span>
              <span> {new Date(data.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Nombre:</span>
              <span> {data.name}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Apellido:</span>
              <span> {data.lastName}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Email:</span>
              <span> {data.email}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">País:</span>
              <span> {data.country}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Teléfono:</span>
              <span>
                {data.countryCode} {data.phone}
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Aprendiendo:</span>
              <span>
                {data.languageToLearn} ({data.languageLevel})
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Idioma Nativo:</span>
              <span>{data.nativeLanguage}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-light-blue">Status:</span>
              <span>{data.active ? "Activo" : "Inactivo"}</span>
            </div>
          </div>
          <div>
            {data.active ? (
              <button
                onClick={() => {
                  setName("loading");
                  desactiveAccount(data._id, { active: false });
                  setTimeout(() => {
                    setName("students");
                  }, 1000);
                }}
                className="bg-red-800 text-white px-2 rounded-xl hover:scale-105"
              >
                se va de baneada
              </button>
            ) : (
              <button
                onClick={() => {
                  setName("loading");
                  desactiveAccount(data._id, { active: true });
                  setTimeout(() => {
                    setName("students");
                  }, 1000);
                }}
                className="bg-green-700 text-white"
              >
                Activar
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <>loading</>;
  }
}

export default ManageUserStudent;
