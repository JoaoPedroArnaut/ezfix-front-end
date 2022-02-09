/* eslint-disable react-hooks/exhaustive-deps */
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api, setToken } from "../api/api";

export const SessaoContext = createContext({});

export const SessaoProvider = ({ children }) => {

    const [user, setUser] = useState({init: null})
    const router = useRouter()
    const cookies = parseCookies()

    useEffect(() => {
        if (cookies.token != undefined) {
            setToken(cookies.token)
            api.get(`/solicitante/logado`).then(response => {
                console.log(response);
                setUser(response.data)
            }, err => {

            })
        } else if (router.route != "/login" && router.route != "/" && router.route != "/cadastro" && router.route != "/faq") {
            router.push("/login")
        }
    }, [])

    return <SessaoContext.Provider value={{ user }}>{children}</SessaoContext.Provider>
}