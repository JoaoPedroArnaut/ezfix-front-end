import React from 'react'
import Input from './Input'
import Botao from './Botao'

const DadosContaUsuario = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Dados da Conta</span>
                <div className="w-6/12 mt-5">
                    <Input label="Email" placeholder="italou@live.com" alternativo={true} size="w-full" />
                    <Input label="Senha atual" alternativo={true} size="w-full" type="password" />
                    <Input label="Nova senha" placeholder="**********" alternativo={true} size="w-full" type="password" />
                    <Input label="Repetir senha" placeholder="**********" alternativo={true} size="w-full" type="password" />
                    <div className="mt-8 flex justify-end">
                    <Botao estilo={8} text="Atualizar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DadosContaUsuario
