import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api, setToken } from "../api/api";

export const SessaoContext = createContext({});

export const SessaoProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState({})

    const cookies = parseCookies()

    useEffect(() => { 
        api.get(`/solicitante/cpf/${cookies.cpf}`).then(response => {
            if (Object.keys(user).length === 0){
                setUser(response.data)
            }
        },err =>{})
    }, [user])

    useEffect(() => {
        setToken(cookies.token)
        api.get(`/solicitante/email/${email}`)
        .then(response => {
            setUser(response.data);
            setCookie(null, 'cpf', response.data.cpf, {
                maxAge: 3600,
                path: '/',
            });
        }, err => {
            
        })
    }, [email])

    return <SessaoContext.Provider value={{ email, setEmail, user }}>{children}</SessaoContext.Provider>
}