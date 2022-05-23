/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import InfosUsuario from '../components/InfosUsuario'
import ModalNovoEndereco from '../components/ModalNovoEndereco'

const perfilusuario = () => {

    const [novoEndereco, setNovoEndereco] = useState(false);

    return (
        <>
            {novoEndereco && <ModalNovoEndereco setNovoEndereco={setNovoEndereco} />}
            <InfosUsuario setNovoEndereco={setNovoEndereco} />
        </>
    )
}

export default perfilusuario
