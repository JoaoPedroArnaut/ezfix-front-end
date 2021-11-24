import { createContext, useState } from "react";

export const CarrinhoContext = createContext({});

export const CarrinhoProvider = ({ children }) => {

    const [pedido, setPedido] = useState([])

    function remove(i) {
        let tmpPedido = pedido
        console.log(tmpPedido);
        tmpPedido.splice(i, 1)
        console.log(tmpPedido);
        setPedido(tmpPedido)
    }

    return (<CarrinhoContext.Provider value={{ pedido, setPedido, remove }}>{children}</CarrinhoContext.Provider>)
};