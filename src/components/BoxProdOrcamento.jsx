import React from 'react'

const BoxProdOrcamento = () => {
    return (
        <div className="bg-blue-light_dark rounded-2xl p-4 flex w-full justify-between my-3 shadow-lg">
            <div className="w-45">

                <div className="flex mb-1">
                    <b className="mr-2">Smartphone</b>
                    <span className="ml-2">Xiaomi Redmi Note 8</span>
                </div>
                <p className="mb-1 text-gray-dark">Tela Quebrada</p>
                <p>Acabei derrubando o meu celular no chão e quando fui pegar
                    a tela dele estava rachada, ele funciona normalmente
                    apenas a tela que precisa ser trocada.</p>
            </div>
            <div className="flex items-center flex-col justify-center">
                <b className="text-blue-dark_light mb-2">Valor do reparo estimado</b>
                <div className="flex items-center mt-2">
                <input placeholder="Ex: 750,54" type="text" className="p-3 rounded-xl mr-1" /> <button className="p-3 rounded-xl bg-blue-dark text-white ml-1">Ok</button>
                </div>
            </div>
        </div>
    )
}

export default BoxProdOrcamento