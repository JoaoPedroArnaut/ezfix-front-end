import React, { useContext, useEffect, useState } from 'react'
import {CadastroContext} from '../contexts/Cadastro';
import { ValidacoesContext } from '../contexts/Validacoes';
import BotaoForm from './BotaoForm'
import Erros from './Erros';
import Input from './Input'

const FormUsuario = () => {

    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmSenha,setConfirmSenha] = useState("");

    const {enviar,trocaPg} = useContext(CadastroContext)
    const { validaUsuario,erros } = useContext(ValidacoesContext)

    useEffect(() => {console.log(erros);} ,[erros])

    function teste(){
        validaUsuario({email,senha,confirmSenha})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(validaUsuario({email,senha,confirmSenha})){
            enviar({email,senha})
            trocaPg("Dados Pessoais")
        }
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Erros erros={erros}/>
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <Input value={confirmSenha} onChange={e => { setConfirmSenha(e.target.value) }} label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <BotaoForm text="avançar" />
        </form>
    )
}

export default FormUsuario
