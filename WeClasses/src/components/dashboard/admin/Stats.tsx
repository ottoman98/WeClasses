import BarsChart from "../../charts/BarsChart";
import LinesGraph from "../../charts/LinesGraph";
import PositiveAndNegativeGraph from "../../charts/PositiveAndNegativeGraph";

function Stats() {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <h2 className="text-center text-xl font-semibold text-light-blue">
        Overview
      </h2>
      <div className="grid grid-cols-2 ">
        <PositiveAndNegativeGraph />
        <LinesGraph />
        <BarsChart />
      </div>
    </div>
  );
}

export default Stats;
