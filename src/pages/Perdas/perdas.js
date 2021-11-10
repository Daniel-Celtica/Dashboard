import BarC from "../../components/BarC/barc";
import LabelC from "../../components/LabelC/labelc";
import LineC from "../../components/LineC/linec";
import TableC from "../../components/TableC/tablec";


export default function Perdas (){
    return(
        <div className="content">
        <div className="content-top">
            <div className="twoinone">
                <LabelC></LabelC>
                <BarC></BarC>
            </div>
            <div className="twoinone">
                <LabelC></LabelC>
                <BarC></BarC>
            </div>
            <div className="twoinone">
                <LabelC></LabelC>
                <BarC></BarC>
            </div>
        </div>
        <div className="content-bottom">
            <div className="lc"><LineC></LineC></div>
            <div className="t"><TableC></TableC></div>
        </div>
        </div>
    )
}