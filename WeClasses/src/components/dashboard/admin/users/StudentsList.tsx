import { GetAllStudents } from "../../../../api/axiosAdmin";
import ListElementStudent from "./ListElementStudent";

function StudentsList() {
  const data = GetAllStudents();

  if (data) {
    return (
      <section className="md:max-w-[80rem] mx-auto flex flex-col py-4 gap-3">
        <h2 className="text-4xl font-semibold text-light-blue">All Students</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center  bg-white border text-customBlack">
            <thead className="text-customBlack font-normal border bg-gray-100">
              <tr>
                <th className="px-1 py-3 font-normal">Fecha de registro</th>
                <th className="px-1 py-3 font-normal">Nombre</th>
                <th className="px-1 py-3 font-normal">Apellido</th>
                <th className="px-1 py-3 font-normal">Email</th>
                <th className="px-1 py-3 font-normal">Teléfono</th>
                <th className="px-1 py-3 font-normal">País</th>
                <th className="px-1 py-3 font-normal">Nativo en</th>
                <th className="px-1 py-3 font-normal">Aprendiendo</th>
                <th className="px-1 py-3 font-normal">Status</th>
                <th className="px-1 py-3 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((x) => {
                return <ListElementStudent data={x} />;
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

export default StudentsList;
