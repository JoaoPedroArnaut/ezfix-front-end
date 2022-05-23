/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import DetalhesAlternado from '../../components/DetalhesAlternado'
import { api } from '../../api/api'
import { useRouter } from 'next/router'
import Carregamento from '../../components/Carregamento'
import HeaderPage from '../../components/HeaderPage'
import ModalAvaliacao from '../../components/ModalAvaliacao'
import { ValidacoesProvider } from '../../contexts/Validacoes'
import RenderIf from '../../components/RenderIf'

const detalhespedido = () => {

    const router = useRouter()

    const [tituloPagina, setTituloPagina] = useState()
    const [estagio, setEstagio] = useState(2)
    const [carregado, setCarregado] = useState(false)
    const [pedido, setPedido] = useState({})
    const [modalAvaliar, setModalAvaliar] = useState(false);


    function alternaTitulo(estagio) {
        estagio == 3 ? setTituloPagina("Pagamento")
            : setTituloPagina("Pedidos")
    }

    useEffect(() => {
        alternaTitulo(estagio)
        let idPedido = router.query.id
        console.log(router);

        api.get(`/orcamentos/${idPedido}`).then(res => {
            setCarregado(true)
            setPedido(res.data)
            console.log(res.data);
        }, err => {

        })
    }, []);

    return (
        <>
            <RenderIf condition={carregado}>

                <ValidacoesProvider>
                    {modalAvaliar && <ModalAvaliacao pedido={pedido} />}
                </ValidacoesProvider>
                <HeaderPage tituloPagina={tituloPagina} />
                <DetalhesAlternado pedido={pedido} setModalAvaliar={setModalAvaliar} />
            </RenderIf>
            <RenderIf condition={!carregado} >
                <Carregamento />
            </RenderIf>
        </>
    )
}


export default detalhespedido