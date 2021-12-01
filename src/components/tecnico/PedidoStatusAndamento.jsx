import React, { useContext, useEffect, useState } from 'react'
import BarInformacaoCliente from "../BarInformacaoCliente";
import { useRouter } from "next/router";
import Carregamento from '../Carregamento';
import { api } from '../../api/api';
import EtapaStatus from './EtapaStatus';
import EtapaLinhaStatus from './EtapaLinhaStatus';
import Botao from '../Botao';


function PedidoStatusAndamento() {

    const router = useRouter();
    const [pedido, setPedido] = useState()
    const [carregado, setCarregado] = useState(false)
    const [dataStatus, setDataStatus] = useState();
    const [horaStatus, setHoraStatus] = useState();

    useEffect(() => {
        api.get(`/orcamentos/${router.asPath.replace("/tecnico/detalhesorcamento?", "")}`).then(res => {
            console.log(res.data);
            setPedido(res.data)
            setCarregado(true)
        }, err => {

        })
    }, []);


    if (carregado) {
        return (
            <>
                <BarInformacaoCliente id={pedido.id} status={pedido.statusGeral} nome={pedido.solicitante.nome} data={pedido.dataSolicitacao} />
                <div className="p-10 h-96 flex items-center justify-center border-2 border-gray-dark border-solid rounded-xl rounded-t-none shadow-lg">
                    
                    <div className="w-6/12 flex mb-24 mr-20">
                    <EtapaStatus checked etapa={0} dataStatus="18/11/2021" horaStatus="15:10"/>
                    <EtapaLinhaStatus />
                    <EtapaStatus etapa={1} dataStatus="25/11/2021" horaStatus="20:15"/>
                    <EtapaLinhaStatus />
                    <EtapaStatus etapa={2} dataStatus="26/11/2021" horaStatus="15:30"/>
                    </div>
                    <Botao text="Confirmar Retirada" estilo={9}/>

                </div>

            </>
        )
    } else {

        return (
            <>
                <Carregamento />
            </>
        )
    }
}

export default PedidoStatusAndamento
