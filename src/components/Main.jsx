/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from '../components/Footer'
import { CarrinhoProvider } from '../contexts/Carrinho'
import { getUsuarioNavbar } from '../api/usuario'
import { parseCookies } from 'nookies';
import { useQuery } from 'react-query'

const Main = ({ children }) => {

    const { token = null } = parseCookies();
    const { data, refetch } = useQuery('navbar', () => getUsuarioNavbar(token))

    useEffect(() => {
        refetch()
    }, [token])

    return (
        <>
            <CarrinhoProvider>
                <div>
                    {!!data && !!token ? <Navbar nome={data.nome} cpf={data.cpf} /> : <Navbar />}
                    {children}
                </div>
            </CarrinhoProvider>
            <Footer />
        </>
    )
}

export default Main
