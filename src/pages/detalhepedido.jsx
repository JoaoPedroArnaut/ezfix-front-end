import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import PedidoDetalhado from '../components/PedidoDetalhado'
import DetalhesAlternado from '../components/DetalhesAlternado'

const confirmacaoPedido = () => {
    return (
        <div>
            <Navbar logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina="Seu Pedido"/>
            <DetalhesAlternado estagio={1}/>
            <Footer/>
        </div>
    )
}

export default confirmacaoPedido