import React from 'react'
import Footer from '../components/Footer'
import BodyCadastro from '../components/BodyCadastro'
import { CadastroProvider } from '../contexts/Cadastro'


const cadastro = () => {

    return (
        <>
            <CadastroProvider>
                <BodyCadastro />
            </CadastroProvider>
        </>
    )

}

export default cadastro

