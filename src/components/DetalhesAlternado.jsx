import React, { useEffect } from 'react'
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'

const DetalhesAlternado = ({estagio , pedido}) => {

    useEffect(() => {
        console.log(pedido.itens);
    },[])

    switch (1) {
        case 1: return <PedidoDetalhado itens={pedido.itens} id={pedido.id}/>;

        case 2: return <PedidoDetalhadoConfirmar/>

        case 3: return <Pagamento/>

        default: return <div/>;
    }
            
}

export default DetalhesAlternado
