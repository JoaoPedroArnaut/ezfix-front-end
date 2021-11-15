import React, { useState } from 'react'
import Footer from '../components/Footer'
import InfosUsuario from '../components/InfosUsuario'
import ModalNovoEndereco from '../components/ModalNovoEndereco'
import Navbar from '../components/Navbar'
import { ValidacoesProvider } from '../contexts/Validacoes'

const perfilusuario = () => {

    const [novoEndereco, setNovoEndereco] = useState(false);

    return (
        <>
            {novoEndereco && <ModalNovoEndereco setNovoEndereco={setNovoEndereco} />}
            <Navbar />
            <ValidacoesProvider>
                <InfosUsuario setNovoEndereco={setNovoEndereco} />
            </ValidacoesProvider>
            <Footer />
        </>
    )
}

export default perfilusuario
