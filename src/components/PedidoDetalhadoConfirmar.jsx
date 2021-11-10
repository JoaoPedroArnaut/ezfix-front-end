import React, { useState } from 'react'
import Botao from './Botao'
import { useRouter } from 'next/router';

const PedidoDetalhadoConfirmar = () => {

    const [confirmacao, setConfirmacao] = useState(false);
    const router = useRouter();
    const [cancelado, setCancelado] = useState(false);

    return (
        <>
            <div className="w-full mb-10 flex justify-around">
                <div className="sm:w-4/5 flex flex-col mt-8">
                    <div className="w-full bg-gray-light rounded-2xl p-10 font-semibold">
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
                                <span>R$345,00</span>
                            </div>
                            <div className=" flex justify-between w-full">
                                <span>Notebook Acer Aspire 5</span>
                                <span>R$450,00</span>
                            </div>
                        </div>
                        <hr />
                        <div className="pt-6 pb-6 text-gray-dark">
                            <div className=" flex justify-between w-full">
                                <span>Subtotal</span>
                                <span>R$795,00</span>
                            </div>
                            <div className=" flex justify-between w-full">
                                <span>Frete</span>
                                <span className="text-green">Grátis</span>
                            </div>
                        </div>
                        <hr />
                        <div >
                            <div className=" flex justify-between w-full text-2xl pt-6">
                                <span>Total</span>
                                <span>R$795,00</span>
                            </div>
                            <div className="flex w-full justify-between mt-5">
                                <div className="flex">
                                    <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                                    <p> Aguardando sua resposta</p>
                                </div>

                                <div className="flex w-1/5 justify-between">
                                    <Botao estilo={4} text="Recusar" onClick={() => setConfirmacao(true)} />
                                    <Botao estilo={8} text="Aceitar" />
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                {confirmacao &&
                    <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                        <div className="w-full h-screen flex justify-center items-center">
                            <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                                <img src={cancelado ? "./confirmed.png" : "./warning.png"} alt="imgConfirmed" width="100px" />
                                {cancelado ?
                                    <p className="mt-5 mb-16 text-2xl font-semibold">Oferta recusada.</p>
                                    : <p className="mt-5 mb-16 text-2xl font-semibold">Tem certeza que deseja recusar a oferta?</p>
                                }
                                <div className="w-full flex justify-around">
                                    {cancelado ?
                                        <>
                                            <Botao estilo={8} text="OK!" onClick={() => router.push("./myorders")} />
                                        </>
                                        : <>
                                            <Botao estilo={4} text="Cancelar" onClick={() => setConfirmacao(false)} />
                                            <Botao estilo={8} text="Confirmar" onClick={() => setCancelado(true)} />
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default PedidoDetalhadoConfirmar
