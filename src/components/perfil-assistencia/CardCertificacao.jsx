import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight, faEdit, faPaperclip, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import RenderIf from '../RenderIf';

const CardCertificacao = ({ nomeCurso, cargaHoraria, dataInicio, dataConclusao, alternativo, setModalEditar }) => {
    const [expandido, setExpandido] = useState(false);

    return (
        <>
            <RenderIf condition={alternativo}>
                <div>
                    <div onClick={() => setExpandido(!expandido)} className={"bg-gray-blue shadow-md py-2 px-5 hover:bg-gray" + expandido ? "rounded-t-xl": "bg_white rounded-xl"}>
                        <div className="w-full flex justify-center text-center text-xl">
                            <div className="flex items-center justify-between w-full cursor-default">
                                <span>{nomeCurso}</span>
                                <FontAwesomeIcon icon={expandido ? faCaretDown : faCaretRight} size="2x" />
                            </div>
                        </div>
                    </div>
                    <RenderIf condition={expandido}>
                        <div className="flex flex-col p-5 bg-gray-light text-lg border-2 border-opacity-10 border-black shadow-lg rounded-b-xl">
                            <div className="flex justify-between">
                                <span>Data início: <strong>{dataInicio}</strong></span>
                                <span>Carga horária: <strong>{cargaHoraria}</strong></span>
                            </div>
                            <span>Data conclusão: <strong>{dataConclusao}</strong></span>
                            <div className="text-right">
                                <FontAwesomeIcon icon={faTrashAlt} size="2x" className="hover:bg-red hover:text-white p-2 rounded-full cursor-pointer" />
                                <FontAwesomeIcon icon={faPaperclip} size="2x" className="hover:bg-blue-dark hover:text-white p-2 rounded-full cursor-pointer" />
                                <FontAwesomeIcon onClick={() => setModalEditar(true)} icon={faEdit} size="2x" className="hover:bg-blue-dark hover:text-white p-2 rounded-full cursor-pointer" />
                            </div>
                        </div>
                    </RenderIf>
                </div>
            </RenderIf>
            <RenderIf condition={!alternativo}>
                <div>
                    <div onClick={() => setExpandido(!expandido)} className={expandido ? "rounded-t-xl bg-blue-light shadow-md relative p-5 hover:bg-gray"
                        : "rounded-xl bg-blue-light shadow-md relative p-5 hover:bg-gray"}>
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
                        <div className="flex flex-col p-5 bg-white text-lg border-2 border-opacity-10 border-black shadow-lg rounded-b-xl">
                            <span>Carga horária: <strong>{cargaHoraria}</strong></span>
                            <span>Data início: <strong>{dataInicio}</strong></span>
                            <span>Data conclusão: <strong>{dataConclusao}</strong></span>
                            <div className="text-right">
                                <FontAwesomeIcon icon={faSearch} size="2x" className="hover:bg-blue-dark hover:text-white p-2 rounded-full cursor-pointer" />
                            </div>
                        </div>
                    }

                </div>

            </RenderIf>
        </>
    )
}
    



export default CardCertificacao
// bg_white rounded overflow-hidden shadow-md relative