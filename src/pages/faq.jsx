import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LabelFaq from "../components/LabelFaq"


function Faq() {
    return (
        <>

            <Navbar fixed={false}/>
            <section className = "flex flex-col items-center justify-center p-40 font-bold text-4xl">
            <h1 className = "mb-8"> Dúvidas </h1>
            <div className = " border-solid border-black border-2 w-full p-20" >
               <h1 className =  "text text-3xl font-bold mb-8 " >Sobre a EZFIX</h1>
                <LabelFaq/>

            </div>
            </section>
            
            <Footer />
        </>
    )
}

export default Faq