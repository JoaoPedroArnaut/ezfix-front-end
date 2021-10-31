import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'

const detalhespedido = () => {
    return (
        <>
            <Navbar fixed={true} page="/" logado={true} usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina="Seu Pedido"/>
            <DetalhesAlternado estagio={1}/>
            <Footer/>
        </>
    )
}

export default detalhespedido