import React from 'react'
import BotaoForm from './BotaoForm';
import CardPlano from './CardPlano'

const FormPlanos = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-10 mt-10">
                <CardPlano pacote={0} />
                <CardPlano pacote={1} />
                <CardPlano pacote={2} />
            </div>
            <div className="flex w-full">
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Do Usuario", { nome, cpf, dataNasc, telPrimario, telSecundario }) }} text="voltar" />
                <BotaoForm size="45" type="submit" text="avançar" />
            </div>
        </>
    )
}

export default FormPlanos
