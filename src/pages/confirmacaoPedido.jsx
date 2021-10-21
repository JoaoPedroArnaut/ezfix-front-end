import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import PedidoDetalhado from '../components/PedidoDetalhado'

const confirmacaoPedido = () => {
    return (
        <div>
            <Navbar logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina="Seu Pedido"/>
            <PedidoDetalhado/>
            <Footer/>
        </div>
    )
}

export default confirmacaoPedido
