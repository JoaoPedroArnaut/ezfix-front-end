import React, { useState } from "react"
import SidebarTecnico from "../components/SidebarTecnico"
import SidebarTecnicoRedu from "../components/SideBarTecnicoRedu"
import InicioAcompanhamento from "../components/InicioAcompanhamento"
import InicioUltimasAvaliacoes from "../components/InicioUltimasAvaliacoes"
import InicioGrafico from "../components/InicioGrafico"


const DashboardInicio = () => {

    const [alternaSideBar, setAlternaSideBar] = useState(false);

    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div>
                    <InicioAcompanhamento />
                    <InicioUltimasAvaliacoes />
                    <InicioGrafico/>
                </div>
            </div>
        </>
    )
}

export default DashboardInicio