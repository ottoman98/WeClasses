import { useContext } from "react";
import { GetAllPurchaseClasses } from "../../../../api/axiosClasses";
import ClassesCard from "../../../classes/ClassesCard";
import NoLessons from "./NoLessons";
import { DataContextLanguage } from "../../../../context/language";

function MyLessons() {
  const classes = GetAllPurchaseClasses();
  const { translation } = useContext(DataContextLanguage);

  return (
    <section className="max-w-[80rem]  mx-auto flex flex-col gap-5 py-6">
      <h2 className=" text-4xl">{translation.profiles.teacher.purchase}</h2>
      <div className="flex flex-col gap-3">
        {!classes ? (
          <NoLessons />
        ) : (
          classes.map((x) => {
            if (x) {
              return <ClassesCard complement={false} data={x} />;
            }
          })
        )}
      </div>
    </section>
  );
}

export default MyLessons;
