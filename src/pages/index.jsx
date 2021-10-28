import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Footer from "../components/Footer"


function Home() {
    return (
        <>
            <Navbar fixed={true} login={["Login", "Criar conta"]} />
            <Banner />
            <Section2 />
            <Section3/>
            <Footer />
        </>
    )
}

export default Home