import React from 'react'

const CardServico = ({ tipoServico, textoServico }) => {

    const servico = [
        "./ImgServicos/smartphone.png",
        "./ImgServicos/tablet.png",
        "./ImgServicos/notebook.png",
        "./ImgServicos/desktop.png"
    ]

    return (
        <div className="flex flex-col justify-center items-center bg-blue rounded-2xl p-4  w-1/5">
            <img src={servico[tipoServico]} alt="desktop" />
            <p className="mt-5">{textoServico}</p>
        </div>
    )
}

export default CardServico
