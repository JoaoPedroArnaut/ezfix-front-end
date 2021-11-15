import React from 'react'

const CardEndereco = () => {
    return (
        <>
            <div className="w-full bg-blue-light p-5 rounded-2xl flex flex-col">
                <div className="w-full flex justify-between">
                    <span className="text-2xl font-medium">Casa</span>
                    <img src="./Edit.png" width="30px" />
                </div>
                <div className="flex flex-col text-gray-dark">
                    <span>R. Antônio Zanetti, 285</span>
                    <span>Santo André - SP</span>
                    <span>09182-440</span>
                </div>
            </div>
        </>
    )
}

export default CardEndereco
