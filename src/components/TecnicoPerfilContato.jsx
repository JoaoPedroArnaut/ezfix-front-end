import React, { useState } from 'react'
import Botao from './Botao';
import Input from './Input'

const TecnicoPerfilContato = () => {
    const [editar, setEditar] = useState(false);
    const [email, setEmail] = useState("");
    const [telPrimario, setTelPrimario] = useState("");
    const [telSecundario, setTelSecundario] = useState("");

    function mascaraTel(v, set) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        return v;
    }

    return (
        <>
            <div className="flex  flex-col w-2/3 mt-20">
                <div className="flex items-center justify-start">
                    <span className="font-semibold text-2xl">Contato</span>
                    <img onClick={() => setEditar(!editar)} src="./Edit.png" alt="Editar" className="hover:bg-blue p-1 rounded-xl cursor-pointer ml-10" />
                </div>

                <Input label="E-mail" onChange={e => setEmail(e.target.value)} value={email} alternativoDois disabled={!editar} />
                <div className="flex justify-between">
                    <div className="w-45">
                        <Input label="Telefone Primário" onChange={e => { setTelPrimario(mascaraTel(e.target.value)) }} value={telPrimario} alternativoDois disabled={!editar} />
                    </div>
                    <div className="w-45">
                        <Input label="Telefone Secundário" onChange={e => { setTelSecundario(mascaraTel(e.target.value)) }} value={telSecundario} alternativoDois disabled={!editar} />
                    </div>
                </div>
                {editar &&
                    <div className="self-end mt-5">
                        <Botao estilo={8} text="Salvar" />
                    </div>
                }
            </div>
        </>
    )
}

export default TecnicoPerfilContato
