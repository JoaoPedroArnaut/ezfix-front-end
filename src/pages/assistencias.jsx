/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api/api'
import CardAssistencia from '../components/CardAssistencia'
import ComboBox from '../components/ComboBox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NProgress from 'nprogress'

const assistencias = ({ data }) => {

    return (
        <>
            {/* {pedido.length != 0 ? <Recomendadas /> : <BarraOtimiza />} */}
            <div className="flex flex-col items-center pt-24">
                <div className="flex flex-col items-center sm:flex-row sm:justify-around w-full mt-16 mb-8">
                    <div className="">
                        <input type="text" className="bg-blue-dark h-8 text-white rounded-l-md p-2" placeholder="pesquisar" />
                        <button className="text-white bg-blue-dark p-1 rounded-r-md h-8"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <ComboBox estilo={1} label="Filtro" opicao={["filtro"]} />
                </div>
                <hr className="text-black w-full lg:w-4/5 text-opacity-25" />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-4 gap-8 w-4/5 mt-8">
                    {data.map((assistencia, i) =>
                        <CardAssistencia key={i} id={assistencia.id} nome={assistencia.nomeFantasia} avaliacao={assistencia.avaliacao} endereco={`${assistencia.cidade} - ${assistencia.estado}`} categorias="Celular" />
                    )}
                </div>
            </div>

            {/* <Pagination /> */}
            <Footer />
        </>
    )

}

export async function getServerSideProps() {
    let teste = []

    await api.get("/assistencia/card-assistencia").then(res => {
        teste = res.data.content
        console.log(teste);
    }, err => {
        console.log(err.response);
        router.push("/404")
    }) 
    
    return {
        props: {
            data: teste,
        }
    }
}

export default assistencias
