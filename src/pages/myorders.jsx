import React from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Order from '../components/Order'

const myorders = () => {
    return (
        <>
            <Navbar login={["Imagem", "Nome"]}/>
            <HeaderOrder tituloPagina={["Meus Pedidos"]}/>
            <Order/>
        </>
    )
}

export default myorders
