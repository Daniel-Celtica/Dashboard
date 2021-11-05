import filtro from "../../assets/filtro.svg"

export default function Filtro (){
    return(
        <div className="filtro">
            <img src={filtro} />
            <span>Filtros</span>
            <br/>
            <div className="campos">
                <div className="ano">
                    <label className="title">ano</label>
                    <input className="input" type="text"></input>
                </div>
                <div className="mes">
                    <label className="title">mes</label>
                    <input className="input" type="text"></input>
                </div>
                <div className="natureza">
                    <label className="title">natureza</label>
                    <input className="input" type="text"></input>
                </div>
            </div>
        </div>
    )
}