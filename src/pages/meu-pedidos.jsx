/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import Carregamento from '../components/Carregamento'
import CardPedido from '../components/pedidos/CardPedido'
import HeaderPage from '../components/HeaderPage'
import router from 'next/router'
import { isError, useQuery } from 'react-query'
import { getMeusPedidos } from '../api/orcamentos'

const pedidos = () => {

    const { data, isLoading, isError } = useQuery('meusPedidos', () => getMeusPedidos())

    useEffect(() => {
        console.log(data);
    }, [data])

    if (!!data) {
        return (
            <>
                <HeaderPage tituloPagina="Meus Pedidos" />
                <div className="w-full min-h-screen flex justify-around">
                    <div className="sm:w-4/5 flex flex-col mt-8">
                        {data.map((item, index) =>
                            <CardPedido key={index} itens={item.itens} status={item.status} id={item.idAssistencia} idPedido={item.idOrcamento} assistencia={item.nomeAssistencia} />)}
                    </div>
                </div>
            </>
        )
    }

    if (isLoading) {
        return <Carregamento />
    }

    if (isError) {
        router.push("/404")
        return null
    }

}

export default pedidos
