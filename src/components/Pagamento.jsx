import React, { useState } from 'react'
import Botao from './Botao'
import { useRouter } from 'next/router';

const Pagamento = () => {

    const [lalamove, setSection] = useState(false);
    const [confirmacao, setConfirmacao] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="w-full mb-15 flex justify-around">
                <div className="sm:w-4/5 flex justify-between mt-8">
                    <div className="w-7/12 bg-blue-light rounded-2xl p-10 font-semibold">
                        <div className="h-14 w-full bg-white flex justify-start items-center p-2 rounded-2xl">
                            <input onClick={() => setSection(true)} type="radio" color="black" name="formPag" className="h-9 w-9 mr-3" />
                            <img src="./lalamoveLogo.png" alt="lalamoveLogo" className="mr-3" />
                            <p>Entrega e recebimento com a Lalamove</p>
                        </div>
                        <div className="h-14 w-full bg-white flex justify-start items-center mt-8 p-2 rounded-2xl">
                            <input onClick={() => setSection(false)} type="radio" color="black" name="formPag" className="h-9 w-9 mr-3" />
                            <img src="./Walking.png" alt="imgAnd" className="mr-3" />
                            <p>Levar e retirar com a assistência</p>
                        </div>
                        <div className={lalamove ? "block" : "hidden"}>
                            <div className="mt-8">
                                <span className="font-semibold text-xl">Confirme o seu endereço</span>
                                <div className="h-14 w-full bg-white flex justify-between items-center px-4 rounded-2xl mt-2">
                                    <input type="text" value="Rua Osvaldo Cruz, 78 - Vila Prudente" className="text-gray-dark w-4/5" />
                                    <img src="./Edit.png" alt="Editar" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-end">
                            <div className="flex flex-col justify-center items-center">
                                <Botao estilo={8} text="Finalizar" onClick={() => setConfirmacao(true)} />
                                <span className="text-xs mt-2 text-gray-dark">Pagamento via</span>
                                <img src="mercado-pago-logo.png" alt="Mercado Pago" width="120px" className="mt-2" />

                            </div>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="rounded-2xl p-3 bg-blue-light">
                            <p className="font-semibold text-xl">Resumo do Pedido</p>
                            <div className="text-gray-dark">
                                <div className="flex justify-between mt-1 mb-1">
                                    <span>Smartphone Redmi note 8</span>
                                    <span>R$345,00</span>
                                </div>
                                <div className="flex justify-between mt-1 mb-1">
                                    <span>Smartphone Redmi note 8</span>
                                    <span>R$450,00</span>
                                </div>
                                <hr />
                                <div className="flex justify-between mt-1 mb-1">
                                    <span>Taxa de Entrega</span>
                                    <span className="text-green">Grátis</span>
                                </div>
                                <div className="flex justify-between mt-1 mb-1">
                                    <span>Taxa</span>
                                    <span>R$12,00</span>
                                </div>
                                <hr />
                                <div className="flex justify-between text-black font-semibold mt-2">
                                    <span>Total</span>
                                    <span>R$807,00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {confirmacao &&
                    <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                        <div className="w-full h-screen flex justify-center items-center">
                            <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                                <img src="./confirmed.png" alt="imgConfirmed" width="100px" />
                                <p className="mt-5 text-2xl font-semibold">Pagamento efetuado com sucesso!</p>
                                <p className="mb-16">Será enviado um comprovante pelo e-mail.</p>
                                <Botao text="OK!" estilo={8} onClick={() => router.push("./myorders")} />
                            </div>
                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default Pagamento
