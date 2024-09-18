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
import VideoOverlay from "./VideoOverlay";

function ClassesCard({
  data,
  complement,
}: {
  data: classe;
  complement: boolean | undefined;
}) {
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
        className={`col-span-3 flex-col justify-center md:flex-row flex border rounded-md p-2 hover:border-blue-900 bg-white ${
          !complement ? "w-full" : "w-2/3"
        } ${studentCount ? "bg-gray-200" : ""}`}
      >
        <div className="flex flex-col items-center md:w-1/4">
          <img
            className="h-24 aspect-square my-auto rounded-full "
            src="https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg"
            alt=""
          />
          <div className="flex flex-row gap-1 text-lg text-yellow-300">
            <FaStar size={12} />
            <span className="-mt-2">4.9</span>
          </div>
          <span className="">46 classes dictadas</span>
        </div>
        <div className="w-full px-10 ">
          <div className="flex flex-col gap-1">
            <h3 className="text-customBlack text-xl font-semibold">
              {data.name.length > 40
                ? data.name.slice(0, 40) + "..."
                : data.name}
            </h3>
            <div className="flex justify-between py-2">
              <Link className="" to={`/teacher/${data.user}`}>
                Creado por:{" "}
                <span className="text-light-blue underline hover:text-blue-900">
                  {data.teacherName}
                </span>
              </Link>

              <div className="flex gap-1">
                <IoLanguageSharp className="text-light-blue" size={15} />
                <span>
                  {data.language == "en" ? "English" : "Español"} ({data.level})
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 ">
            <div className=" flex flex-col gap-3">
              {!data.date ? (
                ""
              ) : (
                <div>
                  <div className="flex flex-row gap-1 ">
                    <FaCalendarAlt size={15} className="text-light-blue" />
                    <span className="font-semibold">
                      {`${new Date(data.date).toLocaleDateString()}-
                    ${new Date(data.date).toLocaleTimeString()}`}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-bold text-base text-green-600">
                  USD {data.price}.00
                </span>
                <span className="flex flex-row gap-1">
                  <div className="flex gap-1">
                    <FaUser size={15} className="text-light-blue" />
                    <span className="">
                      {classeStatus?.first
                        ? `0/${data.capacity}`
                        : `${classeStatus?.data?.student.length}/${data.capacity}`}
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex  gap-2   ">
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
                  className={`bg-gray-200 text-customBlack hover:bg-gray-300  p-2 rounded cursor-pointer ${
                    studentCount ? "hidden" : ""
                  }`}
                >
                  {translation.classes.card.book}
                </span>
              )}

              <Link
                to={`/class/${data._id}`}
                className="bg-gray-200 hover:bg-gray-300  text-customBlack p-2 rounded cursor-pointer"
              >
                {translation.classes.card.details}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={!complement ? "hidden" : "flex  items-center"}>
        {!teacher ? (
          <Loading />
        ) : (
          <VideoOverlay hidden={hidden} video={teacher?.video} />
        )}
      </div>
    </div>
  );
}

export default ClassesCard;
