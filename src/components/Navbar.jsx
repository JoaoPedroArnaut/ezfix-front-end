import React, { useState } from 'react'
import Botao from './Botao'
import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router';

const Navbar = ({botoes,fixed,page,usuario,imgPerfil,login}) => {
    const listaBotoes = botoes;
    const router = useRouter();

    const cookies = parseCookies()
   
    let logado = false
    if (cookies.token != ""){
        logado = true
    }
    let estilo = "bg-blue h-24 flex justify-around border-black border-opacity-10 border-solid border-b-2 w-full";

    if(fixed){
        estilo +=  " fixed z-50";
    }

    return (
        <div className={estilo}>
            <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                <Link href="/" >
                    <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                </Link>
                {logado ?
                    <div className="flex items-center">
                        <Link href={page} >
                            < span className="text-white text-xl mr-4 font-semibold cursor-pointer">{usuario}</span>
                        </Link>

                        <Image src={imgPerfil} className="rounded-full" width="70px" height="70px" alt="logo ezfix" />
                    </div>
                    : <div>
                        <Link href="/cadastro">
                            <span className="text-white mr-4 cursor-pointer">{login[1]}</span>
                        </Link>
                        <Botao estilo={2} text={login[0]} onClick={() =>  { router.push("/login")}} />
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar