import React from 'react'
import Botao from '../components/Botao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    return (
        <>
            <div className="w-full flex justify-around">
                <div className="sm:w-4/5 flex flex-col mt-8">
                    <div className="w-full h-52 flex bg-blue-light rounded-t-2xl">
                        <div className="w-1/6 flex justify-center items-center">
                            <div className="rounded-full w-32 h-32 bg-white"></div>
                        </div>
                        <div className="flex flex-col justify-center w-2/6">
                            <p className="text-4xl">TH Tecnologia</p>
                            <div className="w-1.5 h-2 bg"></div>
                            <p></p>
                        </div>
                        
                    </div>
                        <div className="w-full h-24 bg-blue-dark rounded-b-2xl">

                        </div>

                </div>
            </div>
            </>
            )
}

            export default Order
