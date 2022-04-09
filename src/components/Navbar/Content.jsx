/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Botao from '../Botao'
import MenuOpcoes from './MenuOpcoes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { url } from '../../api/api'

const Content = ({ nome, cpf }) => {
    const router = useRouter();
    const [menuAtivo, setMenuAtivo] = useState(false)

    useEffect(() => {
        setMenuAtivo(false)
    }, [router])

    if (!!nome) {
        return (
            <div className="flex items-center">
                <Link href="/perfilusuario" passHref>
                    <a className="text-white text-xl mr-4 font-semibold cursor-pointer">{nome}</a>
                </Link>
                <Link href="/perfilusuario" passHref>
                    <a>
                        <img src={`${url()}/solicitante/perfil/${cpf}`} className="rounded-full cursor-pointer" width="70px" height="70px" alt="logo ezfix" />
                    </a>
                </Link>
                <div className="ml-5 mr-10 cursor-pointer">
                    {menuAtivo?
                    <img onClick={() => {setMenuAtivo(false)}} src="/MenuArrow.png" width="20px" height="20px" className={"transform-gpu -rotate-180"} />:
                    <img onClick={() => {setMenuAtivo(true)}} src="/MenuArrow.png" width="20px" height="20px" className={"transform-gpu rotate-0"} />}
                </div>
                <Image className="cursor-pointer" src="/notification.png" width="35px" height="35px" alt="notification" />

                {menuAtivo && <MenuOpcoes />}
            </div>
        )
    }

    return (
        <div>
            <Link href="/cadastro" passHref>
                <a className="text-white mr-4 cursor-pointer hover:underline">Criar conta</a>
            </Link>
            <Botao estilo={2} text="Login" onClick={() => { router.push("/login") }} />
        </div>
    )


}

export default Content
