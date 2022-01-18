import { useEffect, useState } from "react";


export default function Configuracoes (){
 
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [nomeError, setNomeError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [confirmarSenhaError, setConfirmarSenhaError] = useState(false);
    const [errorNome, setErrorNome] = useState('');
    const [errorSenha, setErrorSenha] = useState('');
    const [errorConfirmarSenha, setErrorConfirmarSenha] = useState('');
    
    function handleSair(){
        
    }

    function handleSalvar(e){
        e.preventDefault()
        //verificação
        let teste = 3;
        if(nome !== '' && senha === '' && confirmarSenha === '' && nomeError === false && senhaError === false && confirmarSenhaError === false) {
            teste = 0 //alterar somente nome
        }
        if(nome === '' && senha !== '' && confirmarSenha !== '' && nomeError === false && senhaError === false && confirmarSenhaError === false) {
            teste = 1 //alterar somente senha 
        }
        if(nome !== '' && senha !== '' && confirmarSenha !== '' && nomeError === false && senhaError === false && confirmarSenhaError === false ){
            teste = 2 //alterar os dois
        }
        switch (teste) {
            case 0:
                alert("comming soon...");
                break;
            case 1:
                alert("comming soon...");
                break;
            case 2:
                alert("comming soon...");
                break;
            case 3:
                alert("campos incorretos!");
                break;

        }
        

        //     //salva os dados no banco
        //     //altera os dados da sessão tambem
        //     //talvez tenha que dar reload no dashboard
        //     alert("comming soon...");
        // }else{
        //     alert("campos incorretos!");
        // }
        

    }

    function changeNome(e){   
        setNome(e.target.value);
    }

    useEffect(()=> {
        if(nome !== ''){
            if(nome.length >= 4 && nome.length <= 15){
                setNomeError(false);
            }else{
                setNomeError(true);
                if(nome.length <= 15){
                    setErrorNome('O nome deve ser maior que 4 caracteres!');
                }
                if(nome.length >= 4){
                    setErrorNome('O nome deve ser menor que 16 caracteres!');
                }
            }
        }
    },[nome])


    

    function changeSenha(e){
        setSenha(e.target.value);        
    }

    useEffect(()=> {
        if(senha !== ''){
            if(senha.length >= 6){
                setSenhaError(false);
            }else{
                setSenhaError(true);
                setErrorSenha('A senha deve conter pelo menos 6 caracteres!');
            }
            if(confirmarSenha === senha || confirmarSenha === ''){
                setConfirmarSenhaError(false);
            }else{
                setConfirmarSenhaError(true);
                setErrorConfirmarSenha('As senhas digitadas não coincidem!');
            }
        }else{
            setSenhaError(false)
        }
    },[senha])



    function changeConfirmarSenha(e){
        setConfirmarSenha(e.target.value);
    }

    useEffect(()=> {
        if(confirmarSenha !== ''){
            if(confirmarSenha === senha){
                setConfirmarSenhaError(false);
            }else{
                setConfirmarSenhaError(true);
                setErrorConfirmarSenha('As senhas digitadas não coincidem!');
            }
        }else{
            setConfirmarSenhaError(false)
        }
    },[confirmarSenha])

    
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
                        <input className="campos" onBlur={changeNome} type="text" id="nome" placeholder='Novo nome:'></input>
                        <label for="senha">Senha:</label>
                        {senhaError ? (<label className="erro">{errorSenha}</label>) : (<label className="erro" style={{opacity:"0"}}>{errorSenha}<br/></label>)}
                        <input className="campos" onBlur={changeSenha} type="password" id="senha" placeholder="Nova senha:" ></input>
                        {confirmarSenhaError ? (<label className="erro">{errorConfirmarSenha}</label>) : (<label className="erro" style={{opacity:"0"}}>{errorConfirmarSenha}<br/></label>)}
                        <input className="campos" onBlur={changeConfirmarSenha} type="password" id="confirmarSenha" placeholder="Confirme a senha:" ></input>
                        <input className="btnalterar" type="submit" value="Alterar"></input>
                    </form>
                </div>
                <div className="sair">
                    <input className="btnsair" type="button" value="Sair" onClick={handleSair} ></input>
                </div>
                
            </div>
        </div>
    )
}