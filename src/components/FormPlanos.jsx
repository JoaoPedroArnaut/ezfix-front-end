import React from 'react'
import BotaoForm from './BotaoForm';
import CardPlano from './CardPlano'

const FormPlanos = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-10 mt-10">
                <CardPlano lista={1} plano={0} preco="Grátis" />
                <CardPlano lista={2} plano={1} preco="R$100,00/mês" />
                <CardPlano lista={3} plano={2} preco="R$175,00/mês" />
            </div>
            <div className="flex w-full">
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Do Usuario", { nome, cpf, dataNasc, telPrimario, telSecundario }) }} text="voltar" />
                <BotaoForm size="45" type="submit" text="avançar" />
            </div>
        </>
    )
}

export default FormPlanos
