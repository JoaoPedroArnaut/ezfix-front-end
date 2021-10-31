import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'

const confirmacaoPedido = () => {
    return (
        <>
            <Navbar fixed={true} logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" page="#"/>
            <HeaderOrder tituloPagina="Seu Pedido" page="/myorders" />
            <PedidoDetalhado/>
            <Footer/>
        </>
    )
}

export default confirmacaoPedido