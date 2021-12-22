import React, { useEffect, useState, useCallback } from 'react';

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Cell} from "recharts";

// const barcolors = ["#B14545", "#E9524C", "#F97F3C", "#FFCD48", "#FFF05F", "#B2D645", "#568953", "#337571", "#4661A9", "#5F4878", "#8A4E6E", "#E274B6"]

export default function BarC (dados){

  const [selectedData, setSelectedData] = useState(false);
 
  const [averageHide, setAverageHide] = useState(false);

  const data = (dados.dados)

  const average = data.data.reduce((acc, d) => acc + d.valor, 0) / data.data.length

  const [cor, setCor] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = [data.data[activeIndex]];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  
  return (
    <div className="barc">
    <label>{data.name}</label>
    <ResponsiveContainer height={200}>
    <BarChart   
      data={ selectedData ? (activeItem) : (data.data)}
      margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
      >
      <CartesianGrid  />
      <XAxis dataKey="name" fontSize="12" interval={0}/>
      <YAxis fontSize="10" />
      <Tooltip />
      <Bar dataKey="valor" onClick={handleClick} >
        {data.data.map((entry, index) => (
          <Cell cursor="pointer" 
          fill='#375E65'
          key={`cell-${index}`} 
          onClick={() => setSelectedData(!selectedData)}/>
        ))}
      </Bar>
      {data.data.length !== 1 ? (  averageHide === false ?  (
        <ReferenceLine y={average} stroke="#B14545" strokeWidth="3" position="right" ifOverflow="extendDomain" />
      ) : (
        null
      )) : ( null) }
    </BarChart>
    </ResponsiveContainer>
    <div className="legenda">
      <div>
        <div style={{ backgroundColor: "#375E65"}}></div>
        <label>valor</label>
      </div>
      {data.data.length !== 1 ? (
      <div className={`teste ${averageHide ? "active" : ""}`} onClick={() => setAverageHide(!averageHide)}>
        <div className="media" style={{ backgroundColor: "#B14545"}}></div>
        <label>média</label>
      </div>) : ( null )}
    </div>
    </div>
  );
}
