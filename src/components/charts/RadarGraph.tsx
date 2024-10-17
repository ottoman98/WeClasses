import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "full",
    A: 7,
    B: 10,
    fullMark: 150,
  },
  {
    subject: "Writing",
    A: 5,
    B: 7,
    fullMark: 150,
  },
  {
    subject: "Listening",
    A: 5,
    B: 10,
    fullMark: 150,
  },
  {
    subject: "Speaking",
    A: 6,
    B: 10,
    fullMark: 150,
  },
  {
    subject: "Reading",
    A: 3,
    B: 10,
  },
];

function RadarGraph() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={100}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

export default RadarGraph;
