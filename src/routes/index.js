import { Switch } from 'react-router-dom';
import Route  from './Route';
import Home from '../pages/Home';
import Perdas from '../pages/Perdas';
import DadosTecnicos from '../pages/DadosTecnicos';
import OrdemServico from '../pages/OrdemServico';
import Configuracoes from '../pages/Configuracoes';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/perdas" component={Perdas}/>
            <Route exact path="/dadostecnicos" component={DadosTecnicos}/>
            <Route exact path="/os" component={OrdemServico}/>
            <Route exact path="/configuracoes" component={Configuracoes}/>
        </Switch>
    )
}