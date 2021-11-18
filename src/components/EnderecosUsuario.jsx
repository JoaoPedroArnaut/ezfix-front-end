import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import Botao from './Botao'
import CardEndereco from './CardEndereco'
import { SessaoContext } from '../contexts/Sessao'

const EnderecosUsuario = ({ setNovoEndereco }) => {

    const { user } = useContext(SessaoContext)
    const [contador, setContador] = useState(0)
    const [enderecos, setEnderecos] = useState([]);

    useEffect(() => {
        setContador(contador + 1)
        if (contador > 1) {
            setEnderecos(user.enderecoEspecificos)
        }
    }, [user])
    
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Endereços</span>
                <div className="w-6/12 mt-5 flex flex-col items-center ">
                    {contador > 1 && enderecos.map((endereco, i) =>
                        <CardEndereco index={i+1} logradouro={endereco.enderecoGeral.logradouro} numero={endereco.numero} estado={endereco.enderecoGeral.estado} cidade={endereco.enderecoGeral.cidade} cep={endereco.enderecoGeral.cep} />
                    )}
                    <img src="./plus-circle.png" alt="adcionar" width="100px" onClick={() => setNovoEndereco(true)} />
                </div>
            </div>
        </>
    )
}

export default EnderecosUsuario
