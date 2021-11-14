import React, {useState} from 'react'
import Footer from '../components/Footer'
import InfosUsuario from '../components/InfosUsuario'
import ModalNovoEndereco from '../components/ModalNovoEndereco'
import Navbar from '../components/Navbar'

const perfilusuario = () => {

    const [novoEndereco, setNovoEndereco] = useState(false);

    return (
        <>
        {novoEndereco && <ModalNovoEndereco setNovoEndereco={setNovoEndereco}/>}
            <Navbar />
            <InfosUsuario setNovoEndereco={setNovoEndereco}/>
            <Footer />
        </>
    )
}

export default perfilusuario
