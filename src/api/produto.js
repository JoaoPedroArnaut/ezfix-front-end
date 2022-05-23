import { api } from "./api"

export async function getProdutos(uri = '') {
    return await api.get(`/produtos${uri}`).then(res => { return res.data }, err => { return err })
}