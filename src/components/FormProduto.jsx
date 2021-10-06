import React from 'react'
import ComboBox from "../components/ComboBox"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import Botao from "../components/Botao"

const FormProduto = () => {
    return (
        <div className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl ">
            <h1 className="text-xl text-center font-medium">O que está <br /> precisando ser reparado?</h1>
            <hr className="text-black text-opacity-25 my-2" />
            <ComboBox label="Produto" opicao={["--Selecione--", "Celular"]} />
            <Input label="Marca" placeholder="Ex: Samsung, Positivo ..." />
            <Input label="Modelo" placeholder="Digite o modelo." />
            <ComboBox label="Problema" opicao={["--Seleciona--"]} />
            <TextArea label="Observações" placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.." />
            <div className="w-full flex justify-around mt-2">
                <Botao text="Confirmar" />
            </div>
        </div>
    )
}

export default FormProduto
