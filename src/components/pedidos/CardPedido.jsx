/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { faBullhorn, faCommentDots, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import Botao from '../Botao'
import { useRouter } from 'next/router';

const CardPedido = ({ id, assistencia, status, itens, idPedido }) => {

    const router = useRouter();

    function teste() {
        if (itens.length < 2) {
            return (<div>
                <p>{itens[0].marca} {itens[0].modelo}</p>
            </div>)
        } else if (itens.length == 2) {
            return (<div>
                <p>{itens[0].marca} {itens[0].modelo}</p>
                <p>{itens[1].marca} {itens[1].modelo}</p>
            </div>)
        } else {
            return (<div>
                <p>{itens[0].marca} {itens[0].modelo}</p>
                <p>{itens[1].marca} {itens[1].modelo}</p>
                <p>...</p>
            </div>)
        }

    }

    return (
        <>
            <div className="w-full h-52 flex bg-blue-light rounded-t-2xl items-center p-14">
                <img src={`http://52.67.126.2:8080/assistencia/perfil/${id}`} alt="ThTecnologia" className="rounded-full w-32 h-32" />
                <div className="flex flex-col justify-center w-2/6 ml-10">
                    <p className="text-4xl font-bold">{assistencia}</p>
                    <div className="flex mt-1">
                        <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="h-32 border-l-2 ali"></div>
                <div className=" pl-4 flex justify-between items-center w-3/5 list-none">
                    <div className="max-h-24 overflow-y-auto">
                        {itens.map((item, index) => <p key={index} className="mr-4">{item.marca} {item.modelo}</p>)}
                    </div>
                    {status == "aguardando sua resposta" && <button className="rounded-2xl p-3 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-xl font-bold" onClick={() => { router.push(`/detalhespedido?${idPedido}`) }}>Confirmar</button>}                        </div>


            </div>
            <div className="w-full h-24 bg-blue-dark rounded-b-2xl flex justify-between items-center px-8 mb-16">
                <Botao onClick={() => { router.push(`/detalhespedido?${idPedido}`) }} estilo={1} text="Detalhes" icone={faSearchPlus} />
                <div className="flex justify-between w-2/6">
                    <Botao estilo={1} text="Conversa" icone={faCommentDots} />
                    <Botao estilo={1} text="Ajuda" icone={faBullhorn} />
                </div>
            </div>
        </>
    )
}

export default CardPedido
