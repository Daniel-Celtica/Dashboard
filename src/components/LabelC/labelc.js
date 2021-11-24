export default function LabelC (dataPerda){
    return(
        <div className="labelc">
            {/* icone ???? */}
            <label>{dataPerda.dataPerda.name}</label>
            <div>
                <span className="valor">500,00</span>
                <span className="medida">R$</span>
                {/*indicador*/}
            </div>
        </div>
    );
}