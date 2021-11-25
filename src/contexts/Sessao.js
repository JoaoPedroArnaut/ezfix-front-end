import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api, setToken } from "../api/api";

export const SessaoContext = createContext({});

export const SessaoProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState({})
    const [isTecnico, setTecnico] = useState(false)

    let init = true

    const cookies = parseCookies()

    useEffect(() => {
        console.log(cookies.isTecnico);
        if (cookies.isTecnico == "false") {
            console.log("sesao");
            api.get(`/solicitante/cpf/${cookies.cpf}`).then(response => {
                if (Object.keys(user).length === 0) {
                    setUser(response.data)
                    setEmail(response.data.usuario.email)
                }
            }, err => {

            })
        } else {
            api.get(`/assistencia/${cookies.id}`).then(response => {
                if (Object.keys(user).length === 0) {
                    setUser(response.data)
                    setEmail(response.data.representante.usuario.email)
                }
            }, err => {

            })
        }
    }, [user])

    useEffect(() => {
        if(email != ""){
            setToken(cookies.token)
            if (cookies.isTecnico == "false") {
                api.get(`/solicitante/email/${email}`)
                    .then(response => {
                        setUser(response.data);
                        setCookie(null, 'cpf', response.data.cpf, {
                            maxAge: 3600,
                            path: '/',
                        });
                    }, err => {
    
                    })
            } else {
                api.get(`/assistencia/email/${email}`,{headers: { Authorization: `Bearer ${cookies.token}` }})
                    .then(response => {
                        setUser(response.data);
                        console.log(response.data);
                        setCookie(null, 'id', response.data.id, {
                            maxAge: 3600,
                            path: '/',
                        });
                    }, err => {
                        
                    })
            }
        }
        
    }, [email])

    return <SessaoContext.Provider value={{ email, setEmail, user, setTecnico }}>{children}</SessaoContext.Provider>
}