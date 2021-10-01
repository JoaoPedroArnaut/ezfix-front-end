import React from 'react'
import Botao from './Botao'
import Image from 'next/image'
import logo from '../../public/ezfix_logo.png'


const Navbar = (props) => {
    const listaBotoes = props.botoes;
    
    const mostra = listaBotoes.map((element) => {
        return(<Botao text={element} />)
    });
    
    
    return (
        <div className="bg-blue h-24 flex justify-around items-center border-black border-solid border-b-2">
            <Image src={logo} width="150px" height="150px" alt="logo ezfix" />
            <div className="w-2/5 flex justify-around">
                {mostra}  
            </div>
            <Botao text={props.login}/>
        </div>
    )
}

export default Navbar
