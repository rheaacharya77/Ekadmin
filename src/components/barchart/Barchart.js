import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { barchartdata } from "../../dummyData";

export default function Barchart() {
  return (
    <div className="bar-chart">
    <div className="barchart-container">
      <ResponsiveContainer width="95%" aspect={4/1}>
        <BarChart
          width={500}
          height={300}
          data={barchartdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
