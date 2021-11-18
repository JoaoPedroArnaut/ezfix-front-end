import React from 'react'

const CardRelatorio = ({ produto, problema, modelo, descricao }) => {
    return (
        <>
            <div className="flex flex-col items-start bg-white mt-10 p-5 rounded-xl">
                <p className="text-xl font-semibold">{produto} • {problema}</p>
                <p className="font-medium text-base mt-2">{modelo}</p>
                <p className="mt-2 font-normal">{descricao}</p>
            </div>
        </>
    )
}

export default CardRelatorio
