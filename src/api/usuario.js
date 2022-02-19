import { api } from "./api";

export async function getUsuarioNavbar(token = null) {
    if (!!token) return await api.get("/solicitante/simples").then(res => { return res.data }, err => { return err })
    return null
}