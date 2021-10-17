import React from 'react'
import Etapa from '../components/Etapa'
import EtapaLinha from '../components/EtapaLinha'

const Etapas = ({etapa}) => {
    return (
        <div className="flex my-4">
            <Etapa etapa="1" checked={etapa[0]} />
            <EtapaLinha checked={etapa[1]} />
            <Etapa etapa="2" checked={etapa[1]}/>
            <EtapaLinha checked={etapa[2]}/>
            <Etapa etapa="3" checked={etapa[2]}/>
        </div>
    )
}

export default Etapas
