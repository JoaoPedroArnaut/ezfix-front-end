import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import PedidoDetalhado from '../components/PedidoDetalhado'

const confirmacaoPedido = () => {
    return (
        <div>
            <Navbar fixed={true} logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" page="#"/>
            <HeaderOrder tituloPagina="Seu Pedido" page="/myorders" />
            <PedidoDetalhado/>
            <Footer/>
        </div>
    )
}

export default confirmacaoPedido
