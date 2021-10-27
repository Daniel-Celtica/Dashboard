import './styles.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/Arrow.svg';
import logoMini from '../../assets/logomini.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {
    const [itens, setItens] = useState([
        {text: 'Home', url: '/', src: process.env.PUBLIC_URL + 'home.svg', src2: process.env.PUBLIC_URL + 'home-white.svg', active: true},
        {text: 'Perdas', url: '/perdas', src: process.env.PUBLIC_URL + 'perdas.svg', src2: process.env.PUBLIC_URL + 'perdas-white.svg',  active: false},
        {text: 'Dados Técnicos', url: '/dadostecnicos', src: process.env.PUBLIC_URL + 'dt.svg', src2: process.env.PUBLIC_URL + 'dt-white.svg', active: false},
        {text: 'Ordem de Serviço', url: '/os', src: process.env.PUBLIC_URL + 'os.svg', src2: process.env.PUBLIC_URL + 'os-white.svg', active: false},
        {text: 'Configurações', url: '/configuracoes', src: process.env.PUBLIC_URL + 'config.svg', src2: process.env.PUBLIC_URL + 'config-white.svg', active: false}
    ])
    const [clicked, setClicked] = useState(false);

    // carrega a pagina com home selecionada <= passa um parametro selected ou active
    // no click de um item marca ele como slecionada 
    // quando estiver selecionada troca o src para branco

    const menuList = itens.map(({url, text, src, src2, active}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active" onClick={()=> handleTest(index)}>
                    {active ? <img src={src2} alt={text}></img> : <img src={src} alt={text}></img> }
                    {/* <img src={src} alt={text}></img> */}
                    <span>{text}</span>
                </NavLink>
            </li>
        );
    });

    function handleTest (index){        
        setItens[index] = {...setItens[index], active:true} //ativa o item clicado

        //busca em toda a array qual está ativado
        const ativo = item => item.active === true ;
        const teste = itens.filter(ativo); 

        //preciso desativar o item que não foi clicado
        // itens[teste] = {...itens[teste], active:false}//precisa do index


        console.log(teste);
        // nomeDaArray[posição] = {...nomeDaArray[posição], nomeDoObjeto:valor};
        


    }
   
    function handleClick (){
        setClicked(!clicked);

    }

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
            <div className="hide">
                <button onClick={()=> {}}>
                    <img src={arrow} alt="Retrair" />
                </button> 
            </div>
        </div>
    )
   
    
}