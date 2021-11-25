import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import api from "../../services/api";

export default function Perdas (){

    const [perdas, setPerdas] = useState(
        {
            "name" : "Perdas",
            "data" : [
                {
                    "name" : "Vazamentos p/km de rede",
                    "data" : [
                        {
                            "name" : "JAN",
                            "valor" : 5
                        },
                        {
                            "name" : "FEV",
                            "valor" : 25
                        },
                        {
                            "name" : "MAR",
                            "valor" : 55
                        },
                        {
                            "name" : "ABR",
                            "valor" : 35
                        },
                        {
                            "name" : "MAI",
                            "valor" : 45
                        },
                        {
                            "name" : "JUN",
                            "valor" : 55
                        },
                        {
                            "name" : "JUL",
                            "valor" : 20
                        },
                        {
                            "name" : "AGO",
                            "valor" : 60
                        },
                        {
                            "name" : "SET",
                            "valor" : 40
                        },
                        {
                            "name" : "OUT",
                            "valor" : 10
                        },
                        {
                            "name" : "NOV",
                            "valor" : 0
                        },
                        {
                            "name" : "DEZ",
                            "valor" : 5
                        }
                    ]
                },
                {
                    "name" : "Vazamento p/ligações",
                    "data" : [
                        {
                            "name" : "JAN",
                            "valor" : 5
                        },
                        {
                            "name" : "FEV",
                            "valor" : 10
                        },
                        {
                            "name" : "MAR",
                            "valor" : 15
                        },
                        {
                            "name" : "ABR",
                            "valor" : 25
                        },
                        {
                            "name" : "MAI",
                            "valor" : 20
                        },
                        {
                            "name" : "JUN",
                            "valor" : 10
                        },
                        {
                            "name" : "JUL",
                            "valor" : 25
                        },
                        {
                            "name" : "AGO",
                            "valor" : 5
                        },
                        {
                            "name" : "SET",
                            "valor" : 50
                        },
                        {
                            "name" : "OUT",
                            "valor" : 15
                        },
                        {
                            "name" : "NOV",
                            "valor" : 70
                        },
                        {
                            "name" : "DEZ",
                            "valor" : 50
                        }
                    ]
                },
                {
                    "name" : "Tempo médio correções",
                    "data" : [
                        {
                            "name" : "JAN",
                            "valor" : 0
                        },
                        {
                            "name" : "FEV",
                            "valor" : 15
                        },
                        {
                            "name" : "MAR",
                            "valor" : 10
                        },
                        {
                            "name" : "ABR",
                            "valor" : 20
                        },
                        {
                            "name" : "MAI",
                            "valor" : 25
                        },
                        {
                            "name" : "JUN",
                            "valor" : 0
                        },
                        {
                            "name" : "JUL",
                            "valor" : 5
                        },
                        {
                            "name" : "AGO",
                            "valor" : 25
                        },
                        {
                            "name" : "SET",
                            "valor" : 15
                        },
                        {
                            "name" : "OUT",
                            "valor" : 50
                        },
                        {
                            "name" : "NOV",
                            "valor" : 60
                        },
                        {
                            "name" : "DEZ",
                            "valor" : 70
                        }
                    ]
                }
        
            ]
        }
    );


    // console.log(perdas)
    // console.log(perdas.data)
    // console.log(perdas.data[0].data)
    

    // const result = perdas.data.reduce(function(r, e) {
    //     return Object.keys(e).forEach(function(k) {
    //       if(!r[k]) r[k] = [].concat(e[k])
    //       else r[k] = r[k].concat(e[k])
    //     }), r
    //   }, {})

    // console.log(result)

    //juntar todas as arrays pelo name iguais(mês)

    // console.log(dataX)

    // console.log(perdalinefinal)
    //definir valor como name pai da array em todos os valores




    // COM API
    // const [perdas, setPerdas] = useState([]);

    // useEffect(() => {
    //     async function teste() {
    //         const response = await api.get('5K7tEo/perdas_agua')
    //         console.log(response.data)
    //         setPerdas(response.data)
    //     }

    //     teste()
    // },[])


    // function teste() {
    //     // estrutura de repetição para cada dado
    //     //
    //     const dados = decodeURIComponent()


    //     return(
    //         <div className="twoinone">
    //             <LabelC></LabelC>
    //             <BarC ></BarC>
    //         </div>
    //     )
        
    // }

    return(
        <div className="content">
        <div className="content-top">
            {perdas.data.map((perda)=>{
            return(
                <div key={perda} className="twoinone">
                    <LabelC key={perda} dataPerda={perda}></LabelC>
                    <BarC key={perda} dataPerda={perda}></BarC>
                </div>
            )
            })}
        </div>
        <div className="content-bottom">
            <div className="lc">
                <LineC dataPerda={perdas.data}></LineC>
                </div>
            <div className="t">
                <TableC dataPerda={perdas.data}></TableC>
                </div>
        </div>
        </div>
    )
}