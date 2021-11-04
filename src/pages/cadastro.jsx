import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BodyCadastro from '../components/BodyCadastro'
import { CadastroProvider } from '../contexts/Cadastro'


const cadastro = () => {

    return (
        <>
            <Navbar login={["Login", "Criar conta"]} page="/" />
            <CadastroProvider>
                <BodyCadastro />
            </CadastroProvider>
            <Footer />
        </>
    )

}

export default cadastro

