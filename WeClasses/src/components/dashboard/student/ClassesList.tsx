import { GetAllClasses } from "../../../api/axiosClasses";

function ClassesList() {
  const classes = GetAllClasses();

  return (
    <section>
      <h2>Online English tutors & teachers for private lessons</h2>
      <div>
        <div>filters</div>
        <div>
          {classes?.map(() => {
            return <>uwu</>;
          })}
        </div>
      </div>
    </section>
  );
}

export default ClassesList;
