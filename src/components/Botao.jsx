import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';


const Botao = (props) => {
    const router = useRouter();

    if(props.claro){
        return (
            <button className="bg-blue w-full xl:w-60 xl:h-14 lg:w-56 lg:h-12 xl:text-lg sm:w-48 font-medium min-w-min p-2 sm:rounded-md hover:text-blue hover:bg-blue-light duration-75" onClick={() => {router.push(props.page)}} >{props.text}</button>
        )
    }
    else if(props.icone){
        return (
            <button className="rounded-3xl px-6 py-2  bg-blue w-52 text-white text-xl flex justify-around items-center hover:text-blue hover:bg-blue-light duration-75" onClick={() => {router.push(props.page)}}>
                                <FontAwesomeIcon icon={props.icone} />{props.text}</button>
            )
    }
    else{
        return (
            <button className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" onClick={() => {router.push(props.page)}}>{props.text}</button>
        )
    }
}

export default Botao
