import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stackedbardata } from "../../dummyData";
export default function Stackedbarchart() {
  return (
    <>
      <h3 className="chartTitle">Orders By Status Over Time</h3>
      <div className="areachart-container">
        <ResponsiveContainer width="100%" aspect={2/1}>
          <BarChart
            width={500}
            height={300}
            data={stackedbardata}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="shipped" stackId="a" fill="#baa1cc" />
            <Bar dataKey="processing" stackId="a" fill="#c9b4d8" />
            <Bar dataKey="completed" stackId="a" fill="#dbc6ea" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
