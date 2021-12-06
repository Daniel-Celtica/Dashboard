import filter from "../../assets/filtro.svg"
import close from "../../assets/close.svg"
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import useOnClickOutside from "../UseOnClickOutside";
import api from "../../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Filtro (props, start){
    const ref = useRef();
    let local = useLocation();
    const [inactiveFilter, setInactiveFilter] = useState(true);

    const [loading, setLoading] = useState(true);

    const [ano, setAno] = useState([]); 
    const [bairro, setBairro] = useState([]); 
    const [mes, setMes] = useState([]); 

    const [selectedAno, setSelectedAno] = useState('');
    const [selectedBairro, setSelectedBairro] = useState('');
    const [selectedMes, setSelectedMes] = useState('0');

    const [filtro, setFiltro] = useState([]);

    const filtroteste = useSelector(state => state.data);
    const dispatch = useDispatch();

    const mesesSigla = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    
    //set o valor inicial de ano para o ano atual
    useEffect(() => {
        setSelectedAno(new Date().getFullYear().toString())
        dispatch({ type: 'CHANGE_FILTRO', data: { ano: selectedAno, bairro: selectedBairro, mes: selectedMes }})
    }, [loading])
    
    function HandleFilter(e) {
        e.preventDefault();
        dispatch({ type: 'CHANGE_FILTRO', data: { ano: selectedAno, bairro: selectedBairro, mes: selectedMes }})
    }

    function changeAno(e) {
        setSelectedAno(e.target.value);
    }

    function changeBairro(e) {
        setSelectedBairro(e.target.value);
    }

    function changeMes(e) {
        setSelectedMes(e.target.value);
    }

    useEffect(() => {        
        async function getDadosFiltro() {
            const response = await api.get('dashboard/indicadores');

            // console.log(response.data)
            
            setAno(
                (Object.entries( response.data.reduce((acc, {ano}) => ({
                    ...acc,
                        [ano]: ++acc[ano] || 1
                }), {})).map(([k, v]) => ({
                    label: k,
                    value: v
                }))).sort((a, b) => (a.label < b.label) ? 1 : -1)              
            )

            setBairro(
                Object.entries( response.data.reduce((acc, {regiao}) => ({
                    ...acc,
                        [regiao]: ++acc[regiao] || 1
                }), {})).map(([k, v]) => ({
                    label: k,
                    value: v
                })) 
            )

            setMes(
                Object.entries( response.data.reduce((acc, {mes}) => ({
                    ...acc,
                        [mes]: ++acc[mes] || 1
                }), {})).map(([k, v]) => ({
                    label: k,
                    value: v
                })) 
            )
            setLoading(false)
            

        }
        getDadosFiltro()
        
    },[])  

    useOnClickOutside(ref, () => setInactiveFilter(!false))

    useEffect(() => {
        props.onCollapse(inactiveFilter);
    }, [inactiveFilter]);    

    

    return(
        //se a página for home ou configurações não exibe filtro
        local.pathname === "/" || local.pathname === "/configuracoes" ? (
            null
        ) : ( 
        <form ref={ref} className={`filtro ${inactiveFilter ? "inactiveFilter" : ""}`} onSubmit={HandleFilter}>
         {/* Retira click do filtro se display width < 1500 */}   
        {inactiveFilter ? (
            <img src={filter} onClick={() => setInactiveFilter(!inactiveFilter)} />
        ) : (
            <img src={filter} />
        )} 

        <img className="close" src={close} onClick={() => setInactiveFilter(!inactiveFilter)} />
        <label>Filtros</label>
        <br/>

        {loading ? 
        (null): 
        (
            <div className="campos">
                <div>
                    <label className="title">Ano:</label>
                    <select name="ano" id="ano" onLoad={changeAno} onChange={changeAno} value={selectedAno} select={filtro.ano}> 
                    {/*faz um map no array de ano e cria uma option */}
                    {ano.map(index => {
                        return(
                            <option key={index.label} value={index.label}>{index.label}</option>
                        )
                    })}
                    </select>
                </div>
                <div>
                    <label className="title">Bairro:</label>
                    <select name="bairro" id="bairro" onLoad={changeBairro} onChange={changeBairro} value={selectedBairro} select={filtro.bairro}> 
                        <option value="">TODOS</option>
                        {/*faz um map no array de bairro e cria uma option */}
                        {bairro.map(index => {
                        return(
                            <option key={index.label} value={index.label}>{index.label}</option>
                        )
                    })}
                    </select>
                </div>
                <div>
                    <label className="title">Mês:</label>
                    <select name="mes" id="mes" onLoad={changeMes} onChange={changeMes} value={selectedMes} select={filtro.mes}>
                        <option value="0">TODOS</option>
                        {/*faz um map no array de mes e cria uma option */}
                        {mes.map(index => {
                        return(
                            <option key={index.label} value={index.label}>{index.label}</option>
                        )
                        })}
                    </select>
                </div>
                <input type="submit" value="Filtrar" className="btnfiltrar"></input>
            </div>
        )}       
    </form>)
       
    )
}