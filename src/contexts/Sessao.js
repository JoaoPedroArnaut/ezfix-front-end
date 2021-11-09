import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api, setToken } from "../api/api";

export const SessaoContext = createContext({});

export const SessaoProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState({})

    const cookies = parseCookies()

    useEffect(() => { console.log(user); }, [user])

    useEffect(() => {
        setToken(cookies.token)
        api.get(`/solicitante/${email}`)
        .then(response => {
            setUser(response.data);
        }, err => {
            if (err.status === 403) {
                console.log("não logado");
            }
        })
    }, [email])

    return <SessaoContext.Provider value={{ email, setEmail, user }}>{children}</SessaoContext.Provider>
}