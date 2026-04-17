import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { TimelineContext } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const call = timeline.filter(t => t.type === "Call").length;
  const text = timeline.filter(t => t.type === "Text").length;
  const video = timeline.filter(t => t.type === "Video").length;

  const data = [
    { name: "Text", value: text },
    { name: "Call", value: call },
    { name: "Video", value: video }
  ];
  const total = call + text + video;
  const COLORS = ["#7C3AED", "#1F2937", "#22C55E"];

  return (
    <div className="max-w-5xl mx-auto my-16 px-4">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Friendship Analytics
      </h1>

     <div className="bg-white shadow-md rounded-xl p-8">
  <p className="text-sm text-gray-500 mb-6">
    By Interaction Type
  </p>

  {total === 0 ? (
    <p className="text-center text-gray-400 py-10">
      No interactions done yet
    </p>
  ) : (
    <div className="flex justify-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={5}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          wrapperStyle={{ fontSize: "12px", marginTop: "10px" }}
        />
      </PieChart>
    </div>
  )}
</div>
    </div>
  );
}