import React from 'react'
import CardPedido from '../components/CardPedido';
import SidebarTecnico from "../components/SidebarTecnico";

const perfiltecnico = () => {
    return (
        <>
        <div className="flex">
            <SidebarTecnico />
            <div className="ml-5">
                <h1 className="text-blue-dark_light text-4xl font-bold">Perfil:</h1>
            </div>

        </div>
        </>
    )
}

export default perfiltecnico
