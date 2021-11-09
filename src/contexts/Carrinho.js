import { createContext, useState } from "react";

export const CarrinhoContext = createContext({});

export const CarrinhoProvider = ({ children }) => {

    const [pedido, setPedido] = useState([])

    return (<CarrinhoContext.Provider value={{ pedido, setPedido }}>{children}</CarrinhoContext.Provider>)
};