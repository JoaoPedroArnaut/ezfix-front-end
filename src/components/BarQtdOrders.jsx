import React from 'react'


const BarQtdOrders = () => {

    return (
       <>
           <div className="p-9 bg-blue-light w-full rounded-3xl">
            <div className="flex justify-around">
              <div className="flex">
                <img
                  src="/newOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
                  <b>Novos</b>
                  <b>3</b>
                </div>
              </div>

              <div className="flex b">
                <img
                  src="/andamentoOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
                  <b>Em andamento</b>
                  <b>3</b>
                </div>
              </div>

              <div className="flex">
                <img
                  src="/readyOrders.png"
                  alt="newOrders"
                  className="w-16 mr-4"
                />
                <div className="flex flex-col">
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