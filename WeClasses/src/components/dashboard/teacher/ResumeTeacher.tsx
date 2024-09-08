import LinesGraph from "../../charts/LinesGraph";
import PositiveAndNegativeGraph from "../../charts/PositiveAndNegativeGraph";
import RadarGraph from "../../charts/RadarGraph";

function ResumeTeacher() {
  return (
    <div className="flex">
      <RadarGraph />
      <LinesGraph />
      <PositiveAndNegativeGraph />
    </div>
  );
}

export default ResumeTeacher;
