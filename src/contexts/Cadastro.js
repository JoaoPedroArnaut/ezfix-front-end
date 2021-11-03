import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const CadastroContext = createContext({});

export const CadastroProvider = ({children}) => {

    const [stage, setStages] = useState([true]);
    const [pgForm, setPgForm] = useState(0);
    const [tituloForm, setTituloForm] = useState('Dados Do Usuario');
    const [form, setForm] = useState({});
    const [formPronto, setFormPronto] = useState(0)
    const router = useRouter();
    
    function trocaPg(novoTitulo) {
        let tmpEtapa = stage;
        tmpEtapa.push(true)
        setStages(tmpEtapa)
        setPgForm(pgForm + 1)
        setTituloForm(novoTitulo)
    }

    function enviar(dados) {
        setForm({ ...form, ...dados })
        setFormPronto(formPronto + 1)
    }

    useEffect(() => {
        console.log(form);
    }, [form])

    useEffect(() => {
        if (formPronto == 3) {
            axios.post("http://localhost:8080/auth/novoSolicitante/", {
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
                if (res.status = 201) {
                    router.push('/login')
                }
            }, err => {
                console.log("é isso mesmo");
            })
        }
    }, [formPronto])

    return (<CadastroContext.Provider value={{enviar, trocaPg, tituloForm, stage, pgForm}}>{children}</CadastroContext.Provider>)
}