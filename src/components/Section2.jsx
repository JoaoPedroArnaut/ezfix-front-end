import React from 'react'
import FormProduto from './FormProduto'

const Section2 = () => {
    return (
        <div id="teste" className="w-full min-h-screen max-h-screen/2 flex justify-around items-center">
            <div className="container h-full h-fit pt-8 sm:py-8  flex items-center lg:justify-between justify-around w-full sm:w-4/5">
                <img src="/undraw_Questions_re_1fy7.svg" alt="" className="xl:w-2/4 lg:w-2/5 hidden lg:block" />
                <FormProduto />
            </div>
        </div>
    )
}

export default Section2
