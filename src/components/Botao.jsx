import React from 'react'

const Botao = ({claro,text}) => {
    if(claro){
        return (
            <button className="bg-blue w-full xl:w-60 xl:h-14 lg:w-56 lg:h-12 xl:text-lg sm:w-48 font-medium min-w-min p-2 sm:rounded-md text-white drop-shadow hover:bg-blue-light duration-75">{text}</button>
        )
    }else{
        return (
            <button className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white drop-shadow hover:bg-blue-light duration-75">{text}</button>
        )
    }
}

export default Botao
