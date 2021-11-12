import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

/*if (filtro === ano) {exibe labels com mês}
  if else (filtro === mês) {exibe labels com dia (7 em 7 dias)}*/

//const dataTOP = [32, 45, 12, 76, 69, 50, 90, 100, 8 , 70, 90, 100]; /*TESTE*/

export default function LineC() {

  // let [chartData, setChartData] = useState({});

  // useEffect(() => {
  //   setChartData({
  //     labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' , 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
  //       datasets: [
  //         {
  //           label: 'TESTE1',
  //           data: [32, 45, 12, 76, 69, 50, 90, 100, 8 , 70, 90, 100],
  //           fill: false,
  //           borderWidth: 2,
  //           backgroundColor: '#B14545',
  //           borderColor: '#B14545', 
  //         },
  //         {
  //           label: 'TESTE2',
  //           data: [50, 8, 69, 65, 32, 40, 21, 31, 20, 78, 60, 30],
  //           fill: false,
  //           borderWidth: 2,
  //           backgroundColor: '#D9AE3F',
  //           borderColor: '#D9AE3F', 
  //         },
  //         {
  //           label: 'TESTE3',
  //           data: [6, 98, 79, 84, 90, 88, 79, 81, 97 , 50, 75, 100],
  //           fill: false,
  //           borderWidth: 2,
  //           backgroundColor: '#629F64',
  //           borderColor: '#629F64', 
  //         },
  //       ],
  //   })
  // }, [chartData])

  // let [labelsData, setLabelsData] = useState({});

  // let [troca, setTroca] = useState(false);

  // const changeLabels = () => {
  //   if (troca) {
  //     setLabelsData({ labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' , 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]})
  //   }else{
  //     setLabelsData({ labels: ['01/08-07/08', '08/08-14/08', '15/08-21/08', '22/08-28/08', '29/08-30/08']})
  //   }

  //   // troca ? setLabelsData ({ labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' , 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]}) : 
  //   // ({ labels: ['01/08-07/08', '08/08-14/08', '15/08-21/08', '22/08-28/08', '29/08-30/08']})
  // }

  // useEffect(() => {
  //   changeLabels()
  // }, [troca])

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins:{
      legend: {
        position: 'bottom'
      }
    },
  };

  const dataPerdas = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' , 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
        datasets: [
          {
            label: 'TESTE1',
            data: [32, 45, 12, 76, 69, 50, 90, 100, 8 , 70, 90, 100],
            fill: false,
            borderWidth: 2,
            backgroundColor: '#B14545',
            borderColor: '#B14545', 
          },
          {
            label: 'TESTE2',
            data: [50, 8, 69, 65, 32, 40, 21, 31, 20, 78, 60, 30],
            fill: false,
            borderWidth: 2,
            backgroundColor: '#D9AE3F',
            borderColor: '#D9AE3F', 
          },
          {
            label: 'TESTE3',
            data: [6, 98, 79, 84, 90, 88, 79, 81, 97 , 50, 75, 100],
            fill: false,
            borderWidth: 2,
            backgroundColor: '#629F64',
            borderColor: '#629F64', 
          },
        ],
      };

  return (
    <div className="linec">
      <label>Comparativo de perdas</label>
       <Line data={dataPerdas} options={options} height={"80%"}  />
       {/* <button onClick={() => setTroca(!troca)}>TROCAR LABEL</button> */}

    </div>
  );
}
