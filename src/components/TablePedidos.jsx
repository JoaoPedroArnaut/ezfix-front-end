import { faCaretDown, faCaretRight, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Bola from './Bola';

const TablePedidos = ({ nome, status, id, data, itens }) => {

  const [sectionExt, setSectionExt] = useState(false);
  const [etapa, setEtapa] = useState("")
  const [estilo,setEstilo] = useState("")

  const router = useRouter();

  useEffect(() => {
    if (status == "agurdando resposta tecnico") {
      setEtapa("Novo")
      setEstilo("bg-roxo")
    }else{
      setEtapa("Em andamento")
      setEstilo("bg-amarelo-andamento")
    }
  }, [])

  return (
    <>
      <div  className={sectionExt ? "flex items-center justify-around bg-blue-light_dark rounded-t-2xl mt-7  "
        : "flex items-center justify-around bg-blue-light_dark  rounded-2xl mt-7"}>

        <p>{nome}</p>

        <div className="flex items-center justify-center">
          <div className={`h-6 w-6 rounded-full ${estilo} mr-4`}></div>
          <span>{etapa}</span>
        </div>
        <div className="w-52 flex items-center justify-around">
          <span>{data}</span>
          <span className="font-bold">#{id}</span>

        </div>
        <div className="flex items-center w-48 justify-evenly">

          {etapa == "Novo" && <div onClick={() => { router.push(`/pedidosOrcamentosTecnico?${id}`) }} className="bg-gray-opacity rounded-3xl p-2 cursor-pointer">
            <b className="text-white text-sm">Detalhes</b>
          </div>}

          <div className="cursor-pointer" onClick={() => setSectionExt(!sectionExt)}>
            <FontAwesomeIcon icon={sectionExt ? faCaretDown : faCaretRight} size="2x" className="align-middle" />
          </div>
        </div>

      </div>

      {sectionExt &&
        <div className="flex justify-center w-full">
          <table className="w-full rounded-b-2xl bg-blue-light">
            <thead>
              <tr>
                <th className="border-gray border-solid border-b py-3">Produto</th>
                <th className="border-gray border-solid border py-3">Marca</th>
                <th className="border-gray border-solid border py-3">Modelo</th>
                <th className="border-gray border-solid border-b py-3">Categoria</th>
              </tr>
            </thead>
            <tbody>

              {itens.map((item) =>
              (<tr>
                <td className="border-gray border-solid border-b text-center">{item.produto.tipo}</td>
                <td className="border-gray border-solid border text-center">{item.produto.marca}</td>
                <td className="border-gray border-solid border text-center">{item.produto.modelo}</td>
                <td className="border-gray border-solid border-b text-center">{item.problema}</td>
              </tr>)
              )}
            </tbody>
          </table>
        </div>
      }

    </>
  )
}

export default TablePedidos
