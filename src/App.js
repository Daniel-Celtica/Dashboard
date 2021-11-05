import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";
import Filtro from "./components/Filtro/Filtro";

function App() {
  const [inactive, setInactive] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu onCollapse={(inactive) => { setInactive(inactive) }} />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Filtro/>
          <Routes/>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
