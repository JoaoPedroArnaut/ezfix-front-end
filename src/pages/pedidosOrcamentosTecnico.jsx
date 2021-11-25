import SidebarTecnico from "../components/SidebarTecnico";
import BarInformacaoCliente from "../components/BarInformacaoCliente";
import BoxProdOrcamento from "../components/BoxProdOrcamento";

function pedidosOrcamentosTecnico() {

    return (
        <>
            <section className="flex">
                <SidebarTecnico />

                <div className="p-16 w-full">
                <h1 className="text-blue-dark_light text-xl font-bold">Pedidos:</h1>
                <BarInformacaoCliente />
                <div className="p-8 flex flex-col items-center justify-evenly border-2 border-gray-dark border-solid rounded-xl rounded-t-none shadow-lg">

                <BoxProdOrcamento />
                <BoxProdOrcamento />
                <BoxProdOrcamento />

                <div className="flex flex-col w-full items-end">
                <div className="bg-blue-light_dark p-4 w-1/5 rounded-xl mb-1">
                    <b>Total estimado: </b> <span>R$0,00</span>
                </div>
                <button className="text-white p-4 rounded-xl bg-blue-dark w-15 mt-1 hover:bg-gray-dark hover:text-blue-dark_light transition-all shadow-lg">Confirmar Orçamento</button>
                </div>

                </div>

                </div>
            </section>
        </>
    );
}

export default pedidosOrcamentosTecnico;
