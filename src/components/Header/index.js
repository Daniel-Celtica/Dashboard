import { Navigation, Logo, Hello, Itens, Hide } from './styles';
import logo from '../../assets/logo.png';
import home from '../../assets/home.svg';
import perdas from '../../assets/perdas.svg';
import dt from '../../assets/dt.svg';
import os from '../../assets/os.svg';
import config from '../../assets/config.svg';
import arrow from '../../assets/Arrow.svg';
import logoMini from '../../assets/logomini.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {
    const [pages, setPages] = useState([
        {state: 'home', link:'/' , text: 'Home', src: './assets/home.svg', active: true},
        {state: 'perdas', link:'/perdas' , text: 'Perdas', src: {perdas}, active: false},
        {state: 'dt', link:'/dadostecnicos' , text: 'Dados Técnicos', src: {dt}, active: false},
        {state: 'os', link:'/os' , text: 'Ordem de Serviço', src: {os}, active: false},
        {state: 'config', link:'/configuracoes' , text: 'Configurações', src: {config}, active: false},
    ]);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(()=> {
        async function load(){
            // carrega a pagina com home selecionada <= passa um parametro selected
            // no click de um item marca ele como slecionada 
            // quando estiver selecionada 
            
        }

    })

    function handleSetPage (index){
        setPageIndex(index)
    }


    return(
        <Navigation>
            <Logo>
                <img src={logo} alt="Céltica" />
            </Logo>
            <Hello>
                <i>Bom dia, Ronaldo!</i>
            </Hello>
            <Itens active={pageIndex}>
                {pages.map((page, index) => (
                    <Link to={page.link} key={page.text} onClick={()=> handleSetPage(index)}>
                    <img src={page.src} alt={page.text}></img>
                    <span>{page.text}</span>
                </Link>
                ))}
            </Itens>
            <Hide>
                <button onClick={()=> {}}>
                    <img src={arrow} alt="Retrair" />
                </button> 
            </Hide>
        </Navigation>
    )
    
}
// //Exibe os Icones
// <Itens active={pageIndex}>
//                 {images.map(({id, src, text, state, link}) => 
//                     <Link to={link} key={id} onClick={()=> {}}>
//                     <img src={src} alt={text}></img>
//                     <span>{text}</span>
//                 </Link>
//                 )}
//             </Itens>