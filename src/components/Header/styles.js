import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
    margin: 0;
    padding: 0;
    width: 260px;
    background-color: #FFF;
    position: fixed;
    height: 100%;
    overflow: auto;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex-direction:column;
    scroll-behavior: unset;
`;

export const Logo = styled.div`
    height: 100px;
    padding-top: 10px;
    padding-left: 4px;

    img{
        height: 50px;
        width: 224px;
    }
`;

export const Hello = styled.div`
    height: 50px;
    padding-left: 10px;
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
    a{
        height: 78px;
        text-decoration: none;
        font-size: 24px;
        color: #375E65;
        transition: ease-in-out .4s;
        display: flex; 
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center; 

        &:hover{
            background-color: #C7D2D4;
        }

        img{
            padding-left: 20px;
        }
        span{
            display: flex; 
            padding-left: 10px;
        }
    }
`;


export const Hide = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding-bottom: 10px;
    padding-right: 26px;

    button{
        border: 0px;
        background-color: transparent;
    }

`;