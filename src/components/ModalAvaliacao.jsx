import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import Botao from "../components/Botao";


const ModalAvaliacao = () => {

    const [avaliacao, setAvaliacao] = useState();
    const [comentario, setComentario] = useState("");

    const ratingChanged = (novaAvaliacao) => {
        setAvaliacao(novaAvaliacao);
        console.log(novaAvaliacao);
        console.log(comentario);
    };


    return (
        <>
            <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                <div className="w-full h-screen flex justify-center items-center">
                    <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Avalie o Serviço</h1>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={100}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                        <div className="flex justify-between w-full mb-5">
                            <span>Deixe um comentário sobre:</span>
                            <span className="text-gray-dark">{comentario.length}/50</span>
                        </div>
                        <input maxLength="50" onChange={e => { setComentario(e.target.value) }} type="text" className="bg-blue-light p-4 rounded-2xl mb-5 w-full" />
                        <Botao text="Avaliar" estilo={8}/>
                    </div>
                </div>
            </div>
        </>
    )

}


export default ModalAvaliacao