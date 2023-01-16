
export default function LabelDadosTecnicos(dados, label)
{
    return(
        <div className="labelc">
            <label>{dados.dados.name}</label>
            <div>
            {dados.name === label ? (
                <span className="valor">
                    {(dados.dados.data.reduce((acc, d) => acc + d.valor / dados.dados.data.length, 0 )).toFixed(2)
                    }
                </span>
                ) : (
                    <span className="valor">
                               
                               {(dados.dados.data.reduce((acc, d) => acc + d.valor, 0 )).toFixed(0)}
                    
                    
                </span>
                )}
                
                {dados.name === label ? (
                    <span className="medida">min</span>
                ) : (
                    null
                ) }
            </div>
        </div>
    )
}