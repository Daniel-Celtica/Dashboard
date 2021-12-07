export default function LabelC (dados){

    const data = (dados.dados);

    return(
        <div className="labelc">
           
            <label>{data.name}</label>
            <div>
                {data.name === "Tempo médio correções OS de vazamento" ? (
                <span className="valor">
                    {(data.data.reduce((acc, d) => acc + d.valor, 0 ))}
                </span>
                ) : (
                    <span className="valor">
                    {(data.data.reduce((acc, d) => acc + d.valor, 0 ))}
                </span>
                )}
                
                {data.name === "Tempo médio correções OS de vazamento" ? (
                    <span className="medida">min</span>
                ) : (
                    null
                ) }
            </div>
        </div>
    );
}