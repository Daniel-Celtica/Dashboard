import React, { PureComponent } from 'react';

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";

const barcolors = ["#B14545", "#E9524C", "#F97F3C", "#FFCD48", "#FFF05F", "#B2D645", "#568953", "#337571", "#4661A9", "#5F4878", "#8A4E6E", "#E274B6"]

const data = [
  {
    name: "JAN",
    n:200
  },
  {
    name: "FEV",
    n:250
  },
  {
    name: "MAR",
    n:200
  },
  {
    name: "ABR",
    n:300
  },
  {
    name: "MAI",
    n:900
  },
  {
    name: "JUN",
    n:50
  },
  {
    name: "JUL",
    n:100
  },
  {
    name: "AGO",
    n:300
  },
  {
    name: "SET",
    n:700
  },
  {
    name: "OUT",
    n:500
  },
  {
    name: "NOV",
    n:550
  },
  {
    name: "DEZ",
    n:400
  }
];

export default function BarC (){
  return (
    <div className="barc">
    <label>Gráfico em Barras</label>
    <ResponsiveContainer width="100%" height={237.5}>
    <BarChart    
      data={data}
      margin={{
        top: 30,
        right: 0,
        left: -30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" fontSize="0"/>
      <YAxis fontSize="10" />
      <Tooltip />
      <Legend dataKey="n" fontSize="10" wrapperStyle={{
        paddingTop: "10px"
        }}/>
      <Bar dataKey="n" fill="#375E65">
        DEIXA AS COLUNAS COLORIDAS
         {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={barcolors[index %20]}/>
          ))
        }      
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
