import React, { Component } from 'react'
import Footer from '../components/Footer'
import FormsUsuario from '../components/FormsUsuario'
import Navbar from '../components/Navbar'


class cadastro extends Component {

    
    render() {
        return (
            <>
                <Navbar login={["Login", "Criar conta"]} />
                <div className="my-16 flex justify-around items-center">
                    <div className="w-9/12 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl flex flex-col items-center py-16">
                        <FormsUsuario />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default cadastro

