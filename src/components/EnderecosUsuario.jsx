import React from 'react'
import Input from './Input'
import Botao from './Botao'
import CardEndereco from './CardEndereco'

const EnderecosUsuario = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Endereços</span>
                <div className="w-6/12 mt-5 flex flex-col items-center ">
                    <CardEndereco/>
                    <img src="./plus-circle.png" alt="adcionar" width="100px" />
                </div>
            </div>
        </>
    )
}

export default EnderecosUsuario
