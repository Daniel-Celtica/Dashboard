import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect } from "react";
import api from "../../services/api";


export default function LineC(dataPerda) {
  

  console.log(dataPerda)

  //mover de lineC para Perdas
  const line1 = dataPerda.dataPerda[0].data.map(item => {
    return {
      name: item.name,
      "Vazamento p/km de rede": item.valor,
    };
  });

  const line2 = dataPerda.dataPerda[1].data.map(item => {
    return {
      name: item.name,
      "Vazamento p/ligações": item.valor,
    };
  });

  const line3 = dataPerda.dataPerda[2].data.map(item => {
    return {
      name: item.name,
      "Tempo médio correções": item.valor,
    };
  });

  const data = (line1.map((item, i) => Object.assign({}, item, line2[i]))).map((item, i) => Object.assign({}, item, line3[i]));


  


  // useEffect(() => {
  //   async function getDadosFiltro() {
  //       const response = await api.get('dashboard/indicadores')

  //       // console.log(response)

  //       const orderByMes = response.data.sort((a, b) => (a.mes > b.mes) ? 1 : -1)

  //       const mesesSigla = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  //       console.log(orderByMes)

  //       const dadoLinha = orderByMes.reduce((a, c) => {
  //           let x = a.find(e => e.name === c.name)
  //           if(!x) a.push(Object.assign({},c))
  //           else  x.vazamentosKMRDA += c.vazamentosKMRDA
  //           return a
  //     },[]) 

  //     console.log(dadoLinha)

  //   }

  //   getDadosFiltro()
  // },[])


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
        <Line yAxisId="left" type="linear" dataKey="Vazamento p/km de rede" stroke="#B14545" activeDot={{stroke: "#B14545" , strokeWidth: 4}} dot={{ fill: "#B14545",  r: 4}} />
        <Line yAxisId="left" type="linear" dataKey="Vazamento p/ligações" stroke="#D9AE3F" activeDot={{stroke: "#D9AE3F" , strokeWidth: 4}} dot={{ fill: "#D9AE3F",  r: 4}} />
      <Line yAxisId="left" type="linear" dataKey="Tempo médio correções" stroke="#629F64" activeDot={{stroke: "#629F64" , strokeWidth: 4}} dot={{ fill: "#629F64",  r: 4}} />
        </LineChart>
      </ResponsiveContainer>  
    </div>
  );
}