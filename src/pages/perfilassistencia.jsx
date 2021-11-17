import React from 'react'
import DetalhesAssistencia from '../components/DetalhesAssistencia'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicosOferecidos from '../components/ServicosOferecidos'

const perfilassistencia = () => {
    return (
        <>
            <Navbar/>
            <DetalhesAssistencia/>
            <ServicosOferecidos/>
            <Footer/>
        </>
    )
}

export default perfilassistencia
