import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api/api'
import CardAssistencia from '../components/CardAssistencia'
import ComboBox from '../components/ComboBox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import Recomendadas from '../components/Recomendadas'
import { CarrinhoContext } from '../contexts/Carrinho'

const assistencias = () => {

    const { pedido } = useContext(CarrinhoContext)

    const [pagina,setPagina] = useState([])

    useEffect(() => {
        console.log(pagina);
    },[pagina])

    useEffect(() => {
        api.get("/assistencia").then(res => {
            setPagina(res.data.content)
        },err => {
            console.log(err);
        })
    },[])

    return (
        <>
            <Navbar fixed={true} />
            {pedido.length != 0 ? <Recomendadas /> : <div />}
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center sm:flex-row sm:justify-around w-full my-8">
                    <div className="">
                        <input type="text" className="bg-blue-dark h-8 text-white rounded-l-md p-2" placeholder="pesquisar" />
                        <button className="text-white bg-blue-dark p-1 rounded-r-md h-8"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <ComboBox estilo={1} label="Filtro" opicao={["filtro"]} />

                </div>
                <hr className="text-black w-full lg:w-4/5 text-opacity-25" />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-4 gap-8 w-4/5 mt-8">
                    { pagina.map( (assistencia,i) => 
                    <CardAssistencia nome={assistencia.nomeFantasia} avaliacao="4,5" endereco={`${assistencia.enderecos[0].cidade} - ${assistencia.enderecos[0].estado}`} categorias="Celular" />
                    ) }
                    

                </div>
            </div>

            <Pagination />
            <Footer />
        </>
    )
}

export default assistencias
