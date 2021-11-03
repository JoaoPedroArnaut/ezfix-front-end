import React from 'react'

const Erros = ({erros}) => {
    
    if(erros.length > 0){
        return (
            <ul className="w-full bg-error border-2 border-red rounded-md px-2 text-white">
                { erros.map( (erro,i) => <li key={i} > *{ erro }</li>) }
            </ul>
        )
    }else {
        return <div/>
    }
    
}

export default Erros
