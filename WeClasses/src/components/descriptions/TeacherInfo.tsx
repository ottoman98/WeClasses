import { useParams } from "react-router-dom";
import { GetProfileTeacher } from "../../api/axiosProfiles";
import { GetAllClassesProfile } from "../../api/axiosClasses";
import ClassesCard from "../classes/ClassesCard";
import Loading from "../partials/Loading";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";
import { TiWorld } from "react-icons/ti";
import { IoLanguageSharp } from "react-icons/io5";

function TeacherInfo() {
  const { id } = useParams();
  const data = GetProfileTeacher(id);
  const classes = GetAllClassesProfile(id);
  const { translation } = useContext(DataContextLanguage);

  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="px-10 py-12  flex flex-col gap-4 pt-28 max-w-[80rem] mx-auto ">
        <div className="flex gap-4 bg-white p-2  rounded-lg border border-light-blue shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <img
            className="h-36 rounded-full aspect-square"
            src={data.photo}
            alt=""
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-light-blue  font-semibold">
              {data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}
            </h2>
            <div className="text-xl flex flex-col">
              <span className="flex flex-row">
                <TiWorld className="m-1 text-light-blue" size={23} />
                {data.country}
              </span>
              <span className="flex flex-row">
                <IoLanguageSharp className="m-1 text-light-blue" size={23} />{" "}
                {data.languages.map((x) => `${x.language}, `)}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-light-blue">
                {translation.descriptions.teacher.titles[0]}
              </h3>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                ipsam aliquam quas, nemo aliquid obcaecati! Corrupti quae quia,
                enim officiis necessitatibus eos atque nam repellat a in vel
                impedit quisquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus aspernatur a quis corporis
                reiciendis quam, voluptatem commodi esse dolor magni labore
                blanditiis ullam eos at suscipit nam, totam quia quisquam.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row text-lg py-3 gap-10">
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer">
            Send message
          </button>
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer">
            Save To my list
          </button>
        </div>
        <iframe
          className="w-[50rem] aspect-video mx-auto"
          src={data.video?.replace("/watch?v=", "/embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div className="">
          <h3 className="text-3xl font-semibold text-light-blue">
            {translation.descriptions.teacher.titles[1] == "Classes"
              ? data.name.slice(0, 1).toLocaleUpperCase() +
                data.name.slice(1) +
                "'s" +
                " " +
                translation.descriptions.teacher.titles[1]
              : translation.descriptions.teacher.titles[1] + " " + data.name}
          </h3>
          <div className="grid grid-cols-2 gap-3 bg-white p-5 rounded-xl">
            {!classes
              ? ""
              : classes.map((x) => {
                  return <ClassesCard complement={false} data={x} />;
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherInfo;
