import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "JAN",
    "Vazamentos p/km de rede" : 5,
    "Vazamento p/ligações": 5,
    "Tempo médio correções": 0
  },
  {
    name: "FEV",
    "Vazamentos p/km de rede" : 25,
    "Vazamento p/ligações": 10,
    "Tempo médio correções": 15
  },
  {
    name: "MAR",
    "Vazamentos p/km de rede" : 55,
    "Vazamento p/ligações": 15,
    "Tempo médio correções": 10
  },
  {
    name: "ABR",
    "Vazamentos p/km de rede" : 35,
    "Vazamento p/ligações": 25,
    "Tempo médio correções": 20
  },
  {
    name: "MAI",
    "Vazamentos p/km de rede" : 45,
    "Vazamento p/ligações": 20,
    "Tempo médio correções": 25
  },
  {
    name: "JUN",
    "Vazamentos p/km de rede" : 55,
    "Vazamento p/ligações": 10,
    "Tempo médio correções": 0
  },
  {
    name: "JUL",
    "Vazamentos p/km de rede" : 20,
    "Vazamento p/ligações": 25,
    "Tempo médio correções": 5
  },
  {
    name: "AGO",
    "Vazamentos p/km de rede" : 60,
    "Vazamento p/ligações": 5,
    "Tempo médio correções": 25
  },
  {
    name: "SET",
    "Vazamentos p/km de rede" : 40,
    "Vazamento p/ligações": 50,
    "Tempo médio correções": 15
  },
  {
    name: "OUT",
    "Vazamentos p/km de rede" : 10,
    "Vazamento p/ligações": 15,
    "Tempo médio correções": 50
  },
  {
    name: "NOV",
    "Vazamentos p/km de rede" : 0,
    "Vazamento p/ligações": 70,
    "Tempo médio correções": 60
  },
  {
    name: "DEZ",
    "Vazamentos p/km de rede" : 5,
    "Vazamento p/ligações": 50,
    "Tempo médio correções": 70
  },
];

export default function LineC(perda) { 

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
        <Line yAxisId="left" type="linear" dataKey="Vazamentos p/km de rede" stroke="#B14545" activeDot={{stroke: "#B14545" , strokeWidth: 4}} dot={{ fill: "#B14545",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="Vazamento p/ligações" stroke="#D9AE3F" activeDot={{stroke: "#D9AE3F" , strokeWidth: 4}} dot={{ fill: "#D9AE3F",  r: 4}} />
      <Line yAxisId="left" type="linear" dataKey="Tempo médio correções" stroke="#629F64" activeDot={{stroke: "#629F64" , strokeWidth: 4}} dot={{ fill: "#629F64",  r: 4}} />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  );
}