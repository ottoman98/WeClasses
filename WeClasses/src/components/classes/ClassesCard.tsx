import { classe } from "../../types/classeTypes";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { GetClasseStatus } from "../../api/studentPurchases";
import { DataContextLanguage } from "../../context/language";

function ClassesCard({ data }: { data: classe }) {
  const navigate = useNavigate();
  const { cookie } = useContext(DataContextSession);
  const classeStatus = GetClasseStatus(data._id);
  const { translation } = useContext(DataContextLanguage);
  const location = useLocation();
  console.log(data);
  const studentCount =
    classeStatus && classeStatus.data?.student.length == data.capacity;

  return (
    <div
      className={`flex border rounded-md p-2 ${
        studentCount ? "bg-gray-200" : ""
      }`}
    >
      <img
        className="h-28  rounded-full aspect-square"
        src={data.photo}
        alt=""
      />
      <div className="w-1/2 flex flex-col gap-1 px-2">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <div className="flex flex-row ">
          <img
            className="w-5"
            src={"https://d13nnzzfr74buh.cloudfront.net/img/icons/trusted.svg"}
            alt=""
          />
          <Link to={`/teacher/${data.user}`}>{data.teacherName}</Link>
        </div>
        <div className="flex gap-1">
          <FaGraduationCap size={17} />
          <span>{data.language == "en" ? "English" : "Español"}</span>
        </div>
        <div className="flex gap-1">
          <FaClock />
          <span>{data.duration} horas</span>
        </div>

        <span className="font-bold">{data.level}</span>
      </div>
      <div className="flex flex-col justify-between py-4 w-2/3 ">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <FaStar size={17} />
            <span>4.9</span>
          </div>
          <div className="flex gap-1">
            <span>
              {!data.date
                ? ""
                : new Date(data.date).toLocaleDateString() +
                  " - " +
                  new Date(data.date).toLocaleTimeString()}
            </span>
          </div>
          <div className="flex gap-1">
            <span>{data.price} $</span>
            <span>
              {classeStatus?.first
                ? `0/${data.capacity}`
                : `${classeStatus?.data?.student.length}/${data.capacity}`}
            </span>
          </div>
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
  );
}

export default ClassesCard;
