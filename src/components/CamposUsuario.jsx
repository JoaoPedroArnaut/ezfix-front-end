import React, { useState } from 'react'
import FormEndereco from './FormEndereco';
import FormDadosPessoais from './FormDadosPessoais';
import FormUsuario from './FormUsuario';

const CamposUsuario = ({ pgForm, trocaPg }) => {
    switch (pgForm) {
        case 0:
            return (
                <FormUsuario trocaPg={trocaPg} />
            );

        case 1:
            return (
                <FormDadosPessoais trocaPg={trocaPg} />
            );

        case 2:
            return (
                <FormEndereco />
            );
        default:
            return (
                <p>404</p>
            )
    }
}

export default CamposUsuario
