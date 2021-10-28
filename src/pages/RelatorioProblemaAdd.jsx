import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavUnfixed from "../components/NavUnfixed";
import ComboBox from "../components/ComboBox";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Botao from "../components/Botao";
import { VerticalLine } from "../components/FormRelatorio/styles";
import {
  WhiteArea,
  DivAddNew,
  Section,
} from "../components/FormRelatorio/styles";

function RelatorioProblemaAdd() {
  return (
    <>
      <NavUnfixed login={["Login", "Criar conta"]} />
      <Section>
        <div className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl min-h-695 ">
          <h1 className="text-xl text-center font-medium">
            Precisa reparar algo mais? <br /> Adiciona aí
          </h1>
          <hr className="text-black text-opacity-25 my-2" />
          <ComboBox label="Produto" opicao={["--Selecione--", "Celular"]} />
          <Input label="Marca" placeholder="Ex: Samsung, Positivo ..." />
          <Input label="Modelo" placeholder="Digite o modelo." />
          <ComboBox label="Problema" opicao={["--Seleciona--"]} />
          <TextArea
            label="Observações"
            placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.."
          />
          <div className="w-full flex justify-around mt-2">
            <Botao text="Confirmar" />
          </div>
        </div>

        <VerticalLine />

        <div className="bg-blue-light w-full sm:w-96 p-8 sm:rounded-2xl min-h-full ">
          <h1 className="text-xl text-center font-medium">
            Seus
            <br /> pedidos{" "}
          </h1>
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
          <hr className="text-black text-opacity-25 my-2" />
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default RelatorioProblemaAdd;
