import React from 'react'

const EtapaLinhaStatus = ({ checked }) => {
    if (checked) {
        return (
            <div className="flex w-full justify-center items-center">
                <hr className="w-11/12 rounded-full text-blue-dark border-4" />
            </div>
        )
    } else {
        return (
            <div className="flex w-full justify-center items-center">
                <hr className="w-11/12 rounded-full text-gray-blue border-4" />
            </div>
        )

    }
}

export default EtapaLinhaStatus