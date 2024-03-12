import { classe } from "../../types/classeTypes";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

function ClassesCard({ data }: { data: classe }) {
  return (
    <div className="flex border rounded-md p-2 gap-10 ">
      <img
        className="w-32 rounded-full aspect-square"
        src="https://i.ebayimg.com/images/g/HyUAAOSwXSpgTlnV/s-l1200.webp"
        alt=""
      />
      <div className="w-1/2 flex flex-col gap-1">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <div className="flex flex-row">
          <img
            className="w-5"
            src="https://d13nnzzfr74buh.cloudfront.net/img/icons/trusted.svg"
            alt=""
          />
          <span>Verified Teacher</span>
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
      <div className="flex flex-col justify-between py-4 w-2/3">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <FaStar size={17} />
            <span>4.9</span>
          </div>
          <div className="flex gap-1">
            <FaStar size={17} />
            <span>{data.date}</span>
          </div>

          <span>{data.price}</span>
        </div>
        <button className="bg-blue-950 text-white p-2 rounded">
          <Link to={`/checkout/${data._id}`}>Book Lesson</Link>
        </button>
      </div>
    </div>
  );
}

export default ClassesCard;
