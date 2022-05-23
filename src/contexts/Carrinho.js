import { createContext, useState } from "react";

export const CarrinhoContext = createContext({});

export const CarrinhoProvider = ({ children }) => {

    const [itens, setItens] = useState([])

    function remove(i) {
        let tmpPedido = pedido
        tmpPedido.splice(i, 1)
        setItens(tmpPedido)
    }

    function addItem(item){
        setItens([...itens,item])
    }

    function limpaCart(){
        setItens([])
    }

    return (<CarrinhoContext.Provider value={{ itens, addItem, remove, limpaCart }}>{children}</CarrinhoContext.Provider>)
};