/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { api, url } from '../api/api'
import { SessaoContext } from '../contexts/Sessao'
import Carregamento from './Carregamento'
import DadosContaUsuario from './DadosContaUsuario'
import DadosPessoaisUsuario from './DadosPessoaisUsuario'
import EnderecosUsuario from './EnderecosUsuario'
import { getUsuarioNavbar } from '../api/usuario'
import { parseCookies } from 'nookies';
import { getPefil } from '../api/perfil'

const InfosUsuario = ({ setNovoEndereco }) => {
    const router = useRouter();


    const { data } = useQuery('perfil', () => getPefil())

    function handlelUplod(e) {

        var formdata = new FormData();
        formdata.append("img", e[0], e[0].name);
        api.post(`${url()}/solicitante/perfil`, formdata)
            .then(res => {
                router.reload();
            }, err => {
                console.log(err.response);
            })


    }

    if (!!data) {
        return (
            <div className="w-full flex justify-around p-40">
                <div className="sm:w-4/5 mt-8 mb-20 p-10 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl">
                    <div className="flex mb-10">
                        <img src={`${url()}/solicitante/perfil/${data.cpf}`} alt="img" width="160px" className="rounded-full" />
                        <div className="ml-8 text-3xl font-bold flex flex-col">
                            <span>{data.nome}</span>
                            <div className="text-base mt-16">
                                <label htmlFor="img" xablau className="cursor-pointer bg-blue-dark py-3 px-5 rounded-3xl text-white">Mudar Imagem</label>
                                <input onChange={e => { handlelUplod(e.target.files) }} id="img" type="file" className="hidden" />
                            </div>
                        </div>
                    </div>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10" />
                    <DadosContaUsuario email={data.email} />
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10" />
                    <DadosPessoaisUsuario nome={data.nome} telefonePrimario={data.telefonePrimario} telefoneSecundario={data.telefoneSecundario} cpf={data.cpf} />
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10" />
                    <EnderecosUsuario enderecos={data.enderecoEspecificos} setNovoEndereco={setNovoEndereco} />
                </div>

            </div>

        )
    }

    return <Carregamento/>
}

export default InfosUsuario
