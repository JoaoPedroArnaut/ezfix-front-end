import React from 'react'
import BotaoForm from './BotaoForm'
import ComboBox from './ComboBox'
import Input from './Input'

const CamposUsuario = ({ pgForm, trocaPg }) => {
    switch (pgForm) {

        case 1:
            return (
                <>
                    <div className="w-full flex justify-between flex-wrap" >
                        <Input label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
                        <Input label="CPF" placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
                        <Input label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
                        <Input label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                        <Input label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                        <BotaoForm trocaPg={trocaPg} pgForm={pgForm} etapa={[true, true, true]} titulo="Endereço" />
                    </div>
                </>
            )

        case 2:
            return (
                <>
                    <div className="w-full flex justify-between flex-wrap">
                        <Input label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
                        <Input label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
                        <Input label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-3/4" />
                        <Input label="Número" placeholder="1500" alternativo={true} size="w-1/5" />
                        <ComboBox estilo={2} label="Estado" opicao={["São Paulo"]} />
                        <Input label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-3/5" />
                        <BotaoForm trocaPg={trocaPg} pgForm={pgForm} />
                    </div>
                </>
            )
        default:
            return (
                <>
                    <div className="w-full flex justify-between flex-wrap" >
                        <Input label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
                        <Input label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
                        <Input label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
                        <BotaoForm trocaPg={trocaPg} pgForm={pgForm} etapa={[true, true, false]} titulo="Dados Pessoais" />
                    </div>
                </>
            )
    }
}

export default CamposUsuario
