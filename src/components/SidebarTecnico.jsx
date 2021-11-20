import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faReceipt, faUser, faCommentAlt, faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const SidebarTecnico = ({ alternaSideBar }) => {
    return (
        <>
            <div className="min-h-screen flex flex-row fixed">

                <div className="flex flex-col w-72 bg-blue overflow-hidden">

                    <div onClick={() => alternaSideBar(false)} className="flex justify-end mt-5 w-full">
                        <div className="hover:bg-blue-dark hover:text-white text-black rounded-full px-2 py-1 mr-3 cursor-pointer">
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-20">
                        <Image src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                    </div>

                    <ul class="flex flex-col items-center justify-center w-full py-4">

                        <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                            <Link href="/">
                                <div>
                                    <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                        <FontAwesomeIcon icon={faHome} size="2x" className="" />
                                    </div>
                                    <span className="text-xl font-bold">Inicio</span>
                                </div>
                            </Link>
                        </li>

                        <hr className="w-10/12 box mt-2 mb-2" />

                        <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                            <Link href="/">
                                <div>
                                    <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                        <FontAwesomeIcon icon={faReceipt} size="2x" />
                                    </div>
                                    <span className="text-xl font-bold h-20 w-20">Pedidos</span>
                                </div>
                            </Link>
                        </li>

                        <hr className="w-10/12 box mt-2 mb-2" />

                        <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                            <Link href="/">
                                <div>
                                    <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                        <FontAwesomeIcon icon={faUser} size="2x" />
                                    </div>
                                    <span className="text-xl font-bold h-20 w-20">Perfil</span>
                                </div>
                            </Link>
                        </li>

                        <hr className="w-10/12 box mt-2 mb-2" />

                        <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                            <Link href="/">
                                <div>
                                    <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                        <FontAwesomeIcon icon={faCommentAlt} size="2x" />
                                    </div>
                                    <span className="text-xl font-bold h-20 w-20">Mensagens</span>
                                </div>
                            </Link>
                        </li>

                        <hr className="w-10/12 box mt-2 mb-2" />

                        <li className="absolute bottom-2 flex justify-start items-center px-4 py-3 w-auto bg-blue-dark_light hover:bg-blue-dark rounded-2xl text-white ">
                            <Link href="/">
                                <div >
                                    <span className="w-9"><FontAwesomeIcon icon={faSignOutAlt} size="2x" /></span>
                                    {/* <span className="ml-4 text-xl">Sair</span> */}
                                </div>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default SidebarTecnico