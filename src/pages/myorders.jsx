import React from 'react'
import Navbar from "../components/Navbar"
import Order from '../components/Order'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'

const myorders = () => {
    return (
        <>
            <Navbar fixed={true} />
            <HeaderPage tituloPagina="Meus Pedidos" page="/assistencias"/>
            <Order assistencia="Th Tecnologia" imagem="/ThTecnologiaLogo.jpg" />
            <Footer/>
        </>
    )
}

export default myorders
