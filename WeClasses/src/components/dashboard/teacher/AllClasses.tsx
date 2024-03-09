import { useContext } from "react";
import { GetAllClassesTeacher } from "../../../api/axiosClasses";
import { DataContextTabsClasses } from "../../../context/classes/classes";
import EditClassesForm from "./EditClassForm";
import ClassesForm from "./ClassesForm";

function AllClasses() {
  const data = GetAllClassesTeacher();

  const { name, setName } = useContext(DataContextTabsClasses);
  console.log(name);

  if (name == "") {
    return (
      <>
        <span
          onClick={() => {
            setName("add");
          }}
        >
          +add class
        </span>
        <table className="bg-red-500">
          <thead>
            <tr>
              <th>Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((x) => {
              return (
                <tr>
                  <th>{x.name}</th>
                  <th
                    onClick={() => {
                      setName(x._id);
                    }}
                  >
                    edit
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  if (name == "add") {
    return <ClassesForm />;
  } else {
    return <EditClassesForm />;
  }
}

export default AllClasses;
