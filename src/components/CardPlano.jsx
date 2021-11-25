import React, {useState} from 'react'

const CardPlano = ({ lista, plano, preco,onClick,estilo }) => {

    const planos = ["Básico", "Intermediário", "Avançado"]



    function getLista(lista) {
        switch (lista) {
            case 1: return <> <li>Acesso a dashboard</li>
                <li>Suporte 24/7</li> </>
                break;
            case 2: return <> <li>Acesso a dashboard</li>
                <li>Suporte 24/7</li>
                <li>Frete grátis até 5 km</li>
                <li>Destaque na plataforma 2 semana/mês</li> </>
            case 3: return <> <li>Acesso a dashboard</li>
            <li>Suporte 24/7</li>
            <li>Frete grátis até 10 km</li>
            <li>Destaque na plataforma todos os dias</li>
            <li>Métricas personalizadas</li> </>

        }
    }
    return (
        <>
            <div onClick={onClick} className={`${estilo} flex flex-col items-center rounded-2xl h-96 p-10 cursor-pointer`}>
                <h1 className="font-bold text-3xl">{planos[plano]}</h1>
                <span className="text-gray-dark mt-2 mb-5">{preco}</span>
                <ul className="self-start list-disc">
                    {getLista(lista)}
                </ul>
            </div>
        </>
    )
}

export default CardPlano
