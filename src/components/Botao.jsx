import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Botao = ({ estilo, icone, text, onClick }) => {

    const botao = [
        <button className="bg-blue w-full xl:w-60 xl:h-14 lg:w-56 lg:h-12 xl:text-lg sm:w-48 font-medium min-w-min p-2 sm:rounded-md hover:text-blue hover:bg-blue-light duration-75">{text}</button>,

        //Botão usado no componente Order
            <button onClick={onClick} className="rounded-3xl px-6 py-2  bg-blue w-52 text-white text-xl flex justify-around items-center hover:text-blue hover:bg-blue-light duration-75">
                <FontAwesomeIcon icon={icone} />{text}</button>,
        
        //Botão usado no FormProduto e NavBar
        <button onClick={onClick} className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75">{text}</button>,

        //Botão do componente HeaderOrder
        <button className="rounded-3xl px-5 py-2 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-2xl font-bold flex justify-around items-center">
            <FontAwesomeIcon icon={icone} />{text}</button>,

        //Botão de recusa do componente PedidoDetalhado
        <button className="bg-red w-32 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75">{text}</button>,

                <button className="bg-blue-dark w-32 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" onClick={onClick}>{text}</button>
    ]

    return botao[estilo];

}

export default Botao
