/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Content from './Content'
import { useRouter } from 'next/router'

const Navbar = ({ nome, cpf }) => {

    const router = useRouter();
    const [fixed, setFixed] = useState(true)

    useEffect(() => {
        const rotas = ["/login","/cadastro","/solicitar-pedido/[id]"]
        rotas.includes(router.route)? setFixed(false): setFixed(true)
    }, [router.route])

    return (
        <div className={`bg-blue h-24 flex justify-around border-black border-opacity-10 border-solid border-b-2 w-full ${fixed ? " fixed z-50" : ""}`}>
            <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                <Link href={!!nome?"/assistencias/1" :"/"} passHref>
                    <a>
                        <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                    </a>
                </Link>
                <Content nome={nome} cpf={cpf}/>
            </div>
        </div >
    )

}

export default Navbar