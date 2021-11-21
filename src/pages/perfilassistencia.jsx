import React from 'react'
import Certificaçoes from '../components/Certificaçoes'
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
            <Certificaçoes/>
            <Footer/>
        </>
    )
}

export default perfilassistencia
