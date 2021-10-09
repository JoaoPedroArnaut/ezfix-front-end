import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const cadastro = () => {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <div className="alturaSemNavbar pt-24">

            </div>
            <Footer />
        </>
    )
}

export default cadastro
