import React, {useState} from 'react'
import Botao from './Botao'
import CardCertificacao from './CardCertificacao'
import ModalNovoCert from './ModalNovoCert'

const TecnicoAbaCertificado = ({setModalNovoCert, setModalEditar}) => {
    
    return (
        <>
            <div className="grid grid-cols-1 gap-10 justify-start w-full mt-32">

                <CardCertificacao setModalEditar={setModalEditar} nomeCurso="Manuntenção de Celuladares avançado" dataConclusao="20/11/2021" dataInicio="01/01/2020" cargaHoraria="840 Horas" alternativo={true} />
                <CardCertificacao nomeCurso="Especialização em reparo de notebooks" dataConclusao="20/11/2021" dataInicio="01/01/2020" cargaHoraria="840 Horas" alternativo={true} />
                <CardCertificacao nomeCurso="Conserto de placa-mãe" dataConclusao="20/11/2021" dataInicio="01/01/2020" cargaHoraria="840 Horas" alternativo={true} />
            </div>
            <Botao estilo={5} text="Adicionar" onClick={()=>setModalNovoCert(true)}/>

            {/* <ModalNovoCert/> */}

        </>
    )
}

export default TecnicoAbaCertificado
