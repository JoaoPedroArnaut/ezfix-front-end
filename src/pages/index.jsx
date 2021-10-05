import Navbar from "../components/Navbar"
import Image from 'next/image'
import Botao from "../components/Botao"

function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <div className="alturaSemNavbar w-full bg-banner bg-cover flex justify-around">
                <div className="container h-full flex items-center sm:w-4/5 xl:w-full justify-around lg:justify-start">
                    <div className="p-4 bg-black bg-opacity-50 sm:w-96 w-full min-w-min rounded-xl">
                        <h1 className="text-3xl text-white font-bold mb-4">Está com dificuldade para encontrar uma assistência técnica ideal?</h1>
                        <hr className="text-white w-2/3 text-opacity-25" />
                        <p className="text-white text-xl my-4">Nós a EZFix vamos te proporcionar uma busca simples e em poucos passos. Vamos lá?</p>
                        <hr className="text-white w-2/3 text-opacity-25" />
                        <div className="w-2/3 mt-4 flex justify-around">
                            <Botao text="Vamos!" claro="true" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home