/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../api/api';
import { CarrinhoContext } from '../../contexts/Carrinho';
import { SessaoContext } from '../../contexts/Sessao';
import Botao from '../../components/Botao'
import CardRelatorio from '../../components/CardRelatorio';
import FormProduto from '../../components/FormProduto';
import RenderIf from '../../components/RenderIf';
import { getProdutos } from '../../api/produto';

const relatorioproblema = () => {

    const [novoItem, setNovoItem] = useState(false);
    const [pedido, setPedido] = useState([])

    const router = useRouter();

    const { itens, limpaCart } = useContext(CarrinhoContext);


    function final() {
        setNovoItem(!novoItem)
    }

    function handleSubimt(e) {
        e.preventDefault();
        console.log("a");
        let idAssistencia = router.query.id

        if (itens.length > 0) {
            api.post(`/orcamentos/novo/${idAssistencia}`, itens).then(res => {
                limpaCart()
                router.push(`/perfil-assistencia/${idAssistencia}?modal=true`)
            }, err => {
                console.log(err.response);
            })
        }

    }

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="w-4/5 flex justify-around mt-10 mb-10">
                    <RenderIf condition={novoItem}>
                        <FormProduto final={final} />
                    </RenderIf>

                    <div className="flex flex-col items-center justify-center overflow-y-auto bg-blue-light w-full h-fit sm:w-96 p-8 sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
                        <p className="font-bold text-2xl">Seu Pedido</p>

                        <hr className="w-3/5 mt-5 opacity-25" />
                        {itens.map((item, i) => <CardRelatorio key={i} id={i} produto={item.produto.tipo.nome} marca={item.produto.marca.nome} modelo={item.produto.modelo.nome} descricao={item.descricao} />)}

                        <div className="mt-5 flex flex-col items-center">
                            <img src="../plus-circle.png" alt="" width="100px" className="hover:bg-white cursor-pointer rounded-full" onClick={() => setNovoItem(!novoItem)} />
                            <p>Adicionar item</p>
                        </div>
                        <hr className="w-2/5 filter drop-shadow-md opacity-25 mt-2 mb-5" />

                        <div className="mt-10 mb-5">
                            <Botao onClick={handleSubimt} estilo={8} text="Concluir" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default relatorioproblema

