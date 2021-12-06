export default function LabelC (dataPerda){

    return(
        <div className="labelc">
           
            <label>{dataPerda.dataPerda.name}</label>
            <div>
                {dataPerda.dataPerda.name === "Tempo médio correções OS de vazamento" ? (
                <span className="valor">
                    {(dataPerda.dataPerda.data.reduce((acc, d) => acc + d.valor / dataPerda.dataPerda.data.length, 0 )).toFixed(2)
                    }
                </span>
                ) : (
                    <span className="valor">
                    {(dataPerda.dataPerda.data.reduce((acc, d) => acc + d.valor, 0 )).toFixed(0)
                    }
                </span>
                )}
                
                {dataPerda.dataPerda.name === "Tempo médio correções OS de vazamento" ? (
                    <span className="medida">min</span>
                ) : (
                    null
                ) }
            </div>
        </div>
    );
}