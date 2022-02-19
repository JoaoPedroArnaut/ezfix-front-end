/* eslint-disable react-hooks/exhaustive-deps */
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";

export const SessaoContext = createContext({});

export const SessaoProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const router = useRouter()
    const cookies = parseCookies()

    useEffect(() => {
        if (cookies.token != undefined) {
            api.get(`/solicitante/logado`).then(response => {
                setUser(response.data)
            }, err => {

            })
        } else if (router.route != "/faq") {
            router.push("/login")
        }
    }, [])

    return <SessaoContext.Provider value={{ user }}>{children}</SessaoContext.Provider>
}