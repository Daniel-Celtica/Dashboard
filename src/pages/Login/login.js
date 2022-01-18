import wellcome from "../../assets/wellcomemsg.svg";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

export default function Login(props){

    const contas = [
        {
            user: 'daniel',
            pass: '1234'
        },
        {
            user: 'teste',
            pass: '1234'
        },
        {
            user: 'malvadao',
            pass: '1234'
        },
        {
            user: 'yareyare',
            pass: '1234'
        },
    ]

    

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(e){
        e.preventDefault()
        var index = contas.findIndex(p => p.user === usuario && p.pass === senha );
        if(index < 0){
            alert("usuario ou senha invalidos!")
        }else{
            props.onSubmit(!false)
        }        
    }

    function changeUsuario(e){
        setUsuario(e.target.value);
    }

    function changeSenha(e){
        setSenha(e.target.value);
    }
    
    
    return(
        <div className="containerLogin">
            <div className="contentLogin">
                <form className="formLogin" onSubmit={(e) => handleLogin(e)} value={props.logged} >
                    <label className="wellcome">Olá, seja bem-vindo</label>
                    <div>
                        <input onChange={changeUsuario} type="text" placeholder="Usuário:" className="txtUser"></input>
                        <input onChange={changeSenha} type="password" placeholder="Senha:" className="txtPass"></input>
                        <label className="styled-chkbox">Continuar conectado
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    
                    
                    <input type="submit" value="Entrar" className="btnEntrar"></input>
                    
                    <div className="footer">
                        <label>powered by:</label>
                        <img src={logo} alt="Bem-vindo"/>
                    </div>
                </form >
                <div className="headerLogin">
                    <img className="loginMsg" src={wellcome} alt="Bem-vindo"/>
                </div>
            </div>
        </div>
    )
}