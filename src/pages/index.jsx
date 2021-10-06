import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"


function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <Banner />
            <Section2 />
            <Section3/>
        </>
    )
}

export default Home