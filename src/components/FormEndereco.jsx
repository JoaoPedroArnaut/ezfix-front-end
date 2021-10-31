import React, { useState } from 'react'
import BotaoForm from './BotaoForm';
import ComboBox from './ComboBox';
import Input from './Input';

const FormEndereco = ({enviar}) => {

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        enviar({cep,logradouro,numero,complemento,cidade,estado})
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input value={cep} onChange={e => { setCep(e.target.value) }} label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-2/12" />
            <div className="w-45 "></div>

            <Input value={logradouro} onChange={e => { setLogradouro(e.target.value) }} label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-10/12" />
            <Input value={numero} onChange={e => { setNumero(e.target.value) }} label="Número" placeholder="1500" alternativo={true} size="w-12" />
            <Input value={complemento} onChange={e => { setComplemento(e.target.value) }} label="Complemento" placeholder="casa 1" alternativo={true} size="w-full" />
            <div className="w-2/5 flex justify-between">
                <Input value={cidade} onChange={e => { setCidade(e.target.value) }} label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-6/12" />
                <div className="w-2/5">
                    <Input value={estado} onChange={e => { setEstado(e.target.value) }} label="Estado" placeholder="sp" alternativo={true} size="w-6/12" />
                </div>
            </div>
            <BotaoForm onClick={() => {}} text="enviar" />
        </form>
    )
}

export default FormEndereco
