import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'
import StatusPedido from './StatusPedido';

const DetalhesAlternado = ({pedido, setModalAvaliar}) => {

    const [estagio,setEstagio] = useState(0)

    useEffect(() => {
        if(pedido != undefined){
            if(pedido.status == "aguardando resposta tecnico"){
                setEstagio(1)
            }else if(pedido.status == "aguardando sua resposta"){
                setEstagio(2)
            }else if(pedido.status  != "aguardando sua resposta"){
                setEstagio(4)
            }
        }
    },[pedido])

    switch (estagio) {
        case 1: return <PedidoDetalhado nomeAssistencia={pedido.nomeAssistencia} data={pedido.dataSolicitacao} status={pedido.status} itens={pedido.itemOrcamentoList} id={pedido.idOrcamento} idAssistencia={pedido.idAssistencia}/>;

        case 2: return <PedidoDetalhadoConfirmar nomeAssistencia={pedido.nomeAssistencia} setEstagio={setEstagio} valorTotal={pedido.valorTotal} data={pedido.dataSolicitacao} status={pedido.status} itens={pedido.itemOrcamentoList} id={pedido.idOrcamento} idAssistencia={pedido.idAssistencia}/>

        case 3: return <Pagamento id={pedido.idOrcamento} solicitante={pedido.solicitante} assistencia={pedido.assistencia} itens={pedido.itemOrcamentoList} valorTotal={pedido.valorTotal}/>

        case 4: return <StatusPedido id={pedido.idOrcamento} status={pedido.status} setModalAvaliar={setModalAvaliar} />

        default: return <Carregamento/>;
    }
            
}

export default DetalhesAlternado
