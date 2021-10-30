import React from 'react'

const BotaoForm = ({onClick}) => {
    if(onClick){
        return (
            <div className="w-full flex justify-around pt-8">
                <button className="filter shadow-lg bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" onClick={onClick}>avançar</button>
            </div>
        )
    }else {
        return (
            <div className="w-full flex justify-around pt-8">
                <button className="filter shadow-lg bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" >Enviar</button>
            </div>
        )
    }
    
}

export default BotaoForm
