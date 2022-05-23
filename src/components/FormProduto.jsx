/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import ComboBox from "../components/ComboBox"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import Botao from "../components/Botao"
import { useRouter } from 'next/router'
import Erros from './Erros';
import { CarrinhoContext } from '../contexts/Carrinho'
import { getProdutos } from '../api/produto'
import { useQuery } from 'react-query'
import { ValidacoesContext } from '../contexts/Validacoes'

const FormProduto = ({ final }) => {
    const router = useRouter();

    const [tipo, setTipo] = useState(0)
    const [marca, setMarca] = useState(0)
    const [modelo, setModelo] = useState(0)
    const [tipos, setTipos] = useState([])
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [descricao, setObs] = useState("")
    const [erros, setErros] = useState([])

    const { data } = useQuery('tipos', () => getProdutos("/tipos"))
    const { data: produtos } = useQuery('produto', () => getProdutos())

    useEffect(() => {

        if (!!data) {
            setTipos(data)
        }
    }, [data])

    useEffect(() => {
        getProdutos(`/marcas/${tipo}`).then(res => {
            if (!!res) {
                setMarcas(res)
            }
        })
    }, [tipo])

    useEffect(() => {
        getProdutos(`/modelos/${tipo}/${marca}`).then(res => {
            if (!!res) {
                setModelos(res)
            }
        })
    }, [marca])

    useEffect(() => {
        console.log(produtos);
    }, [produtos])

    const { addItem } = useContext(CarrinhoContext)
    const { isBlank } = useContext(ValidacoesContext)

    function validaErros() {
        let erro = [...isBlank({ tipo, marca, modelo, descricao })]
        if (erro.length == 0) {
            return true;
        } else {
            setErros(erro);
            return false;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        let produto = produtos.find(p => p.tipo.id == tipo && p.marca.id == marca && p.modelo.id == modelo)

        let obj = { descricao, produto }


        if(validaErros()){
            addItem(obj)
            final()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
            <h1 className="text-xl text-center font-medium">O que está <br /> precisando ser reparado?</h1>
            <hr className="text-black text-opacity-25 my-2 filter drop-shadow-md" />
            <Erros erros={erros} />
            <ComboBox value={tipo} onChange={e => setTipo(e.target.value)} label="Produto" opicao={tipos} />
            <ComboBox value={marca} onChange={e => { setMarca(e.target.value) }} label="Marca" opicao={marcas} />
            <ComboBox value={modelo} onChange={e => { setModelo(e.target.value) }} label="Modelo" opicao={modelos} />
            <TextArea value={descricao} onChange={e => { setObs(e.target.value) }} label="Descrição do Problema" placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.." />
            <div className="w-full flex justify-around mt-2">
                <Botao estilo={2} text="Confirmar" />
            </div>
        </form>
    )
}



export default FormProduto
