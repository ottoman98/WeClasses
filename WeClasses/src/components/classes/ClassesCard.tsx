import { classe } from "../../types/classeTypes";
import { FaStar, FaUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { DataContextSession } from "../../context/session";
import { GetClasseStatus } from "../../api/studentPurchases";
import { DataContextLanguage } from "../../context/language";
import { GetProfileTeacher } from "../../api/axiosProfiles";
import Loading from "../partials/Loading";

function ClassesCard({ data }: { data: classe }) {
  const navigate = useNavigate();
  const { cookie } = useContext(DataContextSession);
  const classeStatus = GetClasseStatus(data._id);
  const { translation } = useContext(DataContextLanguage);
  const location = useLocation();
  const teacher = GetProfileTeacher(data.user);
  const studentCount =
    classeStatus && classeStatus.data?.student.length == data.capacity;

  const [hidden, setHidden] = useState(false);

  return (
    <div
      className="flex gap-5 flex-row "
      onMouseEnter={() => {
        setHidden(true);
      }}
      onMouseLeave={() => {
        setHidden(false);
      }}
    >
      <div
        className={`col-span-3 flex-col justify-center md:flex-row flex border rounded-md p-2 hover:border-blue-300 w-2/3 ${
          studentCount ? "bg-gray-200" : ""
        }`}
      >
        <div className="flex justify-center md:w-1/4">
          <img
            className="h-36  rounded-xl aspect-square my-auto  "
            src={teacher?.photo}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 md:flex flex-col gap-1 px-2 justify-items-center md:w-1/4">
          <h3 className=" text-lg font-bold col-span-2">
            {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
          </h3>

          <Link className="" to={`/teacher/${data.user}`}>
            Creado por:{" "}
            <span className="text-blue-800 underline">{data.teacherName}</span>
          </Link>

          <div className="flex gap-1">
            <IoLanguageSharp size={17} />
            <span>
              {data.language == "en" ? "English" : "Español"} ({data.level})
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 w-2/3 gap-3  mx-auto">
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 justify-between px-2">
              <div className="flex flex-row gap-1 text-lg">
                <FaStar size={20} />
                <span className="-mt-1 font-bold ">4.9</span>
              </div>
              <span className="text-xl font-bold">{data.price} $</span>
            </div>

            {!data.date ? (
              ""
            ) : (
              <div className="flex justify-between">
                <span className="flex flex-row gap-1">
                  <FaCalendarAlt />
                  <span>
                    {`${new Date(data.date).toLocaleDateString()}-
                    ${new Date(data.date).toLocaleTimeString()}`}
                  </span>
                </span>
                <span className="flex flex-row gap-1">
                  <div className="flex gap-1">
                    <FaUser />
                    <span className="-mt-1">
                      {classeStatus?.first
                        ? `0/${data.capacity}`
                        : `${classeStatus?.data?.student.length}/${data.capacity}`}
                    </span>
                  </div>
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            {location.pathname == "/dashboard/" ||
            location.pathname == "/profile/" ? (
              <span
                className={`bg-blue-950 text-white p-2 rounded ${
                  studentCount ? "hidden" : ""
                }`}
              >
                <a href={data.link} target="_blank">
                  {translation.classes.card.join}
                </a>
              </span>
            ) : (
              <span
                onClick={() => {
                  if (!cookie) {
                    navigate("/login");
                  } else {
                    navigate(`/checkout/${data._id}`);
                  }
                }}
                className={`bg-blue-950 text-white p-2 rounded ${
                  studentCount ? "hidden" : ""
                }`}
              >
                {translation.classes.card.book}
              </span>
            )}

            <Link
              to={`/class/${data._id}`}
              className="bg-blue-950 text-white p-2 rounded"
            >
              {translation.classes.card.details}
            </Link>
          </div>
        </div>
      </div>
      <div>
        {!teacher ? (
          <Loading />
        ) : (
          <div className="col-span-2 h-40 flex justify-center  px-3">
            <img
              className={`aspect-video h-full ${hidden ? "" : "hidden"}`}
              src={`http://img.youtube.com/vi/${teacher.video?.slice(
                -11
              )}/0.jpg`}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassesCard;
