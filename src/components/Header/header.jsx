import logo from '../../assets/logo.png';
import arrow from '../../assets/Arrow.svg';
import logoMini from '../../assets/logomini.png';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles';
import styled from 'styled-components';

export const Navigation = styled.div`
    margin: 0;
    padding: 0;
    width: ${({ open }) => open ? '80px' : '260px'};
    background-color: #FFF;
    position: fixed;
    height: 100%;
    overflow: auto;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex-direction:column;
    scroll-behavior: unset;
    transition: all 1s ease-in-out;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Logo = styled.div`
    padding-left: 4px;
    padding-top: 10px;
    padding-bottom: 36px;
`;

export const Hello = styled.div`
    opacity: ${({ open }) => open ? '0%' : '100%'};
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 10px;
    transition: all 1s ease-in-out;
    i{
        font-size: 20px;
        color: #375E65;
    }
`;
  
export const Itens = styled.div`
    border-top: solid 1px #C7D2D4;
    display: block;
    display: flex;
    flex-direction:column;
    border-bottom: solid 1px #C7D2D4;
`;

export const StyledLink = styled(NavLink)`
        height: 78px;
        background-color: ${({ selected }) => selected ? '#375E65' : 'transparent'};
        transition: ease-in-out .4s;
        text-decoration: none;
        font-size: 24px;
        color: #375E65;
        display: flex; 
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        

        &.active {
            background-color: #375E65;
            color: #fff;
            
            img{
                filter: brightness(0) invert(1);
            }
        }

        img{
            padding-left: 20px;
        } 
`;


export const Span = styled.span`
    transition: ease-in-out .4s;
    opacity: ${({ open }) => open ? '0%' : '100%'};
    padding-left: 10px;
`;

export const Hide = styled.div`
    /* position: absolute;
    bottom: 0px;
    right: 0px;
    padding-bottom: 10px;
    padding-right: 26px; */
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 260px;
    /* width: 260px; */
    align-self:flex-end;
    padding-bottom: 10px;
    padding-top: 10px;
    border-top: solid 1px #C7D2D4;
    background-color: #fff;
    display: inline-block;
    text-align:end;
    cursor: pointer;

    img{
        padding: 0px 20px 0px 20px;
        background-color: transparent;
    }

`;


export default function Header() {
    const [itens, setItens] = useState([
        {text: 'Home', url: '/', src: process.env.PUBLIC_URL + 'home.svg', src2: process.env.PUBLIC_URL + 'home-white.svg', active: false},
        {text: 'Perdas', url: '/perdas', src: process.env.PUBLIC_URL + 'perdas.svg', src2: process.env.PUBLIC_URL + 'perdas-white.svg',  active: false},
        {text: 'Dados Técnicos', url: '/dadostecnicos', src: process.env.PUBLIC_URL + 'dt.svg', src2: process.env.PUBLIC_URL + 'dt-white.svg', active: false},
        {text: 'Ordem de Serviço', url: '/os', src: process.env.PUBLIC_URL + 'os.svg', src2: process.env.PUBLIC_URL + 'os-white.svg', active: false},
        {text: 'Configurações', url: '/configuracoes', src: process.env.PUBLIC_URL + 'config.svg', src2: process.env.PUBLIC_URL + 'config-white.svg', active: false}
    ])
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        // action on update of movies
    }, [itens]);

    function teste(){
        
        setSelected(!selected);
    }

    return(
        <Navigation open={open}>
            <Logo>
                {open ? <img src={logoMini} alt="Celtica" /> : <img src={logo} alt="Celtica" />}
            </Logo>
            <Hello open={open}>
                <i>Bom dia, Neymar</i>
            </Hello>
            <Itens open={open}>
            {itens.map((item, index) => (
                    <StyledLink exact to={item.url} key={item.text}>
                        <img src={item.src} alt={item.text} />
                        <Span open={open}>{item.text}</Span>
                    </StyledLink>
            ))}
            </Itens>
            <Hide open={open} onClick={() => setOpen(!open) }>
                <img src={arrow} alt="Retrair" />
            </Hide>
        </Navigation>
    )    
}