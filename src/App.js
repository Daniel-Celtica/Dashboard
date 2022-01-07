import { BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState, useRef } from "react";
import Filtro from "./components/Filtro/Filtro";
import Drawer from "./components/Drawer/Drawer";
import { Provider } from "react-redux";
import store from "./store/reducers";
import Login from "./pages/Login/login";

function App (){
  const ref = useRef();
  const [inactive, setInactive] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);
  const [logged, setlogged] = useState(false);

  function handleChange(newValue){
    setlogged(newValue)
  }


  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
        {logged ? (
          <>
            <SideMenu onCollapse={(inactive) => { setInactive(inactive) }}/>
            <Drawer/>
              <div className="container">
                <Filtro onCollapse={(inactiveFilter) => { setInactiveFilter(inactiveFilter) }}/>
                <Routes value={logged} onCollapse={handleChange}/>
              </div>
          </>
          ): (
            <Login value={logged} onSubmit={handleChange}/>
          )}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;


