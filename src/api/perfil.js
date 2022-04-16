import { api } from "./api"

export async function getPefil() {
    return await api.get(`/solicitante/perfil`).then(res => { return res.data }, err => { return err })
}