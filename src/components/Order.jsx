import React from 'react'
import CardPedido from '../components/CardPedido'


const Order = ({ assistencia, imagem }) => {
    

    return (
        <>
            <div className="w-full h-screen flex justify-around">
                <div className="sm:w-4/5 flex flex-col mt-8">
                    <CardPedido imagem={imagem} assistencia={assistencia}/>
                </div>
            </div>
        </>
    )
}

export default Order
