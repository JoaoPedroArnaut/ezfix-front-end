import { api } from "./api"

export async function getMeusPedidos() {
    return await api.get(`/orcamentos/pedidos`).then(res => { return res.data }, err => { return err })
}