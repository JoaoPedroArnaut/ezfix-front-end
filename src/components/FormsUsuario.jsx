import React, { useState } from 'react'
import CamposUsuario from './CamposUsuario'
import Etapas from '../components/Etapas'


const FormsUsuario = () => {

    const [etapas, setEtapas] = useState([true]);
    const [pgForm, setPgForm] = useState(0);
    const [tituloForm, setTituloForm] = useState('Dados Do Usuario');

    function trocaPg(novoTitulo) {
        let tmpEtapa = etapas;
        tmpEtapa.push(true)
        setEtapas(tmpEtapa)
        setPgForm(pgForm + 1)
        setTituloForm(novoTitulo)
    }

    return (
        <>
            <h1 className="text-4xl">{tituloForm}</h1>
            <Etapas etapa={etapas} />
            <div className="w-4/5">
                <CamposUsuario trocaPg={trocaPg} pgForm={pgForm} />
            </div>
        </>
    )


}

export default FormsUsuario
