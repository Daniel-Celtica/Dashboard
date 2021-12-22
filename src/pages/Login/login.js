import wellcome from "../../assets/wellcomemsg.svg";

export default function Login(){
    return(
        <div className="containerLogin">
            <div className="contentLogin">
                <form className="formLogin">
                    <label className="wellcome">Bem-vindo de volta!</label>
                    <input type="text" placeholder="Usuário:" className="txtUser"></input>
                    <input type="password" placeholder="Senha:" className="txtPass"></input>
                    <label class="teste">Continuar conectado
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    {/* <label><input type="checkbox" id="chkbox" name="chkbox"></input>Continuar conectado</label> */}
                    <input type="submit" value="Entrar" className="btnEntrar"></input>
                </form >
                <div className="headerLogin">
                    <img className="loginMsg" src={wellcome} alt="Bem-vindo"/>
                </div>
            </div>
        </div>
    )
}