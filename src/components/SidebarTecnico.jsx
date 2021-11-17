import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faReceipt, faUser, faCommentAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const SidebarTecnico = () => {
    return (

        <>
            <div className=" relative flex flex-col bg-blue w-72 h-screen px-4 items-center text-sm font-bold">

                <div className="flex items-center justify-center mt-10 ">
                    <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                </div>
            
                <a href="#" className="flex justify-start items-center px-4 py-3 mt-2 w-11/12 rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                    <ul className="w-9"><FontAwesomeIcon icon={faHome} size="2x"/></ul>
                    <ul className="ml-4 text-xl">Inicío</ul>
                </a>
              

                <hr className="w-11/12 box mt-2 mb-2"/>

                <a href="#" className="flex justify-start items-center px-4 py-3 mt-2 w-11/12 rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                    <ul className="w-9"><FontAwesomeIcon icon={faReceipt} size="2x"/></ul>                 
                    <ul className="ml-4 text-xl" href="#">Pedidos</ul>
                </a>

                <hr className="w-11/12 box mt-2 mb-2"/>

                <a href="#" className="flex justify-start items-center px-4 py-3 mt-2 w-11/12 rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                    <ul className="w-9"><FontAwesomeIcon icon={faUser} size="2x"/></ul>
                    <ul className="ml-4 text-xl" href="#">Perfil</ul>
                </a>

                <hr className="w-11/12 box mt-2 mb-2"/>

                <a href="#" className="flex justify-start items-center px-4 py-3 mt-2 w-11/12 rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                    <ul className="w-9 "><FontAwesomeIcon icon={faCommentAlt} size="2x" /></ul>
                    <ul className="ml-4 text-xl" href="#">Mensagens</ul>
                </a>

                <a href="#" className="absolute bottom-10 flex justify-start items-center px-4 py-3 mt-2 w-5/6 bg-blue-dark_light hover:bg-blue-dark rounded-2xl text-white ">
                    <ul className="w-9"><FontAwesomeIcon icon={faSignOutAlt} size="2x" /></ul>
                    <ul className="ml-4 text-xl" href="#">Sair</ul>
                </a>

            </div>
        </>

    )
}

export default SidebarTecnico