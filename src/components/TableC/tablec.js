export default function TableC (dados){

    const data = (dados.dados);

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
                    </tbody>
                </table>
            </div>
        </div>
    )
}