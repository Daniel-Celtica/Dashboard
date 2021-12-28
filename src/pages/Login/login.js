import wellcome from "../../assets/wellcomemsg.svg";
import logo from "../../assets/logo.svg";

export default function Login(){

    function handleLogin(e){
        e.preventDefault()
        alert('teste')
    }
    
    
    return(
        <div className="containerLogin">
            <div className="contentLogin">
                <form className="formLogin" onSubmit={handleLogin}>
                    <label className="wellcome">Bem-vindo de volta!</label>
                    <input type="text" placeholder="Usuário:" className="txtUser"></input>
                    <input type="password" placeholder="Senha:" className="txtPass"></input>
                    <label class="styled-chkbox">Continuar conectado
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    
                    <input type="submit" value="Entrar" className="btnEntrar"></input>
                    
                    <div className="footer">
                        <label>powered by:</label>
                        <img src={logo}/>
                    </div>
                </form >
                <div className="headerLogin">
                    <img className="loginMsg" src={wellcome} alt="Bem-vindo"/>
                </div>
            </div>
        </div>
    )
}