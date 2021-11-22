import React, { useContext } from 'react'
import FormEndereco from './FormEndereco';
import FormDadosPessoais from './FormDadosPessoais';
import FormUsuario from './FormUsuario';
import { CadastroContext } from '../contexts/Cadastro';
import FormPlanos from './FormPlanos';

const CamposUsuario = ({isTecnico}) => {

    const { pgForm } = useContext(CadastroContext)

    const forms = [<FormUsuario />,<FormDadosPessoais />,<FormEndereco isTecnico={isTecnico}/>, <FormPlanos/>]
    
    return (forms[pgForm])
}

export default CamposUsuario
