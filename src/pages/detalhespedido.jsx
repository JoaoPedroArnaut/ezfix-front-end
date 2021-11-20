import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'
import HeaderPage from '../components/HeaderPage'

const detalhespedido = () => {
    const [tituloPagina, setTituloPagina] = useState()
    const [estagio, setEstagio] = useState(2)

    function alternaTitulo(estagio){
        estagio == 3 ? setTituloPagina("Pagamento")
        : setTituloPagina("Pedidos") 
    }

    useEffect(() => {
        alternaTitulo(estagio)
      }, []);

    return (
        <>
            <Navbar login={["Login", "Criar conta"]} fixed={true} page="/" logado={true} usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" />
            <HeaderPage tituloPagina={tituloPagina}/>
            <DetalhesAlternado estagio={estagio} />
            <Footer/>
        </>
    )
}

export default detalhespedido