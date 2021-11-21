import React from 'react'
import Input from './Input'

const TecnicoPerfilContato = () => {
    return (
        <>
            <div className="w-2/3 mt-20">
                <span className="font-semibold text-2xl">Contato</span>

                <Input label="E-mail" value="E-mail do mano" alternativoDois />
                <div className="flex justify-between">
                    <div className="w-45">
                        <Input label="Telefone Primário" value="(11)951562574" alternativoDois />
                    </div>
                    <div className="w-45">
                        <Input label="Telefone Secundário" value="Telefone 2 do mano" alternativoDois />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TecnicoPerfilContato
