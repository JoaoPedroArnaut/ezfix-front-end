/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Router, useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { api } from '../../api/api'
import CardAssistencia from '../../components/CardAssistencia'
import ComboBox from '../../components/ComboBox'
import Footer from '../../components/Footer'

const assistencias = ({ data }) => {

    useEffect(() => {
        if(data == null) useRouter().push("/404")
    }, [])
    

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

export async function getServerSideProps({params}) {
    
    const data = await api.get(`/assistencia/card-assistencia?page=${params.page - 1}`).then(res => {
        return res.status == 200? res.data.content: []
    }, err => {
        console.log(err.response);
        return null
    }) 
    
    return {
        props: {
            data,
        }
    }
}

export default assistencias
