import React, { useState } from 'react'
import BotaoForm from './BotaoForm'
import Input from './Input'

const FormUsuario = ({trocaPg,enviar}) => {

    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmSenha,setConfirmSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        enviar({email,senha})
        trocaPg("Dados Pessoais")
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <Input value={confirmSenha} onChange={e => { setConfirmSenha(e.target.value) }} label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <BotaoForm text="avançar" />
        </form>
    )
}

export default FormUsuario
