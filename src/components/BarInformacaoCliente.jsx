/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Bola from './Bola'


const BarInformacaoCliente = ({ nome, data, id,status }) => {

  const [etapa, setEtapa] = useState("")

  useEffect(() => {
    if (status == "agurdando resposta tecnico") {
      setEtapa("novo")
    }
  }, [])
  return (
    <>
      <div className="flex items-center justify-around bg-blue-light_dark rounded-t-2xl mt-7 ">

        <p className="font-bold">{nome}</p>

        <div className="flex items-center justify-center">

          <Bola />

          <span>{etapa}</span>
        </div>
        <div className="w-52 flex items-center justify-around">
          <span>{data}</span>
          <span className="font-bold">#{id}</span>

        </div>
      </div>

    </>
  )
}

export default BarInformacaoCliente