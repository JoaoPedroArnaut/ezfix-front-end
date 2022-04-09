import React, { useContext, useState } from 'react'
import Botao from './Botao'
import Input from './Input'
import Erros from './Erros';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { ValidacoesContext } from '../contexts/Validacoes';
import {api, setToken} from '../api/api';
import NProgress from 'nprogress'


const FormLogin = ({isTecnico}) => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const { erros, isBlank, setErros } = useContext(ValidacoesContext)

    function validaErros(){
        let erro = [...isBlank({ email, senha })]
        if (erro.length == 0) {
            return true;
        } else {
            setErros(erro);
            return false;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validaErros()) {
            api.post("/auth", {
                "email": email,
                "senha": senha
            }).then(res => {
                setCookie(null, 'token', res.data.token, {
                    maxAge: 3600,
                    path: '/',
                });
                setToken(res.data.token)
                router.push('/assistencias/1')
            }, err => {
                try{
                    err.response.status == 403?
                    setErros(["email e/ou senha invalidos"]):
                    setErros(["algo inesperado ocorreu, tente novamente mais tarde"])
                }catch(e){
                    setErros(["algo inesperado ocorreu, tente novamente mais tarde"])
                }
            })
            NProgress.start()
        }
    }

    return (
        <form className="my-8" onSubmit={handleSubmit}>
            <Erros erros={erros} />
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" type="password" placeholder="**********" alternativo={true} size="w-full" />
            <div className="w-full flex justify-around mt-8">
                <Botao estilo={7} text="entrar" />
            </div>
        </form>
    )
}

export default FormLogin
