import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies()

export let api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {Authorization: `Bearer ${cookies.token}`}
})

export function setToken(token){
    api = axios.create({
        baseURL: "http://localhost:8080",
        headers: {Authorization: `Bearer ${token}`}
    })
}