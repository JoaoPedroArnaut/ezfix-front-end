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
            <Navbar login={["Login", "Criar conta"]} />
            <Recomendadas />
            <div className="flex justify-around w-full mt-8">
                <div className="">
                    <input type="text" className="bg-blue-dark h-8 text-white rounded-l-md p-2" placeholder="pesquisar" />
                    <button className="text-white bg-blue-dark p-1 rounded-r-md h-8"><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <ComboBox escuro='true' label="Filtro" opicao={["filtro"]}/>
            </div>
            <hr/>
            <Pagination />
            <Footer />
        </>
    )
}

export default assistencias
