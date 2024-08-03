import { Link, useParams } from "react-router-dom";
import { GetClasseById } from "../../api/axiosClasses";
import Loading from "../partials/Loading";
import { FaCalendar } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";

function ClassInfo() {
  const { id } = useParams();
  const { cookie } = useContext(DataContextSession);
  const classe = GetClasseById(id);
  const navigate = useNavigate();
  if (!classe) {
    return <Loading />;
  }
  return (
    <>
      <div className="gap-2 px-2 md:px-32 py-10 pt-28 max-w-[80rem] mx-auto ">
        <div className="w-3/4 mx-auto flex flex-col gap-2">
          <img
            className="rounded-sm border-blue-300 "
            src={classe.photo}
            alt=""
          />

          <h2 className="text-3xl font-bold">{classe.name}</h2>
          <p>{classe.description}</p>
          <p>
            Creado por:{" "}
            <Link
              className="text-blue-800 underline"
              to={`/teacher/${classe.user}`}
            >
              {classe && classe.teacherName
                ? classe.teacherName.slice(0, 1).toUpperCase() +
                  classe.teacherName.slice(1)
                : ""}
            </Link>{" "}
          </p>
          <span className=" flex flex-row gap-1">
            <TbWorld size={16} className="-mt-[2px]" />
            {classe.language == "en" ? "English" : "Español"} ({classe.level})
          </span>
          <span className=" flex flex-row gap-1">
            <FaCalendar size={16} className="-mt-[2px]" />
            {`${new Date(classe.date).toLocaleDateString()} -
              ${new Date(classe.date).toLocaleTimeString()} (${
              classe.duration
            } ${classe.duration > 1 ? "Horas" : "Hora"})`}
          </span>

          <div className="flex flex-col gap-2 col-span-2 pt-8">
            <span className="font-bold text-xl">{classe.price}.00 $</span>
            <button
              onClick={() => {
                if (!cookie) {
                  navigate("/login");
                } else {
                  navigate(`/checkout/${classe._id}`);
                }
              }}
              className="border border-blue-300 font-bold py-2 hover:bg-blue-100"
            >
              Comprar Clase
            </button>
            <span className="text-center italic text-gray-400">
              Puedes cancelar hasta 24 horas antes
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassInfo;
