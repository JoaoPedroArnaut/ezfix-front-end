import React from 'react'

const PedidoDetalhado = () => {

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
                                    <span>#ABJ43892</span>
                                </div>
                            </div>
                            <img src="/ThTecnologiaLogo.jpg" alt="ThTecnologia" className="rounded-full w-32 h-32" />
                        </div>
                        <hr />
                        <div className="pt-9 pb-9">
                            <ul>
                                <li className="mb-3">
                                    Xiaomi Redmi Note 8 - <b>Tela quebrada</b>
                                    <p className="text-gray-dark">Derrubei o celular no chão e quebrou sozinho</p>
                                </li>
                                <li>
                                    Notebook Acer Nitro 5 Aspire - <b>Não liga</b>
                                    <p className="text-gray-dark">Não ta ligando</p>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="pt-6 pb-6  text-gray-dark">
                            <div className=" flex justify-between w-full">
                                <span>Xiaomi Redmi Note 8</span>
                            </div>
                            <div className=" flex justify-between w-full">
                                <span>Notebook Acer Aspire 5</span>
                            </div>
                        </div>
                        <hr />

                    </div>

                </div>

            </div>
        </>
    )
}

export default PedidoDetalhado
