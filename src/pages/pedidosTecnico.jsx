import SidebarTecnico from "../components/SidebarTecnico";
function pedidosTecnico() {
  return (
    <>
      <section className="flex">
        <SidebarTecnico />
        <div className="p-8 w-full">
          <h1 className="text-blue-dark_light text-xl font-bold">Pedidos:</h1>
          <div className="p-9 bg-blue-light w-full rounded-3xl">
            <div className="flex justify-around">
              <div className="flex">
                <img
                  src="/newOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
                  <b>Novos</b>
                  <b>3</b>
                </div>
              </div>

              <div className="flex b">
                <img
                  src="/andamentoOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
                  <b>Em andamento</b>
                  <b>3</b>
                </div>
              </div>

              <div className="flex">
                <img
                  src="/readyOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
                  <b>Finalizados</b>
                  <b>3</b>
                </div>
              </div>
            </div>
          </div>

          <section className="flex items-center justify-between mt-7">
            <div className="p-6 bg-blue-light flex items-center rounded-full w-1/2 justify-between">
              <div className="bg-gray-opacity rounded-3xl p-2 ">
                <b>Novos</b>
              </div>
              <div className=" rounded-3xl p-2 ">
                <b>Em andamento</b>
              </div>
              <div className=" rounded-3xl p-2 ">
                <b>Finalizados</b>
              </div>
            </div>
            <div className="flex items-center">
              <b className="mr-3">Filtro:</b>
              <select className="p-4 bg-blue-light rounded-2xl" name="" id="">
                <option value="">Selecione</option>
              </select>
            </div>
          </section>

          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Notebook i7 8GB Branco</td>
                  <td>Informática</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Caneta Esferográfica Azul</td>
                  <td>Papelaria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default pedidosTecnico;
