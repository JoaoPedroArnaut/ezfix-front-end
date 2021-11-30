/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react'
import Input from '../components/Input';
import { SessaoContext } from '../contexts/Sessao'
import { api } from '../api/api'
import { useRouter } from 'next/router'
import SidebarTecnico from "../components/SidebarTecnico";
import TecnicoAbaCertificado from '../components/TecnicoAbaCertificado';
import TecnicoAbaContato from '../components/TecnicoAbaContato';
import ModalNovoCert from '../components/ModalNovoCert'

const perfiltecnico = () => {
    const { user } = useContext(SessaoContext)
    const router = useRouter();
    const [contCert, setContCert] = useState(true);
    const [modalNovoCert, setModalNovoCert] = useState(false);

    function handlelUplod(e) {

        var formdata = new FormData();
        formdata.append("img", e[0], e[0].name);

        api.post(`http://localhost:8080/assistencia/perfil/${user.id}`, formdata)
            .then(res => {
                router.reload();
            }, err => {
                console.log(err.response);
            })
    }

    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="w-full flex flex-col ml-10 mt-10">
                    <h1 className="text-blue-dark_light text-4xl font-bold">Perfil:</h1>
                    <div className="bg-blue-light mt-5 p-14 w-11/12 flex rounded-2xl filter shadow-inner drop-shadow-2xl  ">
                        <div className="flex flex-col items-center">
                            <img src={`http://localhost:8080/assistencia/perfil/${user.id}`} alt="Logo" className="w-64 h-64 rounded-full" />
                            <div className="text-base mt-5 mb-10">
                                <label htmlFor="img" className="cursor-pointer bg-blue-dark hover:bg-blue-dark_light py-3 px-5 rounded-3xl text-white">Mudar Imagem</label>
                                <input onChange={e => { handlelUplod(e.target.files) }} id="img" type="file" className="hidden" />
                            </div>
                            <span className="text-3xl font-semibold">{user.nomeFantasia}</span>
                            <Input label="Proprietário" value="BiriJhonson" alternativoDois disabled={true} />
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
                            {contCert ? <TecnicoAbaContato /> : <TecnicoAbaCertificado setModalNovoCert={setModalNovoCert} />}
                        </div>
                    </div>
                    {modalNovoCert && <ModalNovoCert setModalNovoCert={setModalNovoCert} />}
                </div>

            </div>
        </>
    )
}

export default perfiltecnico
