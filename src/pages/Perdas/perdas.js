import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import api from "../../services/api";
import { useSelector } from "react-redux";


export default function Perdas (){
    const [perdas, setPerdas] = useState([]);
    const [lineData, setLineData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);

    const filtro = useSelector(state => state.data);

    useEffect(() => {
        console.log(filtro);
        setLoading(true)
    }, [filtro])

    useEffect(() => {
        async function getDadosFiltro() {
            
            const response = await api.post('dashboard/indicadores',{
                CidadeId: 5,
                Mes: parseInt(filtro.mes),
                Ano: parseInt(filtro.ano),
                Regiao: filtro.bairro
            })

            setResponseData(response.data);

            setLoading(false);
        }
        getDadosFiltro()

    },[filtro])


      useEffect(()=>{

            const orderByMes = responseData.sort((a, b) => (a.mes > b.mes) ? 1 : -1);

            const mesesSigla = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

            const dadoGrafico1 = {
                name: "NºOS de Vazamento p/km de rede",
                data: (orderByMes.map(({mes,vazamentosKMRDA}) => ({name:mesesSigla[mes-1],valor:vazamentosKMRDA}))).reduce((a, c) => {
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else  x.valor += c.valor
                    return a
                },[])
            };

            const dadoGrafico2 = {
                name: "NºOS de Vazamento p/ligações",
                data: (orderByMes.map(({mes,vazamentoLigacoes}) => ({name:mesesSigla[mes-1],valor:vazamentoLigacoes})).reduce((a, c) => {
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else x.valor += c.valor
                    return a
                },[]))
            };
            
            const dadoGrafico3 = {
                name: "Tempo médio correções OS de vazamento",
                data: (orderByMes.map(({mes,tempoMedioCorrecao}) => ({name:mesesSigla[mes-1],valor:tempoMedioCorrecao}))).reduce((a, c) => {
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else  x.valor += c.valor / responseData.length
                    return a
                },[])
            };

            setPerdas([dadoGrafico1, dadoGrafico2, dadoGrafico3]);       
            
            const data1 = {
                name: "NºOS de Vazamento p/km de rede",
                valor:  responseData.reduce((acc, d) => acc + d.vazamentosKMRDA, 0 )
            } 
            const data2 = {
                name: "NºOS de Vazamento p/ligações",
                valor:  responseData.reduce((acc, d) => acc + d.vazamentoLigacoes, 0 )
            }
            const data3 = {
                name: "Tempo médio correções OS de vazamento",
                valor:  responseData.reduce((acc, d) => acc + d.tempoMedioCorrecao / responseData.length, 0 )
            }
            const data4 = {
                name: "Idade média hidrometros",
                valor:  responseData.reduce((acc, d) => acc + d.idadeMediaHidrometros / responseData.length, 0 )
            }
            const data5 = {
                name: "Infrações confirmadas",
                valor:  responseData.reduce((acc, d) => acc + d.infracoesConfirmadas, 0 )
            }

            setTableData([data1,data2,data3,data4,data5]) 
        

        },[responseData])

      useEffect(() => {
            if (perdas.length > 1){

                if (perdas[0].data.length > 0){
            
                    const line1 = perdas[0].data.map(item => {
                            return {
                                name: item.name,
                                "NºOS de Vazamento p/km de rede": item.valor,
                            };
                        });
                    
                        const line2 = perdas[1].data.map(item => {
                            return {
                                name: item.name,
                                "NºOS de Vazamento p/ligações": item.valor,
                            };
                        });
                    
                        const line3 = perdas[2].data.map(item => {
                            return {
                                name: item.name,
                                "Tempo médio correções OS de vazamento": item.valor,
                            };
                        });
                    
                        setLineData((line1.map((item, i) => Object.assign({}, item, line2[i]))).map((item, i) => Object.assign({}, item, line3[i])));
                } 
            } 

        },[perdas])
      
    //   console.log(perdas)

    if(loading === true){
        return(
            <div className="content">
                <h1>
                    <div className="animatedLoading">
                        <div className="obj1"></div>
                        <div className="obj2"></div>
                        <div className="obj3"></div>
                    </div>
                    <label>Carregando dados</label>
                </h1>
            </div>
        )   
    }
    return(
        <div className="content">
        <div className="content-top">
            {perdas.map((perda)=>{
            return(
                <div key={perda.nome} className="twoinone">
                    <LabelC dados={perda}></LabelC>
                    <BarC dados={perda}></BarC>
                </div>
            )
            })}
        </div>
        <div className="content-bottom">
            <div className="lc">
                <LineC dados={lineData}></LineC>
                </div>
            <div className="t">
                <TableC dados={tableData}></TableC>
                </div>
        </div>
        </div>
    )
}