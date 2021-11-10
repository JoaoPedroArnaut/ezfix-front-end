import React, { useContext, useState } from 'react'
import ComboBox from "../components/ComboBox"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import Botao from "../components/Botao"
import { useRouter } from 'next/router'
import { CarrinhoContext } from '../contexts/Carrinho'

const FormProduto = () => {
    const router = useRouter();

    const [produto, setProduto] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [problema, setProblema] = useState("")
    const [obs, setObs] = useState("")

    const { pedido, setPedido } = useContext(CarrinhoContext)

    function handleSubmit(e) {
        e.preventDefault();
        setPedido([...pedido, { produto, marca, modelo, problema, obs }]);
        router.push("/assistencias")
    }

    return (
        <form onSubmit={handleSubmit} className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
            <h1 className="text-xl text-center font-medium">O que está <br /> precisando ser reparado?</h1>
            <hr className="text-black text-opacity-25 my-2 filter drop-shadow-md" />
            <ComboBox onChange={e => setProduto(e.target.value)} label="Produto" opicao={["--Selecione--", "Celular"]} />
            <Input value={marca} onChange={e => { setMarca(e.target.value) }} label="Marca" placeholder="Ex: Samsung, Positivo ..." />
            <Input value={modelo} onChange={e => { setModelo(e.target.value) }} label="Modelo" placeholder="Digite o modelo." />
            <ComboBox onChange={e => setProblema(e.target.value)} label="Problema" opicao={["--Seleciona--", "Tela Quebrada"]} />
            <TextArea value={obs} onChange={e => { setObs(e.target.value) }} label="Observações" placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.." />
            <div className="w-full flex justify-around mt-2">
                <Botao estilo={2} text="Confirmar" />
            </div>
        </form>
    )
}

export default FormProduto
