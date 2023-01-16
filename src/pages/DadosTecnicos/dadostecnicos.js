import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import LabelDadosTecnicos from '../../components/LabelDadosTecnicos'
import BarDadosTecnicos from "../../components/BarDadosTecnicos";
import api from "../../services/api";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/loading"

export default function DadosTecnicos (){
    const [loading, setLoading] = useState(true);
    const [dadosTecnicos, setDadosTecnicos] = useState([])
    const [dadosTecnicosEsgoto, setDadosTecnicosEsgoto] = useState([])
    const [responseData, setResponseData] = useState([])

    const filtro = useSelector(state => state.data)

    useEffect(()=>{
        setLoading(true)
    }, [filtro])

    useEffect(() => {
        async function getDadosFiltro() {
            //2021 mes 3
            const response = await api.post('dadostecnicos/parametros',{
                CidadeId: 10,
                //Mes: parseInt(filtro.mes),
                //Ano: parseInt(filtro.ano),
                Mes: 0,
                Ano: 2021,
                Regiao: ''
            })

            setResponseData(response.data);
            //console.log(response.data)

            setLoading(false);
        }
        getDadosFiltro()

    },[filtro])


    useEffect(()=>{
        const orderByMes = responseData.sort((a, b) => (a.mes > b.mes) ? 1 : -1);
        const mesesSigla = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

        const orderByDiametro = responseData.sort((a, b) => (a.diametro > b.diametro) ? 1 : -1);

        console.log("ReponseData:")
        console.log(responseData)
        let diametroValores = [{name:0, valor:0}, {name:20, valor: 0}, {name:25, valor: 0}, {name: 32, valor: 0}, {name: 40, valor: 0}, {name:50, valor:0}, {name:60, valor: 0}, {name: 75, valor: 0}, {name: 150, valor: 0}, {name:200, valor: 0}]

        let materialValores = [{name: "CA", valor: 0}, {name: "DEFO", valor: 0}, {name: "FA", valor: 0}, {name: "FC", valor: 0}, {name: "FG", valor: 0},  {name: "PVC", valor: 0} ]

        let tipoValores = [{name: "AAB", valor: 0}, {name: "AAT", valor: 0}, {name: "ALI", valor: 0}, {name: "DSC", valor: 0}, {name: "RDA", valor: 0}]

        
        const dadosAgua = responseData.filter(function(item)
        {
            if (item.tipoDado === 'A')
            {
                return item 
            }
        })

        const dadosEsgoto = responseData.filter(function(item)
        {
            if (item.tipoDado === 'E')
            {
                return item 
            }
        })


        /*

            EXTENSAO POR DIAMETRO AGUA
        */
        for(var i =0; i < dadosAgua.length; i++)
        {
            for(var j=0; j < diametroValores.length; j++)
            {
                if(dadosAgua[i].diametro === diametroValores[j].name)
                {
                    diametroValores[j].valor = diametroValores[j].valor + dadosAgua[i].extensao;
                }
            }
        }

        const dadoGrafico1 = {
            name: "Extensão Rede Agua por Diametro",
            data: diametroValores
        }

        /*
            EXTENSAO POR MATERIAL AGUA
        */

            for(var i =0; i < dadosAgua.length; i++)
            {
                for(var j=0; j < materialValores.length; j++)
                {
                    if(dadosAgua[i].material === materialValores[j].name)
                    {
                        materialValores[j].valor = materialValores[j].valor + dadosAgua[i].extensao;
                    }
                }
            }

        const dadoGrafico2 ={
            name: "Extensão Rede Agua por Material",
            data: materialValores
        }

        /*
            EXTENSAO POR TIPO 
        */

            for(var i =0; i < dadosAgua.length; i++)
            {
                for(var j=0; j < tipoValores.length; j++)
                {
                    if(dadosAgua[i].tipo === tipoValores[j].name)
                    {
                        tipoValores[j].valor = tipoValores[j].valor + dadosAgua[i].extensao;
                    }
                }
            }

            const dadoGrafico3 ={
                name: "Extensão Rede Agua por Tipo",
                data: tipoValores
            }


            let diametroValoresE = [{name:0, valor:0}, {name:20, valor: 0}, {name:25, valor: 0}, {name: 32, valor: 0}, {name: 40, valor: 0}, {name:50, valor:0}, {name:60, valor: 0}, {name: 75, valor: 0}, {name: 150, valor: 0}, {name:200, valor: 0}]

            let materialValoresE = [{name: "CA", valor: 0}, {name: "DEFO", valor: 0}, {name: "FA", valor: 0}, {name: "FC", valor: 0}, {name: "FG", valor: 0},  {name: "PVC", valor: 0} ]
    
            let tipoValoresE = [{name: "AAB", valor: 0}, {name: "AAT", valor: 0}, {name: "ALI", valor: 0}, {name: "DSC", valor: 0}, {name: "RDA", valor: 0}]

            /*

            EXTENSAO POR DIAMETRO ESGOTO 
            */
            for(var i =0; i < dadosEsgoto.length; i++)
            {
                for(var j=0; j < diametroValoresE.length; j++)
                {
                    if(dadosEsgoto[i].diametro === diametroValoresE[j].name)
                    {
                        diametroValoresE[j].valor = diametroValoresE[j].valor + dadosEsgoto[i].extensao;
                    }
                }
            }

            const dadoGrafico4 = {
                name: "Extensão Rede Esgoto por Diametro",
                data: diametroValoresE
            }

                    /*
            EXTENSAO POR MATERIAL ESGOTO
        */

            for(var i =0; i < dadosEsgoto.length; i++)
            {
                for(var j=0; j < materialValoresE.length; j++)
                {
                    if(dadosEsgoto[i].material === materialValoresE[j].name)
                    {
                        materialValoresE[j].valor = materialValoresE[j].valor + dadosEsgoto[i].extensao;
                    }
                }
            }

        const dadoGrafico5 ={
            name: "Extensão Rede Esgoto por Material",
            data: materialValores
        }

        /*
            EXTENSAO POR TIPO ESGOTO
        */

            for(var i =0; i < dadosEsgoto.length; i++)
            {
                for(var j=0; j < tipoValoresE.length; j++)
                {
                    if(dadosEsgoto[i].tipo === tipoValoresE[j].name)
                    {
                        tipoValoresE[j].valor = tipoValoresE[j].valor + dadosEsgoto[i].extensao;
                    }
                }
            }

            const dadoGrafico6 ={
                name: "Extensão Rede Esgoto por Tipo",
                data: tipoValores
            }

        {console.log(dadoGrafico1)}
        setDadosTecnicos([dadoGrafico1, dadoGrafico2, dadoGrafico3])
        setDadosTecnicosEsgoto([dadoGrafico4, dadoGrafico5, dadoGrafico6])
    }, [responseData])




    if(loading){
        return(
            <Loading/>
        )
        
    }
    return(

        
        <div className="content">
            <div className="content-top">
                
                {dadosTecnicos.map( (dadosTecnicos) =>{
                    return(
                       
                        
                            <div key={dadosTecnicos.name} className="twoinone">
                           
                                <LabelDadosTecnicos dados={dadosTecnicos} label="Extensão Rede Agua por Diametro"></LabelDadosTecnicos>
                                <BarDadosTecnicos dados={dadosTecnicos}></BarDadosTecnicos>
                            </div>
                           
                        
                    )
                })}
            </div>
            <div className="content-top">
            {dadosTecnicosEsgoto.map( (dadosTecnicosEsgoto) =>{
                    return(
                       
                        
                            <div key={dadosTecnicosEsgoto.name} className="twoinone">
                           
                                <LabelDadosTecnicos dados={dadosTecnicosEsgoto} label="Extensão Rede Agua por Diametro"></LabelDadosTecnicos>
                                <BarDadosTecnicos dados={dadosTecnicosEsgoto}></BarDadosTecnicos>
                            </div>
                           
                        
                    )
                })}
            </div>
        </div>
    )
}