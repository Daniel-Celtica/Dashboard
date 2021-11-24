import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "JAN",
    "Perdas Água" : 5,
    "Perdas Esgoto": 5,
    "Perdas Veículos": 0
  },
  {
    name: "FEV",
    "Perdas Água" : 10,
    "Perdas Esgoto": 25,
    "Perdas Veículos": 15
  },
  {
    name: "MAR",
    "Perdas Água" : 15,
    "Perdas Esgoto": 55,
    "Perdas Veículos": 10
  },
  {
    name: "ABR",
    "Perdas Água" : 25,
    "Perdas Esgoto": 35,
    "Perdas Veículos": 20
  },
  {
    name: "MAI",
    "Perdas Água" : 20,
    "Perdas Esgoto": 45,
    "Perdas Veículos": 25
  },
  {
    name: "JUN",
    "Perdas Água" : 10,
    "Perdas Esgoto": 55,
    "Perdas Veículos": 0
  },
  {
    name: "JUL",
    "Perdas Água" : 25,
    "Perdas Esgoto": 20,
    "Perdas Veículos": 5
  },
  {
    name: "AGO",
    "Perdas Água" : 5,
    "Perdas Esgoto": 60,
    "Perdas Veículos": 25
  },
  {
    name: "SET",
    "Perdas Água" : 50,
    "Perdas Esgoto": 40,
    "Perdas Veículos": 15
  },
  {
    name: "OUT",
    "Perdas Água" : 15,
    "Perdas Esgoto": 10,
    "Perdas Veículos": 50
  },
  {
    name: "NOV",
    "Perdas Água" : 70,
    "Perdas Esgoto": 0,
    "Perdas Veículos": 60
  },
  {
    name: "DEZ",
    "Perdas Água" : 50,
    "Perdas Esgoto": 5,
    "Perdas Veículos": 70
  },
];

export default function LineC(perda) {

  // console.log(data)

  return (
    <div className="linec">
      <label>Gráfico em Linha</label>
      <ResponsiveContainer width="99%" height={324.5}>
        <LineChart
        data={data}
        margin={{ top: 30, right: -45, left: -20, bottom: 5 }}>
        <CartesianGrid/>
        <XAxis dataKey="name" fontSize="12" interval={0}/>
        <YAxis yAxisId="left" fontSize="12" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend wrapperStyle={{ position: "relative" }}/>
        <Line yAxisId="left" type="linear" dataKey="Perdas Água" stroke="#B14545" activeDot={{stroke: "#B14545" , strokeWidth: 4}} dot={{ fill: "#B14545",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="Perdas Esgoto" stroke="#D9AE3F" activeDot={{stroke: "#D9AE3F" , strokeWidth: 4}} dot={{ fill: "#D9AE3F",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="Perdas Veículos" stroke="#629F64" activeDot={{stroke: "#629F64" , strokeWidth: 4}} dot={{ fill: "#629F64",  r: 4}} />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  );
}