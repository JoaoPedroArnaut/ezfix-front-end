import React, { Component } from 'react'
import CamposUsuario from './CamposUsuario'
import Etapas from '../components/Etapas'


class FormsUsuario extends Component {


    constructor(props) {
        super(props)
        this.state = {
            etapas: [true],
            pgForm: 0,
            tituloForm: 'Cadastro'
        };
    }

    setEtapas = (etapas, pgForm, tituloForm) => {
        pgForm++
        this.setState({
            etapas: [...this.state.etapas,true],
            pgForm: pgForm,
            tituloForm: tituloForm
        })
    }

    
    render() {
        return (
            <>
                <h1 className="text-4xl">{this.state.tituloForm}</h1>
                <Etapas etapa={this.state.etapas} />
                <div className="w-4/5">
                    <CamposUsuario trocaPg={this.setEtapas.bind(this)} pgForm={this.state.pgForm} />
                </div>
            </>
        )
    }

}

export default FormsUsuario
