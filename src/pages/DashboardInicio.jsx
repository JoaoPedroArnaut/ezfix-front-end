import React, {useState} from "react"
import SidebarTecnico from "../components/SidebarTecnico"
import SidebarTecnicoRedu from "../components/SideBarTecnicoRedu"


const DashboardInicio = () => {

    const [alternaSideBar, setAlternaSideBar] = useState(false);

    return (
        <>
        {alternaSideBar ? <SidebarTecnico alternaSideBar={setAlternaSideBar}/>
        : <SidebarTecnicoRedu alternaSideBar={setAlternaSideBar}/>}
        </>
    )
}

export default DashboardInicio