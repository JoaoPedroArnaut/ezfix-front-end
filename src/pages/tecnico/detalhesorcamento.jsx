import router from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api';

import SidebarTecnico from '../../components/SidebarTecnico'
import PedidosOrcamentosTecnico from '../../components/tecnico/PedidosOrcamentoTecnico'
import PedidoStatusAndamento from '../../components/tecnico/PedidoStatusAndamento';

const detalhesorcamento = () => {

    const [id, setId] = useState();


    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="w-11/12 flex flex-col ml-10 mt-10">
                    <h1 className="text-blue-dark_light text-4xl font-bold mb-5">Pedidos:</h1>
                    {/* <PedidosOrcamentosTecnico /> */}
                    <PedidoStatusAndamento/>
                </div>
            </div>
        </>
    )
}

export default detalhesorcamento
