import { useEffect } from "react";
import { useState } from "react"


export default function Configuracoes (){
    // se não houver um novo login / cadastro  de usuarios 
    // não terá como alterar senha ou informações em configurações
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [nomeError, setNomeError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [confirmarSenhaError, setConfirmarSenhaError] = useState(false);
    const [errorNome, setErrorNome] = useState('');
    const [errorSenha, setErrorSenha] = useState('');
    const [errorConfirmarSenha, setErrorConfirmarSenha] = useState('');
    //melhorar a lógica depois

    function handleSalvar(e){
        e.preventDefault()

    }

    function changeNome(e){
        if(e.target.value.length >= 4 && e.target.value.length  <= 15){
            setNome(e.target.value)
        }else{
            setNomeError(true);
            setErrorNome('O nome deve ser maior que 4 e menor que 16 caracteres!');
        }
        
    }

    function nomeErrOff(){
        setNomeError(false);
    }

    function changeSenha(e){
        //se o erro estiver desativado e o valor for diferente
        if(confirmarSenhaError === false && e.target.value !== confirmarSenha){
            setConfirmarSenhaError(true);
            setErrorConfirmarSenha('As senhas digitadas não coincidem!');
        }
        //se o valor for menor que 6
        if(e.target.value.length >= 6){
            setSenha(e.target.value);
            console.log(senha);
       
        }        
        else{
            setSenhaError(true);
            setErrorSenha('A senha deve conter mais de 6 caracteres!');
        }
        
    }

    function senhaErrOff(){
        setSenhaError(false);
        setConfirmarSenhaError(false)
    }

    function changeConfirmarSenha(e){
        if(e.target.value === senha){
            setConfirmarSenha(e.target.value)
            console.log(confirmarSenha);
        }else{
            setConfirmarSenhaError(true);
            setErrorConfirmarSenha('As senhas digitadas não coincidem!');
        }
    }

    function confirmarSenhaErrOff(){
        setConfirmarSenhaError(false);
    }

    
    return(
        <div className="content">
            <div className="config">
                <div className="tema">
                    <label>Trocar tema</label>
                    <div className="tema-options">
                        <input type="radio" name="tema" id="claro" value="claro" checked></input>
                        <label for="claro">Claro</label>
                        <input type="radio" name="tema" id="escuro" value="escuro"></input>
                        <label for="escuro">Escuro</label>
                    </div>
                </div>
                <div className="atualizar-dados">
                    <label>Alterar dados</label>
                    <form className="formulario" onSubmit={handleSalvar}>
                        <label for="nome">Nome:</label>
                        {nomeError ? (<label className="erro">{errorNome}</label>) : (<label className="erro" style={{opacity:"0"}}>{errorNome}<br/></label>)}
                        <input className="campos" onClick={nomeErrOff} onBlur={changeNome} type="text" id="nome" placeholder='Novo nome:'></input>
                        <label for="senha">Senha:</label>
                        {senhaError ? (<label className="erro">{errorSenha}</label>) : (<label className="erro" style={{opacity:"0"}}>{errorSenha}<br/></label>)}
                        <input className="campos" onClick={senhaErrOff} onBlur={changeSenha} type="password" id="senha" placeholder="Nova senha:" ></input>
                        {confirmarSenhaError ? (<label className="erro">{errorConfirmarSenha}</label>) : (<label className="erro" style={{opacity:"0"}}>{errorConfirmarSenha}<br/></label>)}
                        <input className="campos" onClick={confirmarSenhaErrOff} onBlur={changeConfirmarSenha} type="password" id="confirmarSenha" placeholder="Confirme a senha:" ></input>
                        <input className="btnalterar" type="submit" value="Alterar"></input>
                    </form>
                </div>
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-end', margin:'40px'}}>
                    <input style={{height: '40px', width: '100px'}} type="button" value="Sair" ></input>
                </div>
                
            </div>
        </div>
    )
}