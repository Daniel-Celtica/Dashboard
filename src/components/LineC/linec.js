import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


export default function LineC(dados) {
  
  const data = (dados.dados);

  // console.log(dataPerda);
  // const data = [
  //   {
  //     "Tempo médio correções": 0,
  //     "Vazamento p/km de rede": 9.287080894489677,
  //     "Vazamento p/ligações": 0.12168166426264634,
  //     name: "OUT"
  //   } 
  // ]
  
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
        <Legend />
        {/* utilizar useHistory para saber qual a página, já que o recharts possui essa estrutura de dados */}
        <Line yAxisId="left" type="linear" dataKey="NºOS de Vazamento p/km de rede" stroke="#B14545" activeDot={{stroke: "#B14545" , strokeWidth: 4}} dot={{ fill: "#B14545",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="NºOS de Vazamento p/ligações" stroke="#D9AE3F" activeDot={{stroke: "#D9AE3F" , strokeWidth: 4}} dot={{ fill: "#D9AE3F",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="Tempo médio correções OS de vazamento" stroke="#629F64" activeDot={{stroke: "#629F64" , strokeWidth: 4}} dot={{ fill: "#629F64",  r: 4}} />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  );
}