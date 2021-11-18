import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import Carregamento from '../components/Carregamento'
import DetalhesAssistencia from '../components/DetalhesAssistencia'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicosOferecidos from '../components/ServicosOferecidos'

const perfilassistencia = () => {
    const router = useRouter()

    const [assistencia, setAssistencia] = useState({});
    const [estado, setEstado] = useState([])
    const [cidade, setCidade] = useState([])
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        api.get(`/assistencia/${router.asPath.replace("/perfilassistencia?", "")}`).then(res => {
            setCarregado(true)
            setAssistencia(res.data)
            setCidade(res.data.enderecoEspecificos[0].enderecoGeral.cidade)
            setEstado(res.data.enderecoEspecificos[0].enderecoGeral.estado)
        }, err => {
            console.log(err.response);
        })
    }, [])

    if (carregado) {
        return (
            <>
                <Navbar />
                <DetalhesAssistencia estado={estado} cidade={cidade} id={assistencia.id} nome={assistencia.nomeFantasia} avaliacao={assistencia.avaliacao} />
                <ServicosOferecidos />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Navbar fixed={false} />
                <Carregamento />
            </>
        )
    }

}

export default perfilassistencia
