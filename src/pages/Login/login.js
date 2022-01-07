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
            user: 'malvadão',
            pass: '1234'
        },
        {
            user: 'yareyare',
            pass: '1234'
        },
    ]

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [testeFail, setTesteFail] = useState(false);
    const [testeSuccess, setTesteSuccess] = useState(false);

    function handleLogin(e){
        e.preventDefault()
        console.log(usuario, senha)
        if(usuario !== '' && senha !== ''){
            contas.map(index => {
                if(index.user === usuario && index.pass === senha){
                    setTesteSuccess(true);
                    props.onSubmit(!false);
                }else{
                    setTesteFail(true);
                }
            })
           
            if(testeFail === true && testeSuccess === false){
                alert("usuario ou senha invalidos!")
                setTesteSuccess(false);
                setTesteFail(false);
                 
            }
        }else{
            alert('preencha os campos para fazer login')
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
                    <label className="wellcome">Bem-vindo de volta!</label>
                    <input onBlur={changeUsuario} type="text" placeholder="Usuário:" className="txtUser"></input>
                    <input onBlur={changeSenha} type="password" placeholder="Senha:" className="txtPass"></input>
                    <label class="styled-chkbox">Continuar conectado
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    
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