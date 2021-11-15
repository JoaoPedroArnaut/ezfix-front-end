import React, {useContext, useState} from 'react'
import Input from './Input'
import Botao from './Botao'
import { SessaoContext } from '../contexts/Sessao'

const DadosPessoaisUsuario = () => {
  
    const [telPrimario, setTelPrimario] = useState('')
    const [telSecundario, setTelSecundario] = useState('')

    const {user} = useContext(SessaoContext)

    function mascaraTel(v, set) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        set(v)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Dados Pessoais</span>
                <div className="w-6/12 mt-5">
                    <Input label="Nome Completo" placeholder="italou@live.com" alternativo={true} size="w-full" />
                    <Input value={user.cpf} disabled="true" label="CPF" onChange={e => { mascaraCpf(e.target.value, setCPF) }} placeholder="229.846.518-55" alternativo={true} size="w-full" />
                    <Input value={telPrimario} label="Telefone Primário" onChange={e => { mascaraTel(e.target.value, setTelPrimario) }} placeholder="(11)95156-2574" alternativo={true} size="w-full" />
                    <Input value={telSecundario} label="Telefone Alternativo" onChange={e => { mascaraTel(e.target.value, setTelSecundario) }} placeholder="(11)97417-6582" alternativo={true} size="w-full" />
                    <div className="mt-8 flex justify-end">
                    <Botao estilo={8} text="Atualizar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DadosPessoaisUsuario
