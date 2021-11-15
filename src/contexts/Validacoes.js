import { createContext, useState } from "react";
import { validate } from 'gerador-validador-cpf'

export const ValidacoesContext = createContext({});

export const ValidacoesProvider = ({ children }) => {
    const [erros, setErros] = useState([])


    function validaEndereco(form) {
        let tmpErros = [...isBlank(form)]
        setErros(tmpErros)
        if (tmpErros.length == 0) { }
        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function validaAttDadosPessoais(antigo,novo) {
        let tmpErros = [...isBlank(novo)]
        setErros(tmpErros)
        let tmpTelPrimario = limpaFormatacao(novo.telPrimario)
        let tmpTelSecundario = limpaFormatacao(novo.telSecundario)
        if (tmpErros.length == 0) {
            if (tmpTelPrimario.length < 10) {
                tmpErros.push("telefone primario deve ter ao menos 10 digitos")
            }

            if (tmpTelSecundario != "" && tmpTelSecundario.length < 10) {
                tmpErros.push("telefone secundario deve ter ao menos 10 digitos")
            }
        }

        setErros(tmpErros)
        if (tmpErros.length == 0) {
            if(antigo.nome != novo.nome || antigo.telefonePrimario != tmpTelPrimario || antigo.telefoneSecundario != tmpTelSecundario){
                return true
            }else{
                return false
            }
        } else {
            return false
        }
    }

    function validaDadosPessoais(form) {
        let tmpErros = [...isBlank(form)]
        setErros(tmpErros)
        let tmpTelPrimario = limpaFormatacao(form.telPrimario)
        let tmpTelSecundario = limpaFormatacao(form.telSecundario)
        if (tmpErros.length == 0) {
            if (!validate(limpaFormatacao(form.cpf))) {
                tmpErros.push("cpf invalido")
            }
            if (tmpTelPrimario.length < 10) {
                tmpErros.push("telefone primario deve ter ao menos 10 digitos")
            }

            if (tmpTelSecundario != "" && tmpTelSecundario.length < 10) {
                tmpErros.push("telefone secundario deve ter ao menos 10 digitos")
            }
        }

        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function validaUsuario(form) {
        let tmpErros = [...isBlank(form)]
        if (tmpErros.length == 0) {
            if (form.senha != form.confirmSenha) {
                tmpErros.push("As senhas não coincidem")
            } else {
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
            if (!validateEmail(form.email)) {
                tmpErros.push("email invalido")
            }
        }
        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function limpaFormatacao(v) {
        v = v.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '')
        return v;
    }

    function isBlank(form) {
        let erros = []
        for (let i in form) {
            if (form[i] == "") {
                if (i == "confirmSenha") {
                    erros.push(`confirmação de senha não pode estar em branco`)
                } else if (i == "telPrimario") {
                    erros.push(`telefone principal não pode estar em branco`)
                } else if (i == "telSecundario") {

                } else if (i == "complemento") {

                } else if (i == "dataNasc") {
                    erros.push(`data de nascimento não pode estar em branco`)
                } else {
                    erros.push(`${i} não pode estar em branco`)
                }
            }
        }
        return erros;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return (<ValidacoesContext.Provider value={{ erros, validaAttDadosPessoais, validaUsuario, validaDadosPessoais, validaEndereco, setErros, isBlank }}>{children}</ValidacoesContext.Provider>)
}

