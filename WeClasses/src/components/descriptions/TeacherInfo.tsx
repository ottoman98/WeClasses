import { useParams } from "react-router-dom";
import { GetProfileTeacher } from "../../api/axiosProfiles";
import { GetAllClassesProfile } from "../../api/axiosClasses";
import ClassesCard from "../classes/ClassesCard";
import Loading from "../partials/Loading";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";

function TeacherInfo() {
  const { id } = useParams();
  const data = GetProfileTeacher(id);
  const classes = GetAllClassesProfile(id);
  const { translation } = useContext(DataContextLanguage);

  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="px-10 py-12  flex flex-col gap-4">
        <div className="flex gap-4">
          <img className="w-36" src={data.photo} alt="" />

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl">{data.name}</h2>
            <span>{data.country}</span>
            <span>Speaks {data.languages.map((x) => `${x.language}, `)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg">
            {translation.descriptions.teacher.titles[0]}
          </h3>
          <p>{data.description}</p>
        </div>
        <div className="flex flex-col text-lg py-3 gap-2">
          <button className="rounded-md border w-full bg-blue-900 text-white">
            Send message
          </button>
          <button className="rounded-md border w-full bg-blue-900 text-white">
            Save To my list
          </button>
        </div>
        <iframe
          className="w-[50rem] aspect-video mx-auto"
          src={data.video?.replace("/watch?v=", "/embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div>
          <h3 className="text-lg">
            {translation.descriptions.teacher.titles[1] == "Classes"
              ? data.name +
                "'s" +
                " " +
                translation.descriptions.teacher.titles[1]
              : translation.descriptions.teacher.titles[1] + " " + data.name}
          </h3>
          <div className="grid grid-cols-3">
            {!classes
              ? ""
              : classes.map((x) => {
                  return <ClassesCard data={x} />;
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherInfo;
