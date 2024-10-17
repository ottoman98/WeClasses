import { Link } from "react-router-dom";
import LinesGraph from "../../charts/LinesGraph";
import PositiveAndNegativeGraph from "../../charts/PositiveAndNegativeGraph";
import RadarGraph from "../../charts/RadarGraph";

function ResumeTeacher() {
  return (
    <div className="max-w-[80rem] mx-auto flex flex-col items-center py-16 gap-10">
      <h2 className="text-3xl text-center  w-full font-semibold text-light-blue">
        Statistics
      </h2>
      <div className="flex flex-col items-center bg-white rounded-xl py-4 px-16">
        <h3 className="text-light-blue">Incomes</h3>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center p-3">
            <h4 className="text-customBlack">From Classes</h4>
            <span className="text-green-600 font-semibold text-xl">52.00$</span>
            <Link
              to="/"
              className="underline text-blue-900 text-xs hover:text-light-blue"
            >
              Full Details
            </Link>
          </div>

          <div className="flex flex-col items-center p-3">
            <h4 className="text-customBlack">From Stories</h4>
            <span className="text-green-600 font-semibold text-xl">17.00$</span>
            <Link
              to="/"
              className="underline text-blue-900 text-xs hover:text-light-blue"
            >
              Full Details
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center bg-white py-10 rounded-xl">
        <LinesGraph />
        <PositiveAndNegativeGraph />
        <div className="col-span-2">
          <RadarGraph />
        </div>
      </div>
    </div>
  );
}

export default ResumeTeacher;
