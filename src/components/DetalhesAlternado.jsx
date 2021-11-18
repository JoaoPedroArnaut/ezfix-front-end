import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'

const DetalhesAlternado = ({pedido}) => {

    const [estagio,setEstagio] = useState(0)

    useEffect(() => {
        if(pedido != undefined){
            if(pedido.statusGeral == "agurdando resposta tecnico"){
                setEstagio(1)
            }else if(pedido.statusGeral == "aguardando sua resposta"){
                setEstagio(2)
            }
        }
    },[pedido])

    switch (estagio) {
        case 1: return <PedidoDetalhado status={pedido.statusGeral} itens={pedido.itens} id={pedido.id}/>;

        case 2: return <PedidoDetalhadoConfirmar/>

        case 3: return <Pagamento/>

        default: return <Carregamento/>;
    }
            
}

export default DetalhesAlternado
