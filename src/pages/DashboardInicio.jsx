import React, { useState } from "react"
import SidebarTecnico from "../components/SidebarTecnico"
import SidebarTecnicoRedu from "../components/SideBarTecnicoRedu"
import InicioAcompanhamento from "../components/InicioAcompanhamento"
import InicioUltimasAvaliacoes from "../components/InicioUltimasAvaliacoes"


const DashboardInicio = () => {

    const [alternaSideBar, setAlternaSideBar] = useState(false);

    return (
        <>
            <SidebarTecnico/>
            <div>
                <InicioAcompanhamento />
                <InicioUltimasAvaliacoes />
            </div>
        </>
    )
}

export default DashboardInicio