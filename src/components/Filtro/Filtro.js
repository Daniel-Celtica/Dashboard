import filtro from "../../assets/filtro.svg"
import { useLocation } from "react-router";

export default function Filtro (){
    let local = useLocation();
    console.log(local.pathname);

    return(
        local.pathname === "/" || local.pathname === "/configuracoes" ? (
            null
        ) : ( 
        <form className="filtro">
        <img src={filtro} />
        <label>Filtros</label>
        <br/>
        <div className="campos">
            <div>
                <label className="title">Ano</label>
                <select name="ano" id="ano"> 
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
                *fazer requisição na API pegar todas os anos
            </div>
            <div>
                <label className="title">Mês</label>
                <select name="mes" id="mes">
                    <option value="jan">Janeiro</option>
                    <option value="fev">Fevereiro</option>
                    <option value="mar">Março</option>
                    <option value="abr">Abril</option>
                    <option value="mai">Maio</option>
                    <option value="jun">Junho</option>
                    <option value="jul">Julho</option>
                    <option value="ago">Agosto</option>
                    <option value="set">Setembro</option>
                    <option value="out">Outubro</option>
                    <option value="nov">Novembro</option>
                    <option value="dez">Dezembro</option>
                </select>
                *reload quando trocar ano e pegar todos os meses do ano selecionado
            </div>
            <input type="submit" value="Filtrar" className="btnfiltrar"></input>
        </div>
        
    </form>)
       
    )
}