import { teacherData } from "../../../../types/teacher";
import ListElementTeacher from "./ListElementTeacher";

function ListTeachersApplicants({
  data,
}: {
  data: Array<teacherData>;
  title: string;
}) {
  console.log(data);
  if (data) {
    return (
      <section className="md:max-w-[80rem] mx-auto flex ga flex-col py-4 gap-3 ">
        <div className="overflow-auto px-10">
          <table className="w-full text-sm text-center  bg-white border text-customBlack">
            <thead className="text-customBlack font-normal border bg-gray-100">
              <tr>
                <th className="px-1 py-3 font-normal">Fecha de registro</th>
                <th className="px-1 py-3 font-normal">Nombre</th>
                <th className="px-1 py-3 font-normal">Apellido</th>
                <th className="px-1 py-3 font-normal">Email</th>
                <th className="px-1 py-3 font-normal">Telefono</th>
                <th className="px-1 py-3 font-normal">Fecha de nacimiento</th>
                <th className="px-1 py-3 font-normal">Status</th>
                <th className="px-1 py-3 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x) => {
                return <ListElementTeacher data={x} />;
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  } else {
    return <>No hay solicitudes pendientes</>;
  }
}

export default ListTeachersApplicants;
