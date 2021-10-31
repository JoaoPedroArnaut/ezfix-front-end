import React, { Component } from 'react'
import Footer from '../components/Footer'
import FormsUsuario from '../components/FormsUsuario'
import Navbar from '../components/Navbar'



class cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            etapas: [true, false, false],
            pgForm: 0,
            tituloForm: 'Cadastro'
        };
    }

    setEtapas = (etapas, pgForm, tituloForm) => {
        pgForm++
        this.setState({ 
            etapas: etapas,
            pgForm: pgForm,
            tituloForm:  tituloForm
        })
    }

    render() {
        return (
            <>
                <Navbar login={["Login", "Criar conta"]} />
                <div className="alturaSemNavbar pt-24 flex justify-around items-center">
                    <div className="w-9/12 filter shadow-xl rounded-xl flex flex-col items-center py-16">
                        <FormsUsuario trocaPg={this.setEtapas} pgForm={this.state.pgForm} etapa={this.state.etapas} tituloForm={this.state.tituloForm} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default cadastro

