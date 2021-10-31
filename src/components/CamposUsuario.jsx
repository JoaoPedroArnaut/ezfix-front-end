import React from 'react'
import { useRouter } from 'next/router';
import BotaoForm from './BotaoForm'
import ComboBox from './ComboBox'
import Input from './Input'

const CamposUsuario = ({ pgForm, trocaPg }) => {

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        router.push('/PageLoginCliente')
    }
    // trocaPg={trocaPg} pgForm={pgForm} titulo="Endereço"
    switch (pgForm) {

        case 1:
            return (
                <>
                    <form className="w-full flex justify-between flex-wrap" >
                        <Input label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
                        <Input label="CPF" placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
                        <Input label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
                        <Input label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                        <Input label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                        <BotaoForm  onClick={() => { trocaPg(true,pgForm,"Endereço") }} />
                    </form>
                </>
            )

        case 2:
            return (
                <>
                    <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
                        <Input label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
                        <Input label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
                        <Input label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-3/4" />
                        <Input label="Número" placeholder="1500" alternativo={true} size="w-1/5" />
                        <ComboBox estilo={2} label="Estado" opicao={["São Paulo"]} />
                        <Input label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-3/5" />
                        <BotaoForm trocaPg={trocaPg} pgForm={pgForm}/>
                    </form>
                </>
            )
        default:
            return (
                <>
                    <form className="w-full flex justify-between flex-wrap">
                        <Input label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
                        <Input label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
                        <Input label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
                        <BotaoForm onClick={() => { trocaPg(true,pgForm,"Dados Pessoais") }} />
                    </form>
                </>
            )
    }
}

export default CamposUsuario
