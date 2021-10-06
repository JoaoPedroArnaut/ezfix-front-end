import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Section2 from "../components/Section2"


function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <Banner />
            <Section2/>
            <div className="alturaSemNavbar"></div>
        </>
    )
}

export default Home