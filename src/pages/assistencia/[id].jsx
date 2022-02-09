/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import Carregamento from '../../components/Carregamento'
import Certificaçoes from '../../components/Certificaçoes'
import DetalhesAssistencia from '../../components/DetalhesAssistencia'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'
import ModalOrcamentoEnv from '../../components/ModalOrcamentoEnv'
import Navbar from '../../components/Navbar'
import ServicosOferecidos from '../../components/ServicosOferecidos'
import NProgress from 'nprogress'

const perfilassistencia = () => {
    const router = useRouter()

    const [estado, setEstado] = useState([])
    const [cidade, setCidade] = useState([])
    const [carregado, setCarregado] = useState(false)
    const [modalEnv, setModalEnv] = useState(false);
    const [assistencia, setAssistencia] = useState({})


    useEffect(() => {
        let id = router.query.id
        if (id != undefined) {
            api.get(`/assistencia/${id}`).then(res => {
                setCarregado(true)
                setAssistencia(res.data)
                setCidade(res.data.enderecoEspecificos[0].enderecoGeral.cidade)
                setEstado(res.data.enderecoEspecificos[0].enderecoGeral.estado)
                let isTrue = router.asPath.replace(`/perfilAssistencia?${id}&`, "")
                setModalEnv(isTrue == "true" ? true : false)
                NProgress.done()
            }, err => {
                console.log(err.response);
            })
        }
    }, [router])

    useEffect(() => NProgress.start(), [])

    return (
        <>
            {modalEnv && <ModalOrcamentoEnv setModalEnv={setModalEnv} />}
            {carregado ? 
            <div>
                <HeaderPage tituloPagina={assistencia.nomeFantasia} />
                <DetalhesAssistencia estado={estado} cidade={cidade} id={assistencia.id} avaliacao={assistencia.avaliacao} />
                <ServicosOferecidos />
                <Certificaçoes />
            </div>: <div className='h-screen'/>}

            <Footer />
        </>
    )

}


export default perfilassistencia
