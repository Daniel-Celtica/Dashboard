import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import api from "../../services/api";
import { useSelector } from "react-redux";


export default function Perdas (){
    const [perdas, setPerdas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const [teste, setTeste] = useState([]);

    const filtro = useSelector(state => state.data);

    useEffect(() => {
        console.log(filtro);
    }, [filtro])

    useEffect(() => {
        async function getDadosFiltro() {
            //cidadeid sera fornecido pelo login
            //'dashboard/indicadores/cidadeid/ano/bairro/mes'

            if(filtro.mes === 'todos' && filtro.bairro === 'todos') {

                //`'dashboard/indicadores/5/${filtro.ano}'`
                
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
                };

                const dadoGrafico2 = {
                    name: "Vazamento p/ligações",
                    data: (orderByMes.map(({mes,vazamentoLigacoes}) => ({name:mesesSigla[mes-1],valor:vazamentoLigacoes})).reduce((a, c) => {
                        let x = a.find(e => e.name === c.name)
                        if(!x) a.push(Object.assign({},c))
                        else  x.valor += c.valor
                        return a
                  },[]))
                };
                
                const dadoGrafico3 = {
                    name: "Tempo médio correções",
                    data: (orderByMes.map(({mes,tempoMedioCorrecao}) => ({name:mesesSigla[mes-1],valor:tempoMedioCorrecao}))).reduce((a, c) => {
                        
                        let x = a.find(e => e.name === c.name)
                        if(!x) a.push(Object.assign({},c))
                        else  x.valor += c.valor / response.data.length
                        return a
                  },[])
                };

                setPerdas([dadoGrafico1, dadoGrafico2, dadoGrafico3]);             
            }
           
            

            if(filtro.bairro !== 'todos' && filtro.mes === 'todos') {
                //'dashboard/indicadores/cidadeid/ano/bairro'
                alert('SELECIONOU UM BAIRRO')

                
            }
            

            if(filtro.bairro === 'todos' && filtro.mes !== 'todos') {
                // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                 
                //gráfico com intervalo de 5,6 ou 7 dias
                //'dashboard/indicadores/cidadeid/ano/bairro='todos'/mes'
                // alert('SELECIONOU UM MÊS')

                setPerdas([
                    {
                        name: 'Vazemento p/km de rede',
                        data: [
                            {
                                name: '01/01-05/01',
                                valor: 6.246090220847677
                            },
                            {
                                name: '06/01-11/01',
                                valor: 0.246090220847677
                            },
                            {
                                name: '12/01-17/01',
                                valor: 1.246090220847677
                            }
                        ]
                    },
                    {
                        name:'Vazamento p/ligações',
                        data: [
                            {
                                name: '01/01-05/01',
                                valor: 1.246090220847677
                            },
                            {
                                name: '06/01-11/01',
                                valor: 5.246090220847677
                            },
                            {
                                name: '12/01-17/01',
                                valor: 2.246090220847677
                            }
                        ]
                    },
                    {
                        name:'Tempo médio correções',
                        data: [
                            {
                                name: '01/01-05/01',
                                valor: 7.246090220847677
                            },
                            {
                                name: '06/01-11/01',
                                valor: 8.246090220847677
                            },
                            {
                                name: '12/01-17/01',
                                valor: 0.246090220847677
                            }
                        ]
                    }
                ])
            }
            

            if(filtro.bairro !== 'todos' && filtro.mes !== 'todos') {
                //gráfico com intervalo de 5,6 ou 7 dias
                //'dashboard/indicadores/cidadeid/ano/bairro/mes'
                alert('SELECIONOU UM BAIRRO E UM MES')
            }
            
            setLoading(false)
        }

        getDadosFiltro()

      },[filtro])

      console.log(perdas)

    if(loading){
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