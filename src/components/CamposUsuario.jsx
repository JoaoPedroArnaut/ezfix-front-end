import React, { useState } from 'react'
import FormEndereco from './FormEndereco';
import FormDadosPessoais from './FormDadosPessoais';
import FormUsuario from './FormUsuario';

const CamposUsuario = ({ pgForm, trocaPg, enviar}) => {

    const forms = [<FormUsuario trocaPg={trocaPg} enviar={enviar} />,<FormDadosPessoais trocaPg={trocaPg} enviar={enviar}/>,<FormEndereco enviar={enviar}/>]
    
    return (forms[pgForm])
}

export default CamposUsuario
