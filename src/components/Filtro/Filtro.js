import filtro from "../../assets/filtro.svg"

export default function Filtro (){
    return(
        <div className="filtro">
            <img src={filtro} />
            <span>Filtros</span>
            <div className="ano">
                <label>ano</label>
            </div>
            <div className="mes">
                <label>mes</label>
            </div>
            <div className="natureza">
                <label>natureza</label>
            </div>
        </div>
    )
}