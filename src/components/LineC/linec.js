import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "FEV",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "ABR",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "MAI",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "JUN",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "JUL",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "AGO",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "SET",
    uv: 2000,
    pv: 7800,
    amt: 2290
  },
  {
    name: "OUT",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "NOV",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "DEZ",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
];

export default function LineC() {
  return (
    <div className="linec">
      <label>Gráfico em Linha</label>
      <ResponsiveContainer width="100%" height={324.5}>
        <LineChart
        data={data}
        margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 0
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize="15" />
        <YAxis yAxisId="left" fontSize="15" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
            yAxisId="left"
            type="monotone"
            dataKey="pv"
            stroke="#B14545"
            activeDot={{ r: 8 }}
        />
        <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#D9AE3F" />
        <Line yAxisId="left" type="monotone" dataKey="amt" stroke="#629F64" />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  );
}
