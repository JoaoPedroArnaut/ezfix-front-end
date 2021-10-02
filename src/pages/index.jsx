import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar botoes={["Solução","Diferenciais","Sobre","Contato"]} login="login/cadastro" />
            <div className="container flex content-around justify-center max-w-full alturaSemNavbar w-full"> </div>
        </>
    )
}

export default Home