import { GetAllClasses } from "../../api/axiosClasses";
import ClassesCard from "./ClassesCard";

function ClassesList() {
  const classes = GetAllClasses();

  return (
    <section>
      <h2>Online English tutors & teachers for private lessons</h2>
      <div>
        <div>filters</div>
        <div className="px-10 py-5 flex flex-col gap-5">
          {classes?.map((x) => {
            return <ClassesCard data={x} key={x._id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ClassesList;
