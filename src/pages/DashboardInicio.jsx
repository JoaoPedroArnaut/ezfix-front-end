import React, { useState } from "react"
import SidebarTecnico from "../components/SidebarTecnico"
import InicioAcompanhamento from "../components/InicioAcompanhamento"
import InicioUltimasAvaliacoes from "../components/InicioUltimasAvaliacoes"
import InicioGrafico from "../components/InicioGrafico"


const DashboardInicio = () => {

    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div>
                    <InicioAcompanhamento />
                    <InicioUltimasAvaliacoes />
                    <InicioGrafico />
                </div>
            </div>
        </>
    )
}

export default DashboardInicio
