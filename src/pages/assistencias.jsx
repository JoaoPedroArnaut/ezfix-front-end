import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CardAssistencia from '../components/CardAssistencia'
import ComboBox from '../components/ComboBox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import Recomendadas from '../components/Recomendadas'

const assistencias = () => {
    return (
        <>
            <Navbar fixed={true} logado="true" usuario="Ítalo" imgPerfil="/PerfilUsuario.jpeg" page="" />
            {/* <Recomendadas /> */}
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
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                </div>
            </div>

            <Pagination />
            <Footer />
        </>
    )
}

export default assistencias
