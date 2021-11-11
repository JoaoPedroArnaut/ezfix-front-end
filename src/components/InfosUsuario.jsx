import React from 'react'
import Botao from './Botao'
import DadosContaUsuario from './DadosContaUsuario'
import DadosPessoaisUsuario from './DadosPessoaisUsuario'
import EnderecosUsuario from './EnderecosUsuario'

const InfosUsuario = () => {
    return (
        <>
            <div className="w-full flex justify-around">
                <div className="sm:w-4/5 mt-8 mb-20 p-10 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl">
                    <div className="flex mb-10">
                        <img src="./PerfilUsuario.jpeg" alt="img" width="160px" className="rounded-full" />
                        <div className="ml-8 text-3xl font-bold flex flex-col">
                            <span>Ítalo de Souza</span>
                            <div className="text-base mt-16">
                            <Botao text="Mudar Imagem" estilo={7}/>
                            </div>
                        </div>
                    </div>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <DadosContaUsuario/>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <DadosPessoaisUsuario/>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <EnderecosUsuario/>
                </div>

            </div>
        </>
    )
}

export default InfosUsuario
