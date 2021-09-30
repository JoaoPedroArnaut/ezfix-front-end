import React from 'react'

const Botao = (props) => {
    return (
        <button className="bg-blue-dark h-12 p-2 rounded-md text-white">{props.text}</button>
    )
}

export default Botao
