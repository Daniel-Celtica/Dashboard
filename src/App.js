import { BrowserRouter, useLocation } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState, useEffect } from "react";
import Filtro from "./components/Filtro/Filtro";

function App (){
  const [inactive, setInactive] = useState(false);
  
  
  // usePageViews();
  

  // function usePageViews() {
  //   let local = useLocation();
  //   useEffect(() => {
  //     let ga = 'b'
  //     ga.send(["pageview", location.pathname]);
  //   }, [local]);
  // }

  

  return (
    <div className="app">
      <BrowserRouter>
        <SideMenu onCollapse={(inactive) => { setInactive(inactive) }} />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Filtro/>

          <Routes></Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


