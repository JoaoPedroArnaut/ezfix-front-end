import React from 'react'

const InicioUltimasAvaliacoes = () => {
    return (
        <>
            <pai className="min-h-screen flex flex-col ml-10 mt-5">

                <span className="font-semibold">Ultimas Avaliações</span>

                <div className="flex flex-col bg-blue-light w-2/4 rounded-md shadow-lg mt-2 justify-around">
                    <avaliacao className="flex flex-row items-center mt-4 mb-4 ml-5">
                        <img src="/PerfilUsuario.jpeg" alt="" className="rounded-full w-16 h-16" />

                        <div className="h-8 border-l-2 mr-4 ml-4 opacity-30" />

                        <div className="flex flex-col">

                            <div className="flex flex-row items-center">
                                <span className="font-bold">Italo Souza</span>
                                <img src="/star.png" alt="" className="w-4 h-4 ml-5 mr-1" />
                                <span className="font-semibold">4.5</span>
                            </div>

                            <div className="w-max break-all mt-2 mb-1 p-2 rounded-tl-none bg-white rounded-2xl shadow-lg">
                                <span>"Sou gay mas moro em Belém do Para"</span>
                            </div>

                        </div>

                    </avaliacao>

                </div>

            </pai>
        </>
    )
}

export default InicioUltimasAvaliacoes