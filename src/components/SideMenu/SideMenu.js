import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import logomini from "../../assets/logomini.svg";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import menu from "../../assets/menu.svg";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useOnClickOutside from "../UseOnClickOutside";

export const menuItems = [
  { name: "Home", exact: true, to: "/", src: process.env.PUBLIC_URL + 'home.svg', src2: process.env.PUBLIC_URL + 'home-white.svg',
    svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#375E65" points=" 2.94337,15.7866 26.6931,15.7866 26.6931,27.6155 24.2412,30 18.472,30 18.472,22.005 11.1644,22.005 11.1644,30 5.39526,30 2.94337,27.6155 2.94337,15.7866"></polygon>
    <polygon fill="#375E65" points=" 13.7193,3.41982 15.9169,3.41982 27.4762,14.8787 26.3774,17.2827 3.25886,17.2827 2.16004,14.8787 13.7193,3.41982"></polygon>
    <polygon fill="#375E65" points=" 16.6667,0.6789360000000001 16.7251,4.09268 4.2668,16.6187 0.7565550000000001,16.6755 0.6981270000000002,13.2617 13.1564,0.7357560000000001 16.6667,0.6789360000000001"></polygon>
    <polygon fill="#375E65" points=" 13.3333,0.6803450000000002 13.2749,4.0940900000000005 25.7332,16.6201 29.2434,16.6769 29.3019,13.2631 16.8436,0.7371650000000001 13.3333,0.6803450000000002"></polygon>
    </svg>
 },

 
  { name: "Perdas", exact: true, to: `/perdas`, src: process.env.PUBLIC_URL + 'perdas.svg', src2: process.env.PUBLIC_URL + 'perdas-white.svg', 
    svg: <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#375E65" points=" 3,4 9,10.4379 9,25 3,25 3,4"></polygon>
    <polygon fill="#375E65" points=" 13,9.29783 16,7 19,10.0639 19,25 13,25 13,9.29783"></polygon>
    <polygon fill="#375E65" points=" 23,19 29,19 29,25 23,25 23,19"></polygon>
    <path d="M9.29577 13.283L0 0L9.29577 8.30189L13.5211 4.15094L25.3521 15.3585L27.8873 12.8679L30 22L21.1268 19.9245L23.2394 17.8491L13.9437 9.13208L9.29577 13.283Z" fill="#B14545"/>
    </svg>
},
  { name: "Dados Técnicos", to: `/dadostecnicos`, src: process.env.PUBLIC_URL + 'dt.svg', src2: process.env.PUBLIC_URL + 'dt-white.svg',
    svg: <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="0" width="8" height="3" rx="2" stroke="#375E65" strokeWidth="2"></rect>
    <rect x="10" y="2.93555" width="18" height="22.129" rx="2" stroke="#375E65" strokeWidth="4"></rect>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3125 10.6128H12.6875L13.3413 13.1436C13.9957 13.3126 14.6131 13.5694 15.179 13.9003L17.4622 12.5746L19.1416 14.1998L17.7355 16.4677C18.014 16.9536 18.2335 17.4755 18.3848 18.0244L21 18.6571V20.9555L18.3848 21.5882C18.2142 22.2071 17.9569 22.7916 17.6263 23.329L19.1417 25.7734L17.4623 27.3986L14.8606 25.8879C14.384 26.1351 13.875 26.3313 13.3413 26.4691L12.6875 28.9999H10.3125L9.6587 26.4691C9.09151 26.3226 8.55218 26.1102 8.05002 25.8407L5.70657 27.2014L4.02719 25.5762L5.39707 23.3666C5.05517 22.8189 4.78978 22.2215 4.61521 21.5882L2 20.9555V18.6571L4.6152 18.0244C4.77055 17.4609 4.99782 16.9257 5.28691 16.4288L4.02719 14.397L5.70657 12.7718L7.73652 13.9505C8.32532 13.5953 8.97157 13.3211 9.6587 13.1437L10.3125 10.6128ZM11.5 23.2539C13.4675 23.2539 15.0625 21.7104 15.0625 19.8063C15.0625 17.9023 13.4675 16.3588 11.5 16.3588C9.53249 16.3588 7.9375 17.9023 7.9375 19.8063C7.9375 21.7104 9.53249 23.2539 11.5 23.2539Z" fill="#D9AE3F"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.09991 2.87109L7.43529 3.17777L7.45396 4.6852C7.79863 4.8647 8.11034 5.08884 8.38293 5.34796L9.84949 4.89737L10.5697 6.02802L9.46638 7.12161C9.55593 7.43081 9.6074 7.75262 9.61679 8.08078L11 8.77423L10.6831 10.0665L9.12541 10.0846C8.94418 10.4105 8.71891 10.706 8.4589 10.9654L8.97395 12.5355L7.80561 13.2324L6.55104 12.0471C6.24898 12.1245 5.93572 12.1691 5.61665 12.1777L4.90009 13.5163L3.56471 13.2096L3.54604 11.7021C3.24732 11.5466 2.97336 11.3575 2.72817 11.1411L1.22291 11.6036L0.502727 10.473L1.57762 9.40746C1.4609 9.05536 1.39405 8.6852 1.38321 8.30657L0 7.61312L0.3169 6.32081L1.87458 6.30275C2.03963 6.00595 2.2412 5.7344 2.47227 5.49229L2.04411 4.18722L3.21246 3.49027L4.19132 4.41513C4.57134 4.29148 4.97253 4.22071 5.38334 4.2097L6.09991 2.87109ZM5.02465 10.1321C6.13092 10.3862 7.24055 9.72428 7.50308 8.65369C7.76561 7.5831 7.08162 6.50927 5.97535 6.25521C4.86908 6.00115 3.75945 6.66307 3.49692 7.73366C3.23439 8.80425 3.91838 9.87808 5.02465 10.1321Z" fill="#D9AE3F"/>
    </svg>
    
},
  { name: "Ordem de Serviço", to: `/os`, src: process.env.PUBLIC_URL + 'os.svg', src2: process.env.PUBLIC_URL + 'os-white.svg',
    svg:<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="2.06885" width="2" height="25" rx="2.07407" stroke="#375E65" strokeWidth="3"></rect>  
    <path d="M19.9322 3.35286C20.4068 -3.85683 2.0565 2.57493 0 4.0953V24.8276C1.58192 23.169 12.339 15.2274 17.5593 22.013C20.5653 25.9202 22.7797 19.8925 28 23.2853V7.59373C24.2034 4.0953 19.5699 8.8565 19.9322 3.35286Z" fill="#629F64"/>
    </svg>
},
  { name: "Configurações", to: `/configuracoes`, src: process.env.PUBLIC_URL + 'config.svg', src2: process.env.PUBLIC_URL + 'config-white.svg',
    svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#375E65" points=" 13.125,0 16.875,0 17.9073,4.12926 20.809,5.36385 24.4141,3.2008 27.0657,5.85245 24.8456,9.55267 25.8707,12.0927 30,13.125 30,16.875 25.8707,17.9073 24.673000000000002,20.7475 27.0658,24.7357 24.4142,27.3873 20.3062,24.9225 17.9073,25.8707 16.875,30 13.125,30 12.0927,25.8707 9.55266,24.8456 5.85248,27.0657 3.20083,24.414 5.36379,20.8089 4.12928,17.9073 0,16.875 0,13.125 4.12927,12.0927 5.18985,9.48921 3.20083,6.1742 5.85248,3.52255 9.05767,5.44567 12.0927,4.12931 13.125,0"></polygon>
    <polygon fill="#375E65" points=" 9,9 21,9 21,21 9,21 9,9"></polygon>
    <circle cx="15" cy="15" r="6" fill="white"></circle>
    </svg>
   },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);
  const [title, setTitle] = useState("Home");
  const ref = useRef();
  
  //#region "Screen size"
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
      getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
      })
  }

  useEffect(() => {
      window.addEventListener('resize', setDimension);

      return(() => {
          window.removeEventListener('resize', setDimension);
      })
  }, [screenSize])
  //#endregion

  useEffect(() => {
    setInactive(!inactive)
  }, [screenSize.dynamicWidth <1500])

  useOnClickOutside(ref, () => setInactive(!false))

  function handleInactive() {
    setInactive(!inactive)
    setInactiveFilter(!inactiveFilter)
  }

  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);

  useEffect(() => {
    props.onCollapse(inactiveFilter);
  }, [inactiveFilter])

  let local = useLocation();
  
  function handleTitulo (){
    if(local.pathname === "/"){
      setTitle("Home")
    }if(local.pathname === "/perdas"){
      setTitle("Perdas")
    }if(local.pathname === "/dadostecnicos"){
      setTitle("Dados Técnicos")
    }if(local.pathname === "/os"){
      setTitle("Ordem de Serviço")
    }if(local.pathname === "/configuracoes"){
      setTitle("Configurações")
    }
  }

  useEffect(() => {
    handleTitulo()
  },[local])


  return (
    
    <div ref={ref} className={`side-menu ${inactive ? "inactive" : ""}`}>
        
        <div className="drawer">
          <img src={menu} alt="show" onClick={() => handleInactive()} />
          <label>{title}</label>
        </div>

        <div className="side">
          <div className="logo">
            {inactive ? (
              <img src={logomini} alt="celtica" />
            ) : (
              <img src={logo} alt="celtica" />
            )}
          </div>

          <div className="hello">
            <i>Bom dia, Carlos!</i>
          </div>

          <div className="main-menu">
            <ul>
              {menuItems.map((menuItem, index) => (    
                <li key={index} onClick={props.onClick}>
                <NavLink
                  key={index}
                  name={menuItem.name}
                  src={menuItem.src}
                  src2={menuItem.src}
                  exact
                  to={menuItem.to}
                  className={`menu-item`}>
                  <div className="menu-icon">
                  {menuItem.svg}
                  </div>
                  <span>{menuItem.name}</span>
                </NavLink>
              </li>
              ))}
            </ul>
          </div>
          <div onClick={() => handleInactive()} className="toggle-menu-btn">
              {inactive ? (
                <img src={arrowRight} alt="expandir"/>
              ) : (
                <img src={arrowLeft} alt="retrair"/>
              )}
          </div>
        </div>
    </div>
  );
};

export default SideMenu;
