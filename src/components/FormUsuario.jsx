import React from 'react'
import BotaoForm from './BotaoForm'
import Input from './Input'

const FormUsuario = ({trocaPg}) => {

    function handleSubmit(e) {
        e.preventDefault();
        trocaPg("Dados Pessoais")
        console.log("cccccccc");
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input id="teste" onChange={e => { setTeste(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <Input label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <BotaoForm text="avançar" />
        </form>
    )
}

export default FormUsuario
