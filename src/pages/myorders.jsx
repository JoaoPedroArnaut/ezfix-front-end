import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Order from '../components/Order'
import Footer from '../components/Footer'

const myorders = () => {
    return (
        <>
            <Navbar fixed={true} />
            <HeaderOrder tituloPagina="Meus Pedidos" page="/assistencias"/>
            <Order assistencia="Th Tecnologia" imagem="/ThTecnologiaLogo.jpg" />
            <Footer/>
        </>
    )
}

export default myorders
