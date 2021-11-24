import React from 'react'


const SectionStatusOrders = () => {
    return (
        <>
           <section className="flex items-center justify-between mt-7">
            <div className="p-6 bg-blue-light flex items-center rounded-full w-1/2 justify-between">
              <div className=" cursor-pointer rounded-3xl p-2 hover:bg-blue-dark hover:text-white">
                <b>Novos</b>
              </div>
              <div className="cursor-pointer rounded-3xl p-2 hover:bg-blue-dark hover:text-white">
                <b>Em andamento</b>
              </div>
              <div className="cursor-pointer rounded-3xl p-2 hover:bg-blue-dark hover:text-white">
                <b>Finalizados</b>
              </div>
            </div>
            <div className="flex items-center">
              <b className="mr-3">Filtro:</b>
              <select className="p-4 bg-blue-light rounded-2xl" name="" id="">
                <option value="">Selecione</option>
              </select>
            </div>
          </section>
        </>
    )
}

export default SectionStatusOrders