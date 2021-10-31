import React, { useEffect, useState } from 'react'
import CamposUsuario from '../components/CamposUsuario'
import Etapas from '../components/Etapas'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const cadastro = () => {

    const [etapas, setEtapas] = useState([true]);
    const [pgForm, setPgForm] = useState(0);
    const [tituloForm, setTituloForm] = useState('Dados Do Usuario');
    const [form, setForm] = useState({});

    function trocaPg(novoTitulo) {
        let tmpEtapa = etapas;
        tmpEtapa.push(true)
        setEtapas(tmpEtapa)
        setPgForm(pgForm + 1)
        setTituloForm(novoTitulo)
    }

    function enviar(dados){
        setForm({...form, ...dados})
    }

    useEffect(() => {
        console.log(form);
    })

    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <div className="my-16 flex justify-around items-center">
                <div className="w-9/12 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl flex flex-col items-center py-16">
                    <h1 className="text-4xl">{tituloForm}</h1>
                    <Etapas etapa={etapas} />
                    <div className="w-4/5">
                        <CamposUsuario trocaPg={trocaPg} pgForm={pgForm} enviar={enviar} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default cadastro

