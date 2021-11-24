import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'

const DetalhesAlternado = ({pedido}) => {

    const [estagio,setEstagio] = useState(0)

    useEffect(() => {
        if(pedido != undefined){
            console.log(pedido);
            if(pedido.statusGeral == "agurdando resposta tecnico"){
                setEstagio(1)
            }else if(pedido.statusGeral == "aguardando sua resposta"){
                setEstagio(2)
            }
        }
    },[pedido])

    switch (estagio) {
        case 1: return <PedidoDetalhado data={pedido.dataSolicitacao} status={pedido.statusGeral} itens={pedido.itens} id={pedido.id} idAssistencia={pedido.assistencia.id}/>;

        case 2: return <PedidoDetalhadoConfirmar setEstagio={setEstagio} valorTotal={pedido.valorTotal} data={pedido.dataSolicitacao} status={pedido.statusGeral} itens={pedido.itens} id={pedido.id} idAssistencia={pedido.assistencia.id}/>

        case 3: return <Pagamento solicitante={pedido.solicitante} assistencia={pedido.assistencia} itens={pedido.itens} valorTotal={pedido.valorTotal}/>

        default: return <Carregamento/>;
    }
            
}

export default DetalhesAlternado
