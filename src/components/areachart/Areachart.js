import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { areachart } from "../../dummyData";

export default function Areachart() {
  return (
    <>
      <h3 className="chartTitle">New Users Over Time</h3>
      <div className="areachart-container">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart
            width={500}
            height={400}
            data={areachart}
            margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
