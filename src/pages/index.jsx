import Navbar from "../components/Navbar"
import Image from 'next/image'
import Botao from "../components/Botao"
import Banner from "../components/Banner"

function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]}/>
            <Banner/>
            <div className="alturaSemNavbar w-full">

            </div>

        </>
    )
}

export default Home