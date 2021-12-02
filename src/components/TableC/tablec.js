export default function TableC (dataPerda){

    //soma de todos os valores de cada chave
    //mover apra Perdas.js
    // console.log(dataPerda)

    const data1 = {
        name: "Vazamento p/km de rede",
        valor: dataPerda.dataPerda.reduce((acc, d) => acc + d.vazamentosKMRDA, 0 )
    } 
    const data2 = {
        name: "Vazamento p/ligações",
        valor: dataPerda.dataPerda.reduce((acc, d) => acc + d.vazamentoLigacoes, 0 )
    }
    const data3 = {
        name: "Tempo médio de correção",
        valor: dataPerda.dataPerda.reduce((acc, d) => acc + d.tempoMedioCorrecao / dataPerda.dataPerda.length, 0 )
    }
    const data4 = {
        name: "Idade média hidrometros",
        valor: dataPerda.dataPerda.reduce((acc, d) => acc + d.idadeMediaHidrometros / dataPerda.dataPerda.length, 0 )
    }
    const data5 = {
        name: "Infrações confirmadas",
        valor: dataPerda.dataPerda.reduce((acc, d) => acc + d.infracoesConfirmadas, 0 )
    }



    const data = ([data1,data2,data3,data4,data5]) 

    // console.log(data)

    return(
        <div className="tablec">
            <label>Sumário</label>
            <div>
                <table>
                    <tbody>

                    {data.map(index => {
                        return(
                        <tr key={index.name}>
                        <th>{index.name}</th>
                        <td>{index.valor} </td>
                        </tr>
                        )
                        
                    })}
                    {/* <tr>
                        <th>Vazamento p/km de rede</th>
                        <td>335 Litros</td>
                    </tr>
                    <tr>
                        <th>Vazamento p/ligações</th>
                        <td>300 Litros</td>
                    </tr>
                    <tr>
                        <th>Tempo médio de correção </th>
                        <td>24,6 Minutos</td>
                    </tr>
                    <tr>
                        <th>Idade média hidrometros</th>
                        <td>9 Anos</td>
                    </tr>
                    <tr>
                        <th>Infrações confirmadas</th>
                        <td>0</td>
                    </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}