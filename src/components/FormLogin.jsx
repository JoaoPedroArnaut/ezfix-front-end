import React, { useState } from 'react'
import Botao from './Botao'
import Input from './Input'
import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

const FormLogin = () => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/auth", {
            "email": email,
            "senha": senha
        }).then(res => {
            setCookie(null, 'token', res.data.token, {
                maxAge: 60,
                path: '/',
            });
            router.push('/assistencias')
        },err => {
            console.log("é isso mesmo");
        })
    }

    return (
        <form className="my-8" onSubmit={handleSubmit}>
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" type="password" placeholder="**********" alternativo={true} size="w-full" />
            <div className="w-full flex justify-around mt-8">
                <Botao estilo={7} text="entrar" />
            </div>
        </form>
    )
}

export default FormLogin
