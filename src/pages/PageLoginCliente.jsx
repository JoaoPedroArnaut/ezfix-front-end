import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FormRelatorio from '../components/FormRelatorio/FormRelatorio';
import NavUnfixed from '../components/NavUnfixed';
import LoginCliente from '../components/LoginCliente/LoginCliente';


function PageLoginCliente() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <div className="h-24"></div>
               <LoginCliente />
            <Footer />
        </>
    )
}

export default PageLoginCliente