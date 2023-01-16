
import React, { useEffect, useState } from 'react';

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

const barcolors = ["#B14545", "#E9524C", "#F97F3C", "#FFCD48", "#FFF05F", "#B2D645", "#568953", "#337571", "#4661A9", "#5F4878", "#8A4E6E", "#E274B6"]

export default function BarDadosTecnicos(dados)
{
    const data = dados.dados

    return (
      <div className="barc">
      <label>{dados.dados.name}</label>
      <ResponsiveContainer height={237.5}>
      <BarChart    
        data={data.data}
        margin={{ top: 30, right: 0, left: -30, bottom: 5 }}
        >
        <CartesianGrid  />
        <XAxis dataKey="name" fontSize="12" interval={0}/>
        <YAxis fontSize="10" />
        <Tooltip />
        <Bar dataKey="valor" fill="#375E65">
           {/* {data.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barcolors[index %20]}/>
            ))
          }       */}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
      </div>
    );
}