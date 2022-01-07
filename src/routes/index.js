import { Switch } from 'react-router-dom';
import Route  from './Route';
import Home from '../pages/Home/home';
import Perdas from '../pages/Perdas/perdas';
import DadosTecnicos from '../pages/DadosTecnicos/dadostecnicos';
import Os from '../pages/OS/os';
import Configuracoes from '../pages/Configuracoes/configuracoes';
// import Login from "../pages/Login/login";

export default function Routes(props){



    return(
        <Switch>
            {/* <Route exact path="/login" component={Login}/> */}
            <Route exact path="/" component={Home} isPrivate/>
            <Route exact path="/perdas" component={Perdas} isPrivate/>
            <Route exact path="/dadostecnicos" component={DadosTecnicos} isPrivate/>
            <Route exact path="/os" component={Os} isPrivate/>
            <Route exact path="/configuracoes" component={Configuracoes} isPrivate/>
        </Switch>
    )
}