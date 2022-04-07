import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CardCertificacao from './CardCertificacao'

const Certificaçoes = ({certificados}) => {

    const [sectionExt, setSectionExt] = useState(true);

    return (
        <>
            <div className="flex justify-center w-full mt-10">
                <div className="w-4/5 flex flex-col items-center justify-around text-3xl">
                    <div className=" flex justify-center relative w-full mb-2">
                        <span>Certificações</span>
                        <div className="absolute right-0 w-10 h-10 text-center cursor-pointer px-2 hover:bg-blue-dark rounded-full hover:text-white">
                            <FontAwesomeIcon icon={sectionExt ? faChevronDown : faChevronRight} className="align-middle" onClick={() => setSectionExt(!sectionExt)} />
                        </div>
                    </div>
                    <div className="border-b-4 border-blue-dark w-full mb-10"></div>
                    {sectionExt &&
                        <div className="w-full flex justify-around mb-20">
                            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
                                {certificados.map((certificado, index) => <CardCertificacao key={index} nomeCurso={certificado.nomeCurso} dataConclusao={certificado.dataConclusao} dataInicio={certificado.dataInicio} cargaHoraria={certificado.quantidadeHoras} /> )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Certificaçoes
