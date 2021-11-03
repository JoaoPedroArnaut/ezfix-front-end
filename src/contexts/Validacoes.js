import { createContext, useState } from "react";

export const ValidacoesContext = createContext({});

export const ValidacoesProvider = ({ children }) => {
    const [erros, setErros] = useState([])

    function validaUsuario(form) {
        let tmpErros = [...isBlank(form)]
        if (tmpErros.length == 0) {
            if (form.senha != form.confirmSenha) {
                tmpErros.push("As senhas não coincidem")
            }else {
                if (form.senha.length < 8) {
                    tmpErros.push("A sua senha deve conter ao menos 8 caracteres");
                }
                if (form.senha.search(/[a-z]/i) < 0) {
                    tmpErros.push("A sua senha deve ter pelo menos uma letra"); 
                }
                if (form.senha.search(/[0-9]/) < 0) {
                    tmpErros.push("A sua senha deve ter pelo menos um numero");
                }
            }
            if(!validateEmail(form.email)){
                tmpErros.push("email invalido")
            }
        }
        setErros(tmpErros)
        if (tmpErros.length == 0){
            return true
        } else {
            return false
        }
    }

    function isBlank(form) {
        let erros = []
        for (let i in form) {
            if (form[i] == "") {
                if (i != "confirmSenha"){
                    erros.push(`${i} não pode estar em branco`)
                }else {
                    erros.push(`confirmação de senha não pode estar em branco`)
                }
            }
        }
        return erros;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    return (<ValidacoesContext.Provider value={{ erros,validaUsuario }}>{children}</ValidacoesContext.Provider>)
}

