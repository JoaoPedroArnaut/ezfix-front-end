import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FormRelatorio from '../components/FormRelatorio/FormRelatorio';
import NavUnfixed from '../components/NavUnfixed';


function RelatorioProblema() {
    return (
        <>
            <NavUnfixed login={["Login", "Criar conta"]} />
                <FormRelatorio />
            <Footer />
        </>
    )
}

export default RelatorioProblema
