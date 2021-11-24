import { BrowserRouter, useLocation } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState, useEffect, useRef } from "react";
import Filtro from "./components/Filtro/Filtro";
import Drawer from "./components/Drawer/Drawer";

function App (){
  const ref = useRef();
  const [inactive, setInactive] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        
        <SideMenu onCollapse={(inactive) => { setInactive(inactive) }} />
        <Drawer/>
        <div className="container">
          <Filtro onCollapse={(inactiveFilter) => {setInactiveFilter(inactiveFilter) }} />
          <Routes/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


