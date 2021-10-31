import React from 'react'
import BotaoForm from './BotaoForm'
import Input from './Input'

const FormDadosPessoais = ({trocaPg}) => {
    
    function handleSubmit(e) {
        e.preventDefault();
        trocaPg("Endereço")
        console.log("bbbbbbbbb");
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input id="nome" label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
            <Input label="CPF" placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
            <Input label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
            <Input label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
            <Input label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
            <BotaoForm text="avançar" />
        </form>
    )
}

export default FormDadosPessoais
