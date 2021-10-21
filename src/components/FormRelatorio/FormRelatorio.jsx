import React from 'react'
import ComboBox from '../ComboBox'
import Input from "../Input"
import TextArea from "../TextArea"
import Botao from "../Botao"
import {
    Section,
    WhiteArea,
    DivAddNew,
    VerticalLine

} from './styles'

const FormRelatorio = () => {
    return (
        <Section>
            <div className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl min-h-695 ">
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

            <VerticalLine />

            <div className="bg-blue-light w-full sm:w-96 p-8 sm:rounded-2xl min-h-full ">
                <h1 className="text-xl text-center font-medium">Seus<br/> pedidos </h1>
                <hr className="text-black text-opacity-25 my-2" />


                <WhiteArea>
                    <h2>Celular &#183; Tela Quebrada</h2>
                    <h3>Redmi note 8</h3>
                    <p>Derrubei no chão e quebrou</p>
                </WhiteArea>
                <WhiteArea>
                    <h2>Notebook &#183; Tela Quebrada</h2>
                    <h3>Positivo Dual Core</h3>
                    <p>Derrubei no chão e quebrou</p>
                </WhiteArea>
                <DivAddNew>
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39 26.5V39V26.5ZM39 39V51.5V39ZM39 39H51.5H39ZM39 39H26.5H39ZM76.5 39C76.5 59.7108 59.7108 76.5 39 76.5C18.2893 76.5 1.5 59.7108 1.5 39C1.5 18.2893 18.2893 1.5 39 1.5C59.7108 1.5 76.5 18.2893 76.5 39Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Adicionar Mais</p>
                </DivAddNew>
            </div>
        </Section>
    )
}


export default FormRelatorio;
