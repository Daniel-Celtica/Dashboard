import { BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState, useRef } from "react";
import Filtro from "./components/Filtro/Filtro";
import Drawer from "./components/Drawer/Drawer";
import { Provider } from "react-redux";
import store from "./store/reducers";

function App (){
  const ref = useRef();
  const [inactive, setInactive] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);

  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <SideMenu onCollapse={(inactive) => { setInactive(inactive) }}/>
          <Drawer/>
          <div className="container">
            <Filtro onCollapse={(inactiveFilter) => { setInactiveFilter(inactiveFilter) }}/>
            <Routes/>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;


