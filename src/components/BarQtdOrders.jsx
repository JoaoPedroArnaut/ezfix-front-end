/* eslint-disable @next/next/no-img-element */
import { faCheckCircle, faClock, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const BarQtdOrders = () => {

  return (
    <>
      <div className="p-9 bg-blue-light w-full rounded-3xl">
        <div className="flex justify-around">
          <div className="flex">
            <div className="h-fit p-5 rounded-2xl bg-roxo">
              <FontAwesomeIcon icon={faInfoCircle} size="3x" />
            </div>
            <div className="flex flex-col ml-5 justify-center text-2xl">
              <b>Novos</b>
              <b>3</b>
            </div>
          </div>

          <div className="border-l-2" />

          <div className="flex">
            <div className="h-fit p-5 rounded-2xl bg-amarelo-andamento">
              <FontAwesomeIcon icon={faClock} size="3x" />
            </div>
            <div className="flex flex-col ml-5 justify-center text-2xl">
              <b>Em andamento</b>
              <b>3</b>
            </div>
          </div>

          <div className="border-l-2" />

          <div className="flex">
            <div className="h-fit p-5 rounded-2xl bg-green-light">
              <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            </div>
            <div className="flex flex-col ml-5 justify-center text-2xl">
              <b>Finalizados</b>
              <b>3</b>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BarQtdOrders