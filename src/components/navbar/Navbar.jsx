import React from 'react'
import Botao from '../Botao'
import Image from 'next/image'
import logo from '../../../public/ezfix_logo.png'
import styled from 'styled-components'
import {
    Nav,
    NavUl,
    NavLi
} from './styles';



const Title = styled.h1 `
            font-size: 16px;
            text-align
        `
const Navbar = (props) => {
    return (
        <> 
            <Nav>
            <Image src={logo} width="100%" height="100%" alt="logo ezfix" />

             <ul>
                 <li>Soluções</li>
                 <li>Diferenciais</li>
                 <li>Sobre</li>
                 <li>Contato</li>
             </ul>
             <ul>
                 <li>Login/Cadastro</li>
             </ul>
            </Nav>
            
        </>
    )
}

export default Navbar
