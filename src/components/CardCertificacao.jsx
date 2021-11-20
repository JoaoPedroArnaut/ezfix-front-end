import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'

const CardCertificacao = ({ nomeCurso, cargaHoraria, dataInicio, dataConclusao }) => {
    const [expandido, setExpandido] = useState(false);
    return (
        <>
            <div>
                <div onClick={() => setExpandido(!expandido)} className={expandido ? "bg_white rounded-b-none rounded-t-xl overflow-hidden bg-blue-light shadow-md relative p-5 hover:bg-gray"
                    : "bg_white rounded-xl overflow-hidden bg-blue-light shadow-md relative p-5 hover:bg-gray"}>
                    <div className="w-full flex justify-center text-center text-xl">
                        <div className="w-4/5 cursor-default">
                            <span>{nomeCurso}</span>
                        </div>
                        <div className="absolute top-0 right-0 mr-5 mt-3">
                            <FontAwesomeIcon icon={expandido ? faCaretDown : faCaretRight} size="2x" />
                        </div>
                    </div>
                </div>
                {expandido &&
                    <div className="flex flex-col p-5 text-lg border-2 border-opacity-10 border-black shadow-lg rounded-b-xl">
                        <span>Carga horária: <span className="font-semibold">{cargaHoraria}</span></span>
                        <span>Data início: <span className="font-semibold">{dataInicio}</span></span>
                        <span>Data conclusão: <span className="font-semibold">{dataConclusao}</span></span>
                        <div className="text-right">
                            <FontAwesomeIcon icon={faSearch} size="2x" className="hover:bg-blue-dark hover:text-white p-2 rounded-full cursor-pointer" />
                        </div>
                    </div>
                }

            </div>

        </>
    )
}

export default CardCertificacao
// bg_white rounded overflow-hidden shadow-md relative