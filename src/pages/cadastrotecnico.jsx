import React, { useContext } from 'react'
import BodyCadastro from '../components/BodyCadastro'
import CamposUsuario from '../components/CamposUsuario'
import Etapas from '../components/Etapas'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { CadastroContext, CadastroProvider } from '../contexts/Cadastro'
import { ValidacoesProvider } from '../contexts/Validacoes'

const CadastroTecnico = () => {
    return (
        <>
            <Navbar />
            <CadastroProvider>
                <BodyCadastro isTecnico={true} />
            </CadastroProvider>
            <Footer />
        </>
    )
}

export default CadastroTecnico
