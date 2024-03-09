import { classe } from "../../types/classeTypes";

import { Link } from "react-router-dom";

function ClassesCard({ data }: { data: classe }) {
  return (
    <div className="flex border rounded-md p-4 gap-10">
      <img
        className="w-32 rounded-full aspect-square"
        src="https://i.ebayimg.com/images/g/HyUAAOSwXSpgTlnV/s-l1200.webp"
        alt=""
      />
      <div>
        <h3 className="text-xl">{data.name}</h3>
        <div className="flex flex-row">
          <img
            className="w-5"
            src="https://d13nnzzfr74buh.cloudfront.net/img/icons/trusted.svg"
            alt=""
          />
          <span>Verified Teacher</span>
        </div>
        <span>{data.language}</span>

        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
      <div className="flex flex-col  ">
        <div className="flex gap-4">
          <span>4.9</span>
          <span>COP 43,044</span>
          <span>{data.duration} min</span>
          <span>{data.level}</span>
        </div>
        <button className="bg-blue-950 text-white p-5 rounded">
          <Link to={`/checkout/${data._id}`}>Book Lesson</Link>
        </button>
      </div>
    </div>
  );
}

export default ClassesCard;