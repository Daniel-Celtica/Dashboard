import './styles.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/Arrow.svg';
import logoMini from '../../assets/logomini.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {
    const [itens, setItens] = useState([
        {text: 'Home', url: '/', src: process.env.PUBLIC_URL + 'home.svg', src2: process.env.PUBLIC_URL + 'home-white.svg', active: false},
        {text: 'Perdas', url: '/perdas', src: process.env.PUBLIC_URL + 'perdas.svg', src2: process.env.PUBLIC_URL + 'perdas-white.svg',  active: false},
        {text: 'Dados Técnicos', url: '/dadostecnicos', src: process.env.PUBLIC_URL + 'dt.svg', src2: process.env.PUBLIC_URL + 'dt-white.svg', active: false},
        {text: 'Ordem de Serviço', url: '/os', src: process.env.PUBLIC_URL + 'os.svg', src2: process.env.PUBLIC_URL + 'os-white.svg', active: false},
        {text: 'Configurações', url: '/configuracoes', src: process.env.PUBLIC_URL + 'config.svg', src2: process.env.PUBLIC_URL + 'config-white.svg', active: false}
    ])
    const [clicked, setClicked] = useState(false);
   
    function handleClick (){
        setClicked(!clicked);

    }

    const menuList = itens.map(({url, text, src}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active" >
                    {active ? <img src={src2} alt={text}></img> : <img src={src} alt={text}></img> }
                    <img src={src} alt={text}></img>
                    <span>{text}</span>
                </NavLink>
            </li>
        );
    }); 

    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="Céltica" />
            </div>
            <div className="hello">
                <i>Bom dia, Ronaldo!</i>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
            <div className="hide" >
                <input type="checkbox" className="check" />
                <label className="icone" htmlFor="checkbox"><img src={arrow} alt="Retrair" /></label>
                
                {/* <button onClick={()=> {}}>
                    <img src={arrow} alt="Retrair" />
                </button>  */}
            </div>
        </div>
    )
   
    
}