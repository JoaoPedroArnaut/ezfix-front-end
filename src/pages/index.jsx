import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Footer from "../components/Footer"


function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <Banner />
            <Section2 />
            <Section3/>
            <Footer />
        </>
    )
}

export default Home