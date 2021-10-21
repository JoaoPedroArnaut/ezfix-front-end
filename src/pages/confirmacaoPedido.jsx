import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import PedidoDetalhadoConfirmar from '../components/PedidoDetalhadoConfirmar'

const confirmacaoPedido = () => {
    return (
        <div>
            <Navbar logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina="Seu Pedido"/>
            <PedidoDetalhadoConfirmar/>
            <Footer/>
        </div>
    )
}

export default confirmacaoPedido
