import React, { useState } from 'react'
import FormEndereco from './FormEndereco';
import FormDadosPessoais from './FormDadosPessoais';
import FormUsuario from './FormUsuario';

const CamposUsuario = ({ pgForm, trocaPg }) => {

    const forms = [<FormUsuario trocaPg={trocaPg} />,<FormDadosPessoais trocaPg={trocaPg} />,<FormEndereco />]
    
    return (forms[pgForm])
}

export default CamposUsuario
