import { useRouter } from 'next/router';
import React from 'react'
import FormProduto from './FormProduto'
import SvgProduto from '../../public/undraw_Questions_re_1fy7.svg'
import { parseCookies } from 'nookies';


const Section2 = () => {

    const router = useRouter();
    const { token = null } = parseCookies();

    function final() {
        if(!!token){
            router.push("/assistencias/1")
        }else{
            router.push("/login")
        }
        
    }

    return (
        <div id="teste" className="w-full min-h-screen max-h-screen/2 flex justify-around items-center">
            <div className="container h-full h-fit pt-8 sm:py-8  flex items-center lg:justify-between justify-around w-full sm:w-4/5">
                <div className="xl:w-2/4 lg:w-2/5 hidden lg:block">
                    <SvgProduto />
                </div>
                <FormProduto final={final} />
            </div>
        </div>
    )
}

export default Section2
