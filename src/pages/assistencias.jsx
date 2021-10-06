import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const assistencias = () => {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <div className="pt-24 flex justify-around">
                <div className="alturaSemNavbar w-4/5 flex flex-col items-center mt-16">
                    <div className="w-4/6">
                        <p className="text-xl flex justify-around font-bold">Selecionamos as melhores assistências para você</p>
                        <hr className="text-black text-opacity-25 my-2" />
                    </div>
                    <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-8">
                        <div className="w-full bg-blue-light h-28 flex rounded-lg p-4">
                            <div className="w-2/5 flex justify-around items-center">
                                <img src="/download.png" alt="" className="rounded-full h-20" />
                            </div>
                            <div className="w-4/5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default assistencias
