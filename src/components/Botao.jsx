import React from 'react'

const Botao = ({claro,text}) => {
    if(claro){
        return (
            <button className="bg-blue w-24 min-w-min p-2 rounded-md text-black drop-shadow hover:bg-blue-light duration-75">{text}</button>
        )
    }else{
        return (
            <button className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white drop-shadow hover:bg-blue-light duration-75">{text}</button>
        )
    }
}

export default Botao
