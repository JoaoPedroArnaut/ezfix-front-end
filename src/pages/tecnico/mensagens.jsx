import React from 'react'
import SidebarTecnico from '../../components/SidebarTecnico'

const mensagens = () => {
    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="ml-20 w-full">
                    <h1 className="text-blue-dark_light text-4xl font-bold mt-10">Perfil:</h1>
                    <div className="bg-blue-light mt-5 p-14 w-11/12 flex rounded-2xl filter shadow-inner drop-shadow-2xl  ">

                    </div>
                </div>
            </div>
        </>
    )
}

export default mensagens
