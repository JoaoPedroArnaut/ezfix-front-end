import React, { useEffect, useState } from 'react'
import CamposUsuario from '../components/CamposUsuario'
import Etapas from '../components/Etapas'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useRouter } from 'next/router'


const cadastro = () => {

    const router = useRouter();

    const [etapas, setEtapas] = useState([true]);
    const [pgForm, setPgForm] = useState(0);
    const [tituloForm, setTituloForm] = useState('Dados Do Usuario');
    const [form, setForm] = useState({});
    const [formPronto, setFormPronto] = useState(0)

    function trocaPg(novoTitulo) {
        let tmpEtapa = etapas;
        tmpEtapa.push(true)
        setEtapas(tmpEtapa)
        setPgForm(pgForm + 1)
        setTituloForm(novoTitulo)
    }

    useEffect(() => {
        console.log(form);
    },[form])

    useEffect(() => {
        if(formPronto == 3){
            axios.post("http://localhost:8080/auth/novoSolicitante/",{
                "bairro": form.bairro,
                "cep": form.cep,
                "cidade": form.cidade,
                "complemento": form.complemento,
                "cpf": form.cpf,
                "dataNascimento": form.dataNasc,
                "email": form.email,
                "estado": form.estado,
                "logradouro": form.logradouro,
                "nome": form.nome,
                "numero": form.numero,
                "senha": form.senha,
                "telefonePrimario": form.telPrimario,
                "telefoneSecundario": form.telSecundario
                }).then(res => {
                    if(res.status = 201){
                        router.push('/')
                    }
                },err => {
                    console.log("é isso mesmo");
                })
        }
    },[formPronto])

    function enviar(dados){
        setForm({...form, ...dados})
        setFormPronto(formPronto + 1)
    }

    return (
        <>
            <Navbar login={["Login", "Criar conta"]} page="/"/>
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

