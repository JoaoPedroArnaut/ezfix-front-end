import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'

const detalhespedido = () => {
    const [tituloPagina, setTituloPagina] = useState("Pedidos")

    return (
        <>
            <Navbar login={["Login", "Criar conta"]} fixed={true} page="/" logado={true} usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderOrder tituloPagina={tituloPagina}/>
            <DetalhesAlternado estagio={3}/>
            <Footer/>
        </>
    )
}

export default detalhespedido