import { useParams } from "react-router-dom";
import { GetProfileTeacher } from "../../api/axiosProfiles";
import { GetAllClassesProfile } from "../../api/axiosClasses";
import ClassesCard from "../classes/ClassesCard";

function TeacherInfo() {
  const { id } = useParams();
  const data = GetProfileTeacher(id);
  const classes = GetAllClassesProfile(id);

  if (!data) {
    return <>loading</>;
  } else {
    return (
      <div className="px-10 py-12  flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            className="w-36"
            src="https://avatars.preply.com/i/logos/i/logos/avatar_i1m6j2viuod.jpg"
            alt=""
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl">{data.name}</h2>
            <span>{data.country}</span>
            <span>Speaks {data.languages.map((x) => `${x.language}, `)}</span>
          </div>
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
          src="https://www.youtube.com/embed/QK8mJJJvaes?si=GWTOQJg2VRE4abOZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg">Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam
            distinctio labore sint tempora rerum, deleniti doloremque ea, quasi
            fugiat repellendus beatae quis dolores eius. Rerum, neque! Facere,
            id tempore.
          </p>
        </div>
        <div>
          <h3 className="text-lg">{data.name}'s classes</h3>
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
