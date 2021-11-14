import React, { useState } from 'react'
import Botao from './Botao'
import CardRelatorio from './CardRelatorio';
import FormProduto from './FormProduto';

const ListaPedido = () => {

    const [produto, setProduto] = useState("Celular");
    const [problema, setproblema] = useState("Tela quebrada");
    const [modelo, setModelo] = useState("Xiaomi Redmi Note 8");
    const [descricao, setDescricao] = useState("Derrubei o celular no chão e a tela quebrou");
    const [novoItem, setNovoItem] = useState(false);

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="w-4/5 flex justify-around mt-10 mb-10">
                    {novoItem && <FormProduto/>}
                
                    <div className="flex flex-col items-center justify-center overflow-y-auto bg-blue-light w-full h-fit sm:w-96 p-8 sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
                        <p className="font-bold text-2xl">Seu Pedido</p>
                        <hr className="w-3/5 mt-5" />
                        <CardRelatorio produto={produto} problema={problema} modelo={modelo} descricao={descricao} />

                        <div className="mt-5 flex flex-col items-center">
                            <img src="./plus-circle.png" alt="" width="100px" className="hover:bg-white cursor-pointer rounded-full" onClick={()=> setNovoItem(!novoItem)} />
                            <p>Adicionar mais</p>
                        </div>
                        <hr className="w-full mt-5 mb-5" />

                        <div className="mt-10 mb-5">
                            <Botao estilo={8} text="Concluir" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ListaPedido
