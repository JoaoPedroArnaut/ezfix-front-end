import React, { useContext } from 'react'
import FormEndereco from './FormEndereco';
import FormDadosPessoais from './FormDadosPessoais';
import FormUsuario from './FormUsuario';
import { CadastroContext } from '../contexts/Cadastro';

const CamposUsuario = () => {

    const { pgForm } = useContext(CadastroContext)

    const forms = [<FormUsuario key={0}/>,<FormDadosPessoais key={0}/>,<FormEndereco key={0}/>]
    
    return (forms[pgForm])
}

export default CamposUsuario
