import filtro from "../../assets/filtro.svg"
import { useLocation } from "react-router";

export default function Filtro (){
    let local = useLocation();
    console.log(local.pathname);

    return(
        local.pathname === "/" || local.pathname === "/configuracoes" ? (
            null
        ) : ( 
        <div className="filtro">
        <img src={filtro} />
        <label>Filtros</label>
        <br/>
        <div className="campos">
            <div>
                <label className="title">ano</label>
                <input className="input" type="text"></input>
            </div>
            <div>
                <label className="title">mes</label>
                <input className="input" type="text"></input>
            </div>
            <div>
                <label className="title">natureza</label>
                <input className="input" type="text"></input>
            </div>
        </div>
    </div>)
       
    )
}