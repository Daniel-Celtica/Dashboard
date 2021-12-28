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
    const [error, setError] = useState('');


    function handleSalvar(e){
        e.preventDefault()

    }

    function changeNome(e){
        if(e.target.value.length >= 4 && e.target.value.length  <= 15){
            setNome(e.target.value)
        }else{
            setNomeError(true);
            setError('O nome deve ser maior que 4 caracteres e menor que 16');
        }
        
    }

    function changeSenha(e){
        if(e.target.value.length >= 6){
            setSenha(e.target.value)
            console.log(senha);
        }
        
    }

    function changeConfirmarSenha(e){
        if(e.target.value === senha){
            setConfirmarSenha(e.target.value)
            console.log(confirmarSenha);
        }else{

        }
    }

    
    return(
        <div className="content">
            <div className="soon">
                <div style={{display:'flex', flexDirection:'column', margin:'40px',  borderBottom: 'solid 1px #C7D2D4' }}>
                    <label style={{fontSize:'24px'}}>Trocar tema</label>
                    <div style={{display:'flex', flexDirection:'row', margin:'20px'}}>
                        <input type="radio" name="tema" id="claro" value="claro" checked></input>
                        <label style={{fontSize:'18px', marginRight: '10px'}} for="claro">Claro</label>
                        <input type="radio" name="tema" id="escuro" value="escuro"></input>
                        <label style={{fontSize:'18px'}} for="escuro">Escuro</label>
                    </div>
                    
                </div>
                <div style={{display:'flex', flexDirection:'column', margin:'40px', alignItems: 'flex-start', borderBottom: 'solid 1px #C7D2D4'}}>
                    <label style={{fontSize:'24px'}}>Alterar dados</label>
                    <form onSubmit={handleSalvar} style={{display:'flex', flexDirection:'column', margin:'20px'}}>
                        <label for="nome" style={{fontSize:'18px'}}>Nome:</label>
                        <input onBlur={changeNome} style={{marginBottom:"20px", height: '30px', width: '50vw'}} type="text" id="nome" placeholder='Novo nome:'></input>
                        {nomeError ? (<label style={{fontSize: '12px', color: 'red'}}>{error}</label>) : (null)}
                        <label for="senha" style={{fontSize:'18px'}}>Senha:</label>
                        <input onBlur={changeSenha} style={{marginBottom:"20px", height: '30px', width: '50vw'}} type="password" id="senha" placeholder="Nova senha:" ></input>
                        <input onBlur={changeConfirmarSenha} style={{marginBottom:"20px", height: '30px', width: '50vw'}} type="password" id="confirmarSenha" placeholder="Confirme a senha:" ></input>
                        <input style={{marginBottom:"20px", alignSelf:'center', height: '40px', width: '150px'}} type="submit" value="Salvar"></input>
                    </form>
                </div>
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-end', margin:'40px'}}>
                    <input style={{height: '40px', width: '100px'}} type="button" value="Sair" ></input>
                </div>
                
            </div>
        </div>
    )
}