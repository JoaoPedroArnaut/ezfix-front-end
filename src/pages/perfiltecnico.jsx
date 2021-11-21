import React, { useState } from 'react'
import Input from '../components/Input';
import SidebarTecnico from "../components/SidebarTecnico";
import TecnicoAbaCertificado from '../components/TecnicoAbaCertificado';
import TecnicoAbaContato from '../components/TecnicoAbaContato';
import ModalNovoCert from '../components/ModalNovoCert'

const perfiltecnico = () => {

    const [contCert, setContCert] = useState(true);
    const [modalNovoCert, setModalNovoCert] = useState(false);

    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="ml-20 w-full">
                    <h1 className="text-blue-dark_light text-4xl font-bold mt-10">Perfil:</h1>
                    <div className="bg-blue-light mt-5 p-14 w-11/12 flex rounded-2xl filter shadow-inner drop-shadow-2xl  ">
                        <div className="flex flex-col items-center">
                            <img src="./ThTecnologiaLogo.jpg" alt="Logo" width="200px" className="rounded-full" />
                            <span className="text-3xl mt-2">Th Tecnologia</span>
                            <Input label="Proprietário" value="Nome do mano" alternativoDois disabled={true} />
                            <Input label="CNPJ" value="CNPJ do mano" alternativoDois disabled={true} />
                        </div>
                        <div className="self-center border-r-2 h-96 mr-20 ml-20"></div>
                        <div className="flex flex-col items-center w-full">

                            <div className="flex items-center h-16 justify-around rounded-2xl bg-white w-4/5">
                                <button className={contCert ? "bg-blue-dark text-white text-2xl font-medium py-2 px-6 rounded-full"
                                    : "hover:bg-blue-dark hover:text-white text-2xl font-medium py-2 px-6 rounded-full"}
                                    onClick={() => setContCert(true)}>Contato</button>

                                <button className={contCert ? "hover:bg-blue-dark hover:text-white text-2xl font-medium py-2 px-6 rounded-full"
                                    : "bg-blue-dark text-white text-2xl font-medium py-2 px-6 rounded-full"}
                                    onClick={() => setContCert(false)}>Certificados</button>
                            </div>
                            {contCert ? <TecnicoAbaContato /> : <TecnicoAbaCertificado setModalNovoCert={setModalNovoCert}/>}
                        </div>
                    </div>
                    {modalNovoCert && <ModalNovoCert setModalNovoCert={setModalNovoCert}/>}
                </div>

            </div>
        </>
    )
}

export default perfiltecnico
