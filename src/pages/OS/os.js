import { useState, useEffect } from "react";
import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";
import api from "../../services/api";
import Loading from "../../components/Loading/loading"

export default function Os (){
    const [loading, setLoading] = useState(true);

    if(loading){
        return(
            <Loading/>
        )
        
    }
    return(
        <div className="content">
        </div>
    )

}