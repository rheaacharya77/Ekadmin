import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userData } from "../../dummyData";

export default function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <div className="chart-container">
      <ResponsiveContainer width="95%" aspect={4 / 1}>
        <LineChart data={userData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      
    </div>
  );
}
