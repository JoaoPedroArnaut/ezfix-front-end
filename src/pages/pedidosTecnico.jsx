import React, { useState } from "react";

import SidebarTecnico from "../components/SidebarTecnico";
import SidebarTecnicoRedu from "../components/SideBarTecnicoRedu";
import TablePedidos from "../components/TablePedidos";
import SectionStatusOrders from "../components/SectionStatusOrders";
import BarQtdOrders from "../components/BarQtdOrders";


function pedidosTecnico() {
  const [alternaSideBar, setAlternaSideBar] = useState(false);

  return (
    <>
      <section className="flex">
        {alternaSideBar ? (
          <SidebarTecnico alternaSideBar={setAlternaSideBar} />
        ) : (
          <SidebarTecnicoRedu alternaSideBar={setAlternaSideBar} />
        )}
        <div className="p-8 w-full">
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
