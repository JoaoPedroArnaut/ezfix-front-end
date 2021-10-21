import React from 'react'
import Botao from './Botao'
import Image from 'next/image'
import Link from 'next/link'

// function AlterarNavBar(props){
//     if (props.logado) {
//         return(
//             <div className="flex items-center">
//                 <span className="text-white text-xl mr-4 font-semibold">{props.login[1]}</span>
//                 <Image src="/PerfilUsuario.jpeg" className="rounded-full" width="70px" height="70px" alt="logo ezfix" />
//             </div>
//         )
//     }
//     else if(props.login){
//         return(
//             <div>
//                 <span className="text-white mr-4">{props.login[1]="Criar Conta"}</span>
//                         <Botao text={props.login[0]="Entrar"} />
//             </div>
//         )
//     }
// }

const Navbar = (props) => {
    const listaBotoes = props.botoes;

    return (
        <div className="bg-blue h-24 flex justify-around border-black border-solid border-b-2 w-full fixed z-50">
            <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                <Link href="/">
                    <Image src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                </Link>
                {props.logado ?
                    <div className="flex items-center">
                        <Link href={props.page} >
                            < span className="text-white text-xl mr-4 font-semibold">{props.usuario}</span>
                        </Link>

                        <Image src={props.imgPerfil} className="rounded-full" width="70px" height="70px" alt="logo ezfix" />
                    </div>
                    : <div>
                        <Link href="/cadastro">
                            <span className="text-white mr-4">{props.login[1]}</span>
                        </Link>
                        <Botao text={props.login[0]} page="/PageLoginCliente" />
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar
