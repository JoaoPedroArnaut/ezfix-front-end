import React from 'react'
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'

const DetalhesAlternado = ({estagio}) => {

    switch (estagio) {
        case 1: return <PedidoDetalhado/>;

        case 2: return <PedidoDetalhadoConfirmar/>

        default: return <div/>;
    }
             
             


}

export default DetalhesAlternado
