import React, { useContext, useEffect, useState } from "react";

import SidebarTecnico from "../components/SidebarTecnico";
import TablePedidos from "../components/TablePedidos";
import SectionStatusOrders from "../components/SectionStatusOrders";
import BarQtdOrders from "../components/BarQtdOrders";
import { SessaoContext } from './../contexts/Sessao';
import Carregamento from './../components/Carregamento';
import { api } from './../api/api';
import { parseCookies } from "nookies";


function pedidosTecnico() {

  const { user } = useContext(SessaoContext)
  const [carregado, setCarregado] = useState(false)
  const [vazio,setVazio] = useState(true)
  const [orcamentos,setOrcamentos] = useState([])
  const cookies = parseCookies()

  useEffect(() => {
    api.get(`/orcamentos/assistencia/${cookies.id}`).then(res => {
      setCarregado(true)
      if(res.status != 204){
        setVazio(false)
        setOrcamentos(res.data)
      }
      console.log(res.data);
    },err => {

    })
  },[])

  if (carregado) {
    return (
      <>
        <section className="flex">
          <SidebarTecnico />
          <div className="p-16 w-full">
            <h1 className="text-blue-dark_light text-xl font-bold">Pedidos:</h1>
            <BarQtdOrders />

            <SectionStatusOrders />
            {vazio ? (<div className="w-full mt-4 text-center" >Nenhum Pedido</div>):
            orcamentos.map((item, index) => <TablePedidos itens={item.itens} nome={item.solicitante.nome} data={item.dataSolicitacao} status={item.statusGeral} id={item.id} />)
            }
            
            {/* item.solicitante */}
          </div>
        </section>
      </>
    )
  } else {

    return (
      <>
        <Carregamento />
      </>
    )
  }

  return (
    <>


    </>
  );
}

export default pedidosTecnico;
