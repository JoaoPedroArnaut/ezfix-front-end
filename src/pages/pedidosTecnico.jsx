import React, { useState } from "react";

import SidebarTecnico from "../components/SidebarTecnico";
import TablePedidos from "../components/TablePedidos";
import SectionStatusOrders from "../components/SectionStatusOrders";
import BarQtdOrders from "../components/BarQtdOrders";


function pedidosTecnico() {
  

  return (
    <>
      <section className="flex">
         
          <SidebarTecnico  />
       
         
        
        <div className="p-16 w-full">
          <h1 className="text-blue-dark_light text-xl font-bold">Pedidos:</h1>

          <BarQtdOrders />
          <SectionStatusOrders />
          <TablePedidos />
          <TablePedidos />
        </div>
      </section>

    </>
  );
}

export default pedidosTecnico;
