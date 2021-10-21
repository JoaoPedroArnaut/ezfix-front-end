import { useRouter } from 'next/router';
import React from 'react'
import CamposUsuario from './CamposUsuario'
import Etapas from '../components/Etapas'



const FormsUsuario = ({ pgForm, trocaPg, etapa, tituloForm}) => {
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        router.push('/')
    }

    return (

        <>
            <h1 className="text-4xl">{tituloForm}</h1>
            <Etapas etapa={etapa} />
            <form className="w-4/5" onSubmit={handleSubmit}>
                <CamposUsuario trocaPg={trocaPg} pgForm={pgForm} />
            </form>
        </>


    )

}

export default FormsUsuario
