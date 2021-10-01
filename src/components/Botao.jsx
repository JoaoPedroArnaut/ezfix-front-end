import React from 'react'

const Botao = (props) => {
    return (
        <button className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white border-2 border-solid border-black  hover:bg-blue-light duration-75">{props.text}</button>
    )
}

export default Botao
