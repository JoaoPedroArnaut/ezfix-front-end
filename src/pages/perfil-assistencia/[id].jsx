/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import Certificaçoes from '../../components/perfil-assistencia/Certificaçoes'
import DetalhesAssistencia from '../../components/perfil-assistencia/DetalhesAssistencia'
import HeaderPage from '../../components/HeaderPage'
import ModalOrcamentoEnv from '../../components/perfil-assistencia/ModalOrcamentoEnv'

const perfilassistencia = ({ data, id }) => {
    const router = useRouter()

    const [carregado, setCarregado] = useState(false)
    const [modalEnv, setModalEnv] = useState(false);

    useEffect(() => {
        if (router.query.modal) {
            setModalEnv(true)
        }
        data == null ? router.push("/404") : setCarregado(true)
    }, [])


    return (
        <>
            {modalEnv && <ModalOrcamentoEnv setModalEnv={setModalEnv} />}
            {carregado &&
                <div>
                    <HeaderPage tituloPagina={data.nomeFantasia} />
                    <DetalhesAssistencia estado={data.estado} cidade={data.cidade} id={id} avaliacao={data.avaliacao} />
                    {/* <ServicosOferecidos /> */}
                    <Certificaçoes certificados={data.certificados}/>
                </div>}
        </>
    )

}

export async function getServerSideProps({ params }) {
    const id = params.id
    const data = await api.get(`/assistencia/perfil-assistencia/${id}`).then(res => {
        return res.data
    }, err => {
        console.log(err.response);
        return null
    })

    return {
        props: {
            data,
            id
        }
    }
}


export default perfilassistencia
