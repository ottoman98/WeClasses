import { GetAllPurchaseClasses } from "../../../../api/axiosClasses";
import ClassItem from "./ClassesItem";
import NoLessons from "./NoLessons";

function MyLessons() {
  const classes = GetAllPurchaseClasses();
  console.log(classes);

  return (
    <section className="min-h-[50vh] flex flex-col">
      {!classes ? (
        <NoLessons />
      ) : (
        classes.map((x) => {
          return <ClassItem data={x} />;
        })
      )}
    </section>
  );
}

export default MyLessons;
