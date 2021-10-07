import React from 'react'
import Botao from './Botao'
import Image from 'next/image'


const Navbar = (props) => {
    const listaBotoes = props.botoes;



    return (
        <div className="bg-blue h-24 flex justify-around border-black border-solid border-b-2 w-full fixed">
            <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                <Image src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                <div>
                    <span className="text-white mr-4">{props.login[1]}</span>
                    <Botao text={props.login[0]} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
