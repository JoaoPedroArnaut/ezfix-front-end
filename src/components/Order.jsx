import React from 'react'
import Botao from '../components/Botao'
import { faBullhorn, faCommentDots, faSearchPlus } from '@fortawesome/free-solid-svg-icons'


const Order = ({ assistencia, imagem }) => {
    return (
        <>
            <div className="w-full h-screen flex justify-around">
                <div className="sm:w-4/5 flex flex-col mt-8">
                    <div className="w-full h-52 flex bg-blue-light rounded-t-2xl items-center p-14">
                        <img src={imagem} alt="ThTecnologia" className="rounded-full w-32 h-32" />
                        <div className="flex flex-col justify-center w-2/6 ml-10">
                            <p className="text-4xl font-bold">{assistencia}</p>
                            <div className="flex mt-1">
                                <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                                <p> Aguardando sua resposta</p>
                            </div>
                        </div>
                        <div className="h-32 border-l-2 ali"></div>
                        <div className=" pl-4 flex justify-between items-center w-3/5 list-none">
                            <u className="no-underline">
                                <li>Notebook Acer Nitro Aspire 5</li>
                                <li>Xiaomi Redmi note 8</li>
                            </u>
                            <button className="rounded-2xl p-3 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-xl font-bold">Confirmar</button>
                        </div>


                    </div>
                    <div className="w-full h-24 bg-blue-dark rounded-b-2xl flex justify-between items-center px-8">
<<<<<<< HEAD
                        <Botao estilo={2} text="Detalhes" icone={faSearchPlus}  />
                        <div className="flex justify-between w-2/6">
                            <Botao estilo={2} text="Conversa" icone={faCommentDots}/>
                            <Botao estilo={2} text="Conversa" icone={faBullhorn}/>
=======
                        <Botao text="Detalhes" icone={faSearchPlus}  />
                        <div className="flex justify-between w-2/6">
                            <Botao text="Conversa" icone={faCommentDots}/>
                            <Botao text="Conversa" icone={faBullhorn}/>
>>>>>>> origin/main


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Order
