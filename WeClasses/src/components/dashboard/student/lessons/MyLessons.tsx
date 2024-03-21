import { GetAllPurchaseClasses } from "../../../../api/axiosClasses";
import ClassesCard from "./ClassesCardProfile";
import NoLessons from "./NoLessons";

function MyLessons() {
  const classes = GetAllPurchaseClasses();

  return (
    <section className="max-w-[80rem]  mx-auto flex flex-col gap-5 py-6">
      <h2 className=" text-4xl">My Lessons</h2>
      <div className="flex flex-col gap-3">
        {!classes ? (
          <NoLessons />
        ) : (
          classes.map((x) => {
            return <ClassesCard data={x} />;
          })
        )}
      </div>
    </section>
  );
}

export default MyLessons;
