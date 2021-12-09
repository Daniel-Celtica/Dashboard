import React, { useEffect, useState } from 'react';

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceLine, ReferenceArea} from "recharts";

const barcolors = ["#B14545", "#E9524C", "#F97F3C", "#FFCD48", "#FFF05F", "#B2D645", "#568953", "#337571", "#4661A9", "#5F4878", "#8A4E6E", "#E274B6"]

export default function BarC (dados){

  const data = (dados.dados)

  const teste = data.data.reduce((acc, d) => acc + d.valor, 0) / data.data.length

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

  console.log(data)
  
  console.log(teste)
  return (
    <div className="barc">
    <label>{data.name}</label>
    <ResponsiveContainer height={225.5}>
    <BarChart    
      data={data.data}
      margin={{ top: 20, right: 0, left: -30, bottom: 0 }}
      >
      <CartesianGrid  />
      <XAxis dataKey="name" fontSize="12" interval={0}/>
      <YAxis fontSize="10" />
      <Tooltip />
      <Bar dataKey="valor" fill="#375E65">  
      </Bar>
      <ReferenceLine y={teste} label="média" stroke="#B14545" strokeWidth="3" position="right" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
