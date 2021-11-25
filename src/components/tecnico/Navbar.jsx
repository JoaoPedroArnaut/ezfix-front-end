import React, { useContext, useEffect, useState } from 'react'
import Botao from '../../components/Botao'
import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router';
import { SessaoContext } from '../../contexts/Sessao'
import MenuOpcoes from '../../components/MenuOpcoes'

const Navbar = ({ fixed }) => {
    const router = useRouter();

    let estilo = "bg-blue h-24 flex justify-around border-black border-opacity-10 border-solid border-b-2 w-full";

    if (fixed) {
        estilo += " fixed z-50";
    }

    return (
        <div className={estilo}>
            <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                <Link href="/tecnico/home" >
                    <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                </Link> 
                <div>
                    <Link href="/tecnico/cadastro">
                        <span className="text-white mr-4 cursor-pointer">Criar conta</span>
                    </Link>
                    <Botao estilo={2} text="Login" onClick={() => { router.push("/tecnico/login") }} />
                </div>
            </div>
        </div >
    )
}

export default Navbar