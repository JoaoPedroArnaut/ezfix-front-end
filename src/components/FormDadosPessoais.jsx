import React, { useContext, useEffect, useState } from 'react'
import { CadastroContext } from '../contexts/Cadastro'
import { ValidacoesContext } from '../contexts/Validacoes'
import BotaoForm from './BotaoForm'
import Erros from './Erros';
import Input from './Input'

const FormDadosPessoais = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [telPrimario, setTelPrimario] = useState('')
    const [telSecundario, setTelSecundario] = useState('')

    const { enviar, trocaPg, voltar, form } = useContext(CadastroContext)
    const { validaDadosPessoais, erros, setErros } = useContext(ValidacoesContext)

    useEffect(() => {
        for(let i in form){
            if(i == "nome"){
                setNome(form[i])
            }else if(i == "cpf"){
                setCPF(form[i])
            }else if(i == "dataNasc"){
                setDataNasc(form[i])
            }else if(i == "telPrimario"){
                setTelPrimario(form[i])
            }else if(i == "telSecundario"){
                setTelSecundario(form[i])
            }
        }
    },[])

    function handleSubmit(e) {
        e.preventDefault();
        if (validaDadosPessoais({ nome, cpf, dataNasc, telPrimario, telSecundario })) {
            enviar({ nome, cpf, dataNasc, telPrimario, telSecundario })
            trocaPg("Endereço")
        }

    }

    function mascaraTel(v, set) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        set(v)
    }

    function mascaraCpf(v, set) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        set(v)
    }

    return (
        <>
            <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
                <Erros erros={erros} />
                <Input value={nome} onChange={e => { setNome(e.target.value) }} label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
                <Input maxLength="14" value={cpf} onChange={e => { mascaraCpf(e.target.value, setCPF) }} label="CPF" placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
                <Input maxLength="8" value={dataNasc} onChange={e => { setDataNasc(e.target.value) }} type="date" label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
                <Input maxLength="15" value={telPrimario} onChange={e => { mascaraTel(e.target.value, setTelPrimario) }} label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                <Input maxLength="15" value={telSecundario} onChange={e => { mascaraTel(e.target.value, setTelSecundario) }} label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Do Usuario",{ nome, cpf, dataNasc, telPrimario, telSecundario }) }} text="voltar" />
                <BotaoForm size="45" type="submit" text="avançar" />
            </form>

        </>
    )
}

export default FormDadosPessoais
