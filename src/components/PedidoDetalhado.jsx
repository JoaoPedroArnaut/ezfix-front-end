import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';

const PedidoDetalhado = ({ id, itens,status }) => {

    const [carregado, setCarregado] = useState(false)


    useEffect(() => {
        console.log(itens);
        if (itens != undefined) {
            setCarregado(true)
        }
    }, [itens])

    if (carregado) {
        return (
            <>
                <div className="w-full mb-10 flex justify-around">
                    <div className="sm:w-4/5 flex flex-col mt-8">
                        <div className="w-full bg-gray-light rounded-2xl p-10 font-semibold pb-96">
                            <div className="flex justify-between w-full pb-9 ">
                                <div className="flex justify-between items-center w-6/12">
                                    <div className="flex flex-col">
                                        <span>Data do Pedido</span>
                                        <span>03/10/2021</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Entrega Pevista</span>
                                        <span>12/10/2021</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Código do Pedido</span>
                                        <span>#{id}</span>
                                    </div>
                                </div>
                                <img src="/ThTecnologiaLogo.jpg" alt="ThTecnologia" className="rounded-full w-32 h-32" />
                            </div>

                            <div className="pt-9 pb-9">

                                <ul>
                                    {itens.map((item, i) =>
                                    (<li key={i}>
                                        <hr />
                                        <div className="my-10">
                                            {item.produto.tipo} {item.produto.marca} {item.produto.modelo} - <b>{item.problema}</b>
                                            <p className="text-gray-dark">{item.descricao}</p>
                                        </div>
                                        <hr />
                                    </li>)
                                    )}
                                </ul>
                            </div>
                            <div className="flex">
                                <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                                <p> {status}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <Carregamento />
            </>
        )
    }
}

export default PedidoDetalhado
