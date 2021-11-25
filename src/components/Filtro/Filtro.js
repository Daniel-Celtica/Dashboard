import filtro from "../../assets/filtro.svg"
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

    //armazenar dados do filtro no local storage depois do submit
    //só carregar content quando filtro estiver carregado

    async function handleFilter(e) {
        e.preventDefault();

        

    }

    useEffect(() => {
        async function getAno() {
            const response = await api.get('dashboard/indicadores')

            // console.log(response.data)
            
            setAno(
                Object.entries( response.data.reduce((acc, {ano}) => ({
                    ...acc,
                        [ano]: ++acc[ano] || 1
                }), {})).map(([k, v]) => ({
                    label: k,
                    value: v
                }))              
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
        getAno()
        setLoading(false);
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
        <form ref={ref} className={`filtro ${inactiveFilter ? "inactiveFilter" : ""}`} onSubmit={handleFilter}>
        {inactiveFilter ? (
            <img src={filtro} onClick={() => setInactiveFilter(!inactiveFilter)} />
        ) : (
            <img src={filtro} />
        )}    
        <img className="close" src={close} onClick={() => setInactiveFilter(!inactiveFilter)} />
        <label>Filtros</label>
        <br/>
        <div className="campos">
            <div>
                <label className="title">Ano:</label>
                <select name="ano" id="ano"> 
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
                <select name="bairro" id="bairro"> 
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
                <select name="mes" id="mes">
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