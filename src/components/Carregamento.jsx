/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const Carregamento = () => {
    return (
        <div className="h-screen w-full pt-24 flex items-center m-auto">
            <div className='m-auto'>
                <Image src="/hug.gif" height={150} width={150} alt="carregamento" />
            </div>
        </div>
    )
}

export default Carregamento
