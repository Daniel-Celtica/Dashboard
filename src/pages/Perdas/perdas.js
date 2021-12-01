import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import api from "../../services/api";

export default function Perdas (){
    const [perdas, setPerdas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);  

    useEffect(() => {
        async function getDadosFiltro() {
            //'dashboard/indicadores/cidadeid/ano/bairro/mes'

            //if (mes === todos && bairro === todos) {busca dados por ano gera dados abaixo}
            const response = await api.get('dashboard/indicadores')

            setResponseData(response.data)
            // console.log(response.data)

            const orderByMes = response.data.sort((a, b) => (a.mes > b.mes) ? 1 : -1)

            const mesesSigla = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

            const dadoGrafico1 = {
                name: "Vazamento p/km de rede",
                data: (orderByMes.map(({mes,vazamentosKMRDA}) => ({name:mesesSigla[mes-1],valor:vazamentosKMRDA}))).reduce((a, c) => {
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else  x.valor += c.valor
                    return a
              },[])
            }
            const dadoGrafico2 = {
                name: "Vazamento p/ligações",
                data: (orderByMes.map(({mes,vazamentoLigacoes}) => ({name:mesesSigla[mes-1],valor:vazamentoLigacoes})).reduce((a, c) => {
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else  x.valor += c.valor
                    return a
              },[]))
            }
            
            const dadoGrafico3 = {
                name: "Tempo médio correções",
                data: (orderByMes.map(({mes,tempoMedioCorrecao}) => ({name:mesesSigla[mes-1],valor:tempoMedioCorrecao}))).reduce((a, c) => {
                    
                    let x = a.find(e => e.name === c.name)
                    if(!x) a.push(Object.assign({},c))
                    else  x.valor += c.valor / response.data.length
                    return a
              },[])
            }              
            setPerdas([dadoGrafico1, dadoGrafico2, dadoGrafico3])
            setLoading(false)

            //if (bairro !== 'todos' && mes === 'todos') {selecionou somente bairro e ano}
            //'dashboard/indicadores/cidadeid/ano/bairro'

            //if (bairro === 'todos' && mes !== 'todos') {selecionou somente mes e ano}
            //gráfico com intervalo de 5,6 ou 7 dias
            //'dashboard/indicadores/cidadeid/ano/bairro='todos'/mes'

            //if (bairro !== 'todos' && mes !== 'todos') {selecionou tudo}
            //gráfico com intervalo de 5,6 ou 7 dias
            //'dashboard/indicadores/cidadeid/ano/bairro/mes'


        }

        getDadosFiltro()

      },[])

    //   console.log(perdas)

    if(loading){
        return(
            <div className="content">
                <h1>
                    <div className="animatedLoading">
                        <div className="obj1"></div>
                        <div className="obj2"></div>
                        <div className="obj3"></div>
                    </div>
                    <label>Carregando gráficos</label>
                </h1>
            </div>
        )
        
    }
    return(
        <div className="content">
        <div className="content-top">
            {perdas.map((perda)=>{
            return(
                <div className="twoinone">
                    <LabelC dataPerda={perda}></LabelC>
                    <BarC dataPerda={perda}></BarC>
                </div>
            )
            })}
        </div>
        <div className="content-bottom">
            <div className="lc">
                <LineC dataPerda={perdas}></LineC>
                </div>
            <div className="t">
                <TableC dataPerda={responseData}></TableC>
                </div>
        </div>
        </div>
    )
}