import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const HeaderOrder = ({tituloPagina}) => {
    return (
        <>
            <div className="pt-24 w-full flex justify-around">
                <div className="sm:w-4/5 flex justify-between pb-3 mt-20 border-solid border-b-2">
                    <button className="rounded-3xl px-5 bg-blue-dark w-40 text-white text-2xl font-bold flex justify-around items-center"><FontAwesomeIcon icon={faArrowLeft}/>Voltar</button>
                    <p className="text-5xl font-bold">{tituloPagina}</p>
                </div>

                

            </div>
        </>
    )
}

export default HeaderOrder
