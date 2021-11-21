import React from 'react'
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'

const DetalhesAlternado = ({estagio}) => {

    switch (1) {
        case 1: return <PedidoDetalhado/>;

        case 2: return <PedidoDetalhadoConfirmar/>

        case 3: return <Pagamento/>

        default: return <div/>;
    }
            
}

export default DetalhesAlternado
