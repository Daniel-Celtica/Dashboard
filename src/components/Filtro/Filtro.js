import filter from "../../assets/filtro.svg"
import close from "../../assets/close.svg"
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import useOnClickOutside from "../UseOnClickOutside";
import api from "../../services/api";

export default function Filtro (props){
    const ref = useRef();
    let local = useLocation();
    const [inactiveFilter, setInactiveFilter] = useState(true);

    const [loading, setLoading] = useState(true);

    const [ano, setAno] = useState([]); 
    const [bairro, setBairro] = useState([]); 
    const [mes, setMes] = useState([]); 

    const [selectedAno, setSelectedAno] = useState('');
    // const [selectedAno, setSelectedAno] = useState(() => () => new Date().getFullYear());
    const [selectedBairro, setSelectedBairro] = useState('todos');
    const [selectedMes, setSelectedMes] = useState('todos');

    const [filtro, setFiltro] = useState([]);
    
    useEffect(() => {
        setSelectedAno(new Date().getFullYear().toString())
        console.log(localStorage.getItem('filtro'))
    }, [loading])
    
    //armazenar dados do filtro no local storage depois do submit
    //só carregar content quando filtro estiver carregado   
    
    // useEffect(() => {
    //     setFiltro({
    //         ano: selectedAno,
    //         bairro: selectedBairro,
    //         mes: selectedMes
    //     })
    // }, [])
    
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('filtro'));
    }, [filtro])

    function HandleFilter(e) {
        e.preventDefault();

        const array = {
            ano: selectedAno,
            bairro: selectedBairro,
            mes: selectedMes
        }

        setFiltro(array)

        localStorage.setItem('filtro', JSON.stringify(filtro));
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
            const response = await api.get('dashboard/indicadores')

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


        }
        getDadosFiltro()
        setLoading(false)
    },[])  

    useOnClickOutside(ref, () => setInactiveFilter(!false))

    useEffect(() => {
        props.onCollapse(inactiveFilter);
    }, [inactiveFilter]);    

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
        
    }

    return(
        local.pathname === "/" || local.pathname === "/configuracoes" ? (
            null
        ) : ( 
        <form ref={ref} className={`filtro ${inactiveFilter ? "inactiveFilter" : ""}`} onSubmit={HandleFilter}>
        {inactiveFilter ? (
            <img src={filter} onClick={() => setInactiveFilter(!inactiveFilter)} />
        ) : (
            <img src={filter} />
        )}    
        <img className="close" src={close} onClick={() => setInactiveFilter(!inactiveFilter)} />
        <label>Filtros</label>
        <br/>
        <div className="campos">
            <div>
                <label className="title">Ano:</label>
                <select name="ano" id="ano" onLoad={changeAno} onChange={changeAno} value={selectedAno} select={filtro.ano}> 
                {/* <option value="todos">{new Date().getFullYear()}</option> */}
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
                    <option value="todos">TODOS</option>
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
                    <option value="todos">TODOS</option>
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
        
    </form>)
       
    )
}