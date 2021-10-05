import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import FormProduto from "../components/FormProduto"


function Home() {
    return (
        <>
            <Navbar login={["Login", "Criar conta"]} />
            <Banner />
            <div className="w-full alturaSemNavbar">
                <div className="container h-full flex items-center lg:justify-between justify-around w-full sm:w-4/5">
                    <img src="/undraw_Questions_re_1fy7.svg" alt="" className="xl:w-2/4 lg:w-2/5 hidden lg:block"/>
                    <FormProduto/>
                </div>
            </div>

        </>
    )
}

export default Home