export default function LabelC (dataPerda){


    console.log(dataPerda)
    return(
        <div className="labelc">
            {/* icone ???? */}
            <label>{dataPerda.dataPerda.name}</label>
            <div>
                {dataPerda.dataPerda.name === "Tempo médio correções" ? (
                <span className="valor">
                    {(dataPerda.dataPerda.data.reduce((acc, d) => acc + d.valor / dataPerda.dataPerda.data.length, 0 )).toFixed(1)
                    }
                </span>
                ) : (
                    <span className="valor">
                    {(dataPerda.dataPerda.data.reduce((acc, d) => acc + d.valor, 0 )).toFixed(1)
                    }
                </span>
                )}
                {/*indicador*/}
                {dataPerda.dataPerda.name === "Tempo médio correções" ? (
                    <span className="medida">Hr</span>
                ) : (
                    <span className="medida">L</span>
                ) }
            </div>
        </div>
    );
}