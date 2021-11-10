import React from 'react'

const MenuOpcoes = () => {
    return (
        <>
            <div className="bg-blue-dark_light w-12 h-44 z-10 top-24 left-3/4 right-20 bottom-0 absolute p-3 rounded-b-2xl">
                            <div className="text-white font-bold leading-10">
                                <ul>
                                    <li className=" hover:text-blue-light">Pedidos</li>
                                    <li className=" hover:text-blue-light">Perfil</li>
                                    <li className=" hover:text-blue-light">Ajuda</li>
                                    <hr className="text text-gray" />
                                    <li className=" hover:text-blue-light">Sair</li>
                                </ul>
                            </div>
                        </div>
        </>
    )
}

export default MenuOpcoes
