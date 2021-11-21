import router from 'next/router'
import React, {useState, useEffect} from 'react'
import Certificaçoes from '../components/Certificaçoes'
import DetalhesAssistencia from '../components/DetalhesAssistencia'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import ModalOrcamentoEnv from '../components/ModalOrcamentoEnv'
import Navbar from '../components/Navbar'
import ServicosOferecidos from '../components/ServicosOferecidos'

const perfilassistencia = () => {
const [modalEnv, setModalEnv] = useState(false);
const [nomeAssistencia, setNomeAssistencia] = useState("TH Tecnologia");

useEffect(()=>{

    let isTrue = router.asPath.replace("/perfilassistencia?","")
    setModalEnv(isTrue == "true" ? true : false)

},[])

    return (
        <>
        {modalEnv && <ModalOrcamentoEnv setModalEnv={setModalEnv}/>}
            <Navbar fixed={true}/>
            <HeaderPage tituloPagina={nomeAssistencia}/>
            <DetalhesAssistencia/>
            <ServicosOferecidos/>
            <Certificaçoes/>
            <Footer/>
        </>
    )
}

export default perfilassistencia
