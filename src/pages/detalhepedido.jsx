import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'

const confirmacaoPedido = () => {
    return (
        <>
            <Navbar logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina="Seu Pedido"/>
            <DetalhesAlternado estagio={2}/>
            <Footer/>
        </>
    )
}

export default confirmacaoPedido