import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import Carregamento from '../components/Carregamento'
import { SessaoContext } from '../contexts/Sessao'
import { api } from '../api/api'
import CardPedido from '../components/CardPedido'

const myorders = () => {

    const { user } = useContext(SessaoContext)
    const [carregado, setCarregado] = useState(false)
    const [orcamentos, setOrcamentos] = useState([])
    const [itens,setItens] = useState([])


    useEffect(() => {
        api.get(`/orcamentos/solicitante/${user.cpf}`).then(res => {
            setCarregado(true)
            setOrcamentos(res.data)
            setItens()
        }, err => {
            setCarregado(false)
            console.log(err.response);
        })
    }, [user])

    if (carregado) {
        return (
            <>
                <Navbar fixed={true} />
                <HeaderOrder tituloPagina="Meus Pedidos" />
                <div className="w-full min-h-screen flex justify-around">
                    <div className="sm:w-4/5 flex flex-col mt-8">
                        {orcamentos.map((item, index) =>
                            <CardPedido itens={item.itens} status={item.statusGeral} id={item.assistencia.id} assistencia={item.assistencia.nomeFantasia} />)}
                    </div>
                </div>
                <Footer />
            </>
        )
    } else {

        return (
            <>
                <Navbar fixed={false} />
                <Carregamento />
            </>
        )
    }
}

export default myorders
