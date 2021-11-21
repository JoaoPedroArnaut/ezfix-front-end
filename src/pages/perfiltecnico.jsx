import React from 'react'
import Botao from '../components/Botao';
import CardPedido from '../components/CardPedido';
import Input from '../components/Input';
import SidebarTecnico from "../components/SidebarTecnico";
import TecnicoPerfilContato from '../components/TecnicoPerfilContato';
import TecnicoPerfilEnd from '../components/TecnicoPerfilEnd';

const perfiltecnico = () => {
    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="ml-20 w-4/5">
                    <h1 className="text-blue-dark_light text-4xl font-bold mt-10">Perfil:</h1>
                    <div className="bg-blue-light mt-5 p-14 w-11/12 flex rounded-2xl filter shadow-inner drop-shadow-2xl  ">
                        <div className="absolute top-10 right-10 hover:bg-blue p-3 rounded-xl cursor-pointer">
                            <img src="./Edit.png" alt="Editar" />
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="./ThTecnologiaLogo.jpg" alt="Logo" width="200px" className="rounded-full" />
                            <span className="text-3xl mt-2">Th Tecnologia</span>
                            <Input label="Proprietário" value="Nome do mano" alternativoDois />
                            <Input label="CNPJ" value="CNPJ do mano" alternativoDois />
                        </div>
                        <div className="self-center border-r-2 h-96 mr-20 ml-20"></div>
                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center h-16 justify-around rounded-2xl bg-white w-4/5">
                                <span className="hover:bg-blue-dark hover:text-white text-2xl font-medium py-2 px-6 rounded-full">Contato</span>
                                <span className="hover:bg-blue-dark hover:text-white text-2xl font-medium py-2 px-6 rounded-full">Certificações</span>
                            </div>
                            <div className="flex flex-col justify-start w-full mt-10">
                                <TecnicoPerfilContato />
                            </div>
                            <div className="self-start border-b-2 mt-10 mb-10 w-11/12"></div>
                            <div className="flex flex-col justify-start w-full">
                                <TecnicoPerfilEnd />
                            </div>
                            <div className="self-end">
                                <Botao estilo={8} text="Salvar" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default perfiltecnico
