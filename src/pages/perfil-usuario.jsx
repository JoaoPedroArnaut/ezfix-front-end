/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import Carregamento from '../components/Carregamento'
import Footer from '../components/Footer'
import InfosUsuario from '../components/InfosUsuario'
import ModalNovoEndereco from '../components/ModalNovoEndereco'
import { SessaoContext } from '../contexts/Sessao'
import { ValidacoesProvider } from '../contexts/Validacoes'

const perfilusuario = () => {

    const [novoEndereco, setNovoEndereco] = useState(false);

    return (
        <>
            <ValidacoesProvider>
                {novoEndereco && <ModalNovoEndereco setNovoEndereco={setNovoEndereco} />}

                <InfosUsuario setNovoEndereco={setNovoEndereco} />
            </ValidacoesProvider>
        </>
    )
}

export default perfilusuario
