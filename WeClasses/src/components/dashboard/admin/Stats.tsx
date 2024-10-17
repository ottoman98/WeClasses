import BarsChart from "../../charts/BarsChart";
import LinesGraph from "../../charts/LinesGraph";

function Stats() {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <h2 className="text-center text-xl font-semibold text-light-blue">
        Overview
      </h2>
      <div className="">
        <LinesGraph /> classes vendidad
        <BarsChart /> ingesos provenientes de
      </div>
    </div>
  );
}

export default Stats;
