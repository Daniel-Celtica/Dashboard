import React, { useEffect, useState } from 'react';

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Brush} from "recharts";

const barcolors = ["#B14545", "#E9524C", "#F97F3C", "#FFCD48", "#FFF05F", "#B2D645", "#568953", "#337571", "#4661A9", "#5F4878", "#8A4E6E", "#E274B6"]

export default function BarC (dados){

  const [averageHide, setAverageHide] = useState(false);

  const data = (dados.dados)

  const average = data.data.reduce((acc, d) => acc + d.valor, 0) / data.data.length

  const [cor, setCor] = useState('');

  function setBarColor() {
    if (data.name === "NºOS de Vazamento p/km de rede"){
     setCor("#B14545")
    }
    if (data.name === "NºOS de Vazamento p/ligações"){
      setCor("#D9AE3F")
    }
    if (data.name === "Tempo médio correções OS de vazamento"){
      setCor("#629F64")
    }
  }

  useEffect(()=>{
    setBarColor()
  },[dados])

  // console.log(data)
  console.log(averageHide)
  return (
    <div className="barc">
    <label>{data.name}</label>
    <ResponsiveContainer height={200}>
    <BarChart    
      data={data.data}
      margin={{ top: 20, right: 0, left: -30, bottom: 0 }}
      >
      <CartesianGrid  />
      <XAxis dataKey="name" fontSize="12" interval={0}/>
      <YAxis fontSize="10" />
      <Tooltip />
      <Bar dataKey="valor" fill="#375E65" >
        {data.map((entry, index) => (
          <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
        ))}
      </Bar>
      {data.data.length !== 1 ? (  averageHide === false ?  (
        <ReferenceLine y={average} stroke="#B14545" strokeWidth="3" position="right" />
      ) : (
        null
      )) : ( null) }
      {/*no click da barra pegar todos os dados da barra (é possivle?) e setar um valor booleano
        criar um array com os dados e alterar com renderização condicional o grafico

      */}
      {/* <Brush dataKey="name" height={20}  stroke="#375E65" /> */}
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
