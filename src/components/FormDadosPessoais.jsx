import React, { useContext, useState } from 'react'
import { CadastroContext } from '../contexts/Cadastro'
import BotaoForm from './BotaoForm'
import Input from './Input'

const FormDadosPessoais = () => {
    
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [telPrimario, setTelPrimario] = useState('')
    const [telSecundario, setTelSecundario] = useState('')

    const {enviar,trocaPg} = useContext(CadastroContext)

    function handleSubmit(e) {
        e.preventDefault();
        enviar({nome,cpf,dataNasc,telPrimario,telSecundario})
        trocaPg("Endereço")
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input value={nome} onChange={e => { setNome(e.target.value) }} label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
            <Input value={cpf} onChange={e => { setCPF(e.target.value) }} label="CPF" placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
            <Input value={dataNasc} onChange={e => { setDataNasc(e.target.value) }} type="date" label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
            <Input value={telPrimario} onChange={e => { setTelPrimario(e.target.value) }} label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
            <Input value={telSecundario} onChange={e => { setTelSecundario(e.target.value) }} label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
            <BotaoForm text="avançar" />
        </form>
    )
}

export default FormDadosPessoais
