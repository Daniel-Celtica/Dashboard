import { Switch } from 'react-router-dom';
import Route  from './Route';
import Home from '../pages/Home/home';
import Perdas from '../pages/Perdas/perdas';
import DadosTecnicos from '../pages/DadosTecnicos/dadostecnicos';
import Os from '../pages/OS/os';
import Configuracoes from '../pages/Configuracoes/configuracoes';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/perdas" component={Perdas}/>
            <Route exact path="/dadostecnicos" component={DadosTecnicos}/>
            <Route exact path="/os" component={Os}/>
            <Route exact path="/configuracoes" component={Configuracoes}/>
        </Switch>
    )
}