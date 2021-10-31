import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

const HeaderOrder = ({ tituloPagina, page }) => {
    const router = useRouter();

    return (
        <>
            <div className="pt-24 flex justify-around">
                <div className="w-4/5">
                    <div className="sm:w-full flex justify-between pb-3 mt-12 ">
                        <button className="rounded-3xl px-5 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-2xl font-bold flex justify-around items-center"     onClick={() => {router.push(page)}}>
                            <FontAwesomeIcon icon={faArrowLeft} />Voltar</button>
                        <p className="text-5xl font-bold">{tituloPagina}</p>
                    </div>
                    <hr />


                </div>

            </div>
        </>
    )
}

export default HeaderOrder
