import React from 'react'

const InicioAcompanhamento = () => {
    return (

        <>
            <pai className="flex flex-col ml-10 mt-4">

                <span><span className="font-semibold">Acompanhamento</span> (Hoje)</span>

                <div className="flex flex-row bg-blue-light w-2/6 rounded-md shadow-lg mt-2 justify-around items-center">

                    <pedidos className="flex flex-col items-center mt-4 mb-4 ml-2 mr-2 m-auto">
                        <span className="font-bold">2</span>
                        <span>Novos Pedidos</span>
                    </pedidos>

                    <div className="h-10 border-l-2 opacity-30" />

                    <avaliacao className="flex flex-col items-center mt-4 mb-4 ml-2 mr-2 m-auto">
                        <span className="font-bold">2.0</span>
                        <span>Avaliações</span>
                    </avaliacao>

                </div>

                <hr className="w-2/5 box mt-5 mb-2" />

            </pai>
        </>
    )
}

export default InicioAcompanhamento