/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import Botao from './Botao'
import { SessaoContext } from '../contexts/Sessao'
import { ValidacoesContext } from '../contexts/Validacoes'
import Erros from './Erros'
import { api } from '../api/api'
import Sucesso from './Sucesso'
import { useRouter } from 'next/router'

const DadosPessoaisUsuario = ({nome,telefonePrimario,telefoneSecundario,cpf}) => {

    const [nomeAtual, setNome] = useState("")
    const [telPrimario, setTelPrimario] = useState('')
    const [telSecundario, setTelSecundario] = useState('')
    const [msg, setMsg] = useState("")
    const router = useRouter();

    useEffect(() => {
            setNome(nome)
            setTelPrimario(mascaraTel(telefonePrimario))
            setTelSecundario(mascaraTel(telefoneSecundario))
    }, [])


    function mascaraTel(v, set) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        return v;
    }
    function mascaraCpf(v) {
        if (v == null) {
            return;
        }
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        return v;
    }




    function handleChanges(e) {
        e.preventDefault();
        if(validaAttDadosPessoais(user,{nome,telPrimario,telSecundario})){
            api.put(`/solicitante/${user.cpf}`,{
                "nome":nome,
                "telefonePrimario":telPrimario,
                "telefoneSecundario":telSecundario
            }).then(res => {
                if(res.status == 200){
                    setMsg("dado atualizado com sucesso")
                }
            },err => {
                setErros(["Algun erro inesperado aconteceu tente novamente mais tarde"])
            })
        }else{
            setMsg("")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Dados Pessoais</span>
                <form className="w-6/12 mt-5" onSubmit={handleChanges}>
                    <Sucesso msg={msg}/>
                    {/* <Erros erros={erros} /> */}
                    <Input value={nomeAtual} onChange={e => setNome(e.target.value)} label="Nome Completo" placeholder="seu@email.com" alternativo={true} size="w-full" />
                    <Input value={mascaraCpf(cpf)} disabled="true" label="CPF" onChange={e => { mascaraCpf(e.target.value, setCPF) }} placeholder="229.846.518-55" alternativo={true} size="w-full" />
                    <Input maxLength={15} value={telPrimario} label="Telefone Primário" onChange={e => { setTelPrimario(mascaraTel(e.target.value)) }} placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-full" />
                    <Input maxLength={15} value={telSecundario} label="Telefone Alternativo" onChange={e => { setTelSecundario(mascaraTel(e.target.value)) }} placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-full" />
                    <div className="mt-8 flex justify-end">
                        <Botao estilo={8} text="Atualizar" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default DadosPessoaisUsuario
